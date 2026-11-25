import { NextRequest, NextResponse } from 'next/server';
import { validateContactInquiry } from '../../../lib/contactValidation';

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SHEET_URL ||
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

const FRIENDLY_ERROR =
  'We could not send your inquiry. Please call +91 81281 28791 or email ops@sevenrouteslogistics.com';

const MAX_BODY_BYTES = 10 * 1024; // 10 KB
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const ipSubmissions = new Map<string, number[]>();

const BRANCH_EMAIL_MAP: Record<string, string> = {
  'Corporate Office (Goregaon, Mumbai)': 'ops@sevenrouteslogistics.com',
  'Mumbai Office (Mulund)': 'ops@sevenrouteslogistics.com',
  'Surat Desk': 'divyesh.t@sevenrouteslogistics.com',
  'Ahmedabad Desk': 'ajay.b@sevenrouteslogistics.com',
  'Mumbai HQ': 'ops@sevenrouteslogistics.com',
};

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipSubmissions.get(ip) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    ipSubmissions.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  ipSubmissions.set(ip, timestamps);
  return false;
}

function escapeSheetFormula(value: string): string {
  if (/^[=+\-@]/.test(value)) {
    return `'${value}`;
  }
  return value;
}

function redactSensitive(input: string): string {
  return input
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[redacted-email]')
    .replace(/AKfy[A-Za-z0-9_-]{10,}/g, '[redacted-token]')
    .replace(/(nonce|token|key|secret)=["'][^"']+["']/gi, '$1="[redacted]"');
}

function logFailureDiagnostics(
  reason: string,
  response: Response,
  rawBody: string
) {
  console.error(`[Contact API] ${reason}`, {
    status: response.status,
    finalUrl: redactSensitive(response.url || ''),
    contentType: response.headers.get('content-type'),
    bodyPreview: redactSensitive(rawBody).slice(0, 300),
  });
}

export async function POST(req: NextRequest) {
  try {
    const contentLengthHeader = req.headers.get('content-length');
    if (contentLengthHeader && Number(contentLengthHeader) > MAX_BODY_BYTES) {
      return NextResponse.json(
        { success: false, error: 'Request payload is too large.' },
        { status: 413 }
      );
    }

    const rawBody = await req.text();
    if (Buffer.byteLength(rawBody, 'utf8') > MAX_BODY_BYTES) {
      return NextResponse.json(
        { success: false, error: 'Request payload is too large.' },
        { status: 413 }
      );
    }

    let body: Record<string, unknown>;
    try {
      const parsed = JSON.parse(rawBody);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        throw new Error('Body must be a JSON object');
      }
      body = parsed as Record<string, unknown>;
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request body.' },
        { status: 400 }
      );
    }

    // Silent honeypot check
    if (typeof body.website === 'string' && body.website.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Inquiry received.',
      });
    }

    // Rate limit per IP
    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a few minutes or call +91 81281 28791.',
        },
        { status: 429 }
      );
    }

    // Never trust browser-supplied routing emails
    delete body.assignedTo;
    delete body.notifyEmail;

    const incomingBranch =
      typeof body.branchPreference === 'string' ? body.branchPreference.trim() : '';
    if (incomingBranch && !BRANCH_EMAIL_MAP[incomingBranch]) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please select a valid office desk.',
          errors: { branchPreference: 'Please select a valid office desk.' },
        },
        { status: 400 }
      );
    }

    const validation = validateContactInquiry(body as Record<string, string>, {
      requireMessage: body.source === 'Contact Page Inquiry',
      validateBranch: Boolean(incomingBranch),
    });

    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: validation.error,
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    if (!GOOGLE_SCRIPT_URL) {
      console.error('[Contact API] GOOGLE_SHEET_URL environment variable is not set.');
      return NextResponse.json(
        { success: false, error: FRIENDLY_ERROR },
        { status: 500 }
      );
    }

    const normalized = validation.values;
    const assignedEmail =
      BRANCH_EMAIL_MAP[normalized.branchPreference] || 'ops@sevenrouteslogistics.com';

    const payload = {
      name: escapeSheetFormula(normalized.name),
      email: escapeSheetFormula(normalized.email),
      phone: normalized.phone,
      service: escapeSheetFormula(normalized.service),
      route: escapeSheetFormula(normalized.route),
      message: escapeSheetFormula(normalized.message),
      assignedTo: assignedEmail,
      notifyEmail: assignedEmail,
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const text = await response.text();
    const finalUrl = response.url || '';

    // Case 1: Redirected to Google Sign-In / real access problem
    if (
      finalUrl.includes('accounts.google.com') ||
      finalUrl.includes('ServiceLogin') ||
      text.includes('accounts.google.com') ||
      text.includes('ServiceLogin') ||
      text.includes("window['ppConfig']")
    ) {
      logFailureDiagnostics(
        'Access denied / redirected to Google Sign-In. Ensure "Execute as: Me" and "Who has access: Anyone".',
        response,
        text
      );
      return NextResponse.json(
        { success: false, error: FRIENDLY_ERROR },
        { status: 403 }
      );
    }

    // Case 2: Script needs re-authorization by the owner
    if (text.includes('Authorization required') || text.includes('needs your permission')) {
      logFailureDiagnostics(
        'Apps Script requires re-authorization by the owner (run testSubmit in the script editor and click Allow).',
        response,
        text
      );
      return NextResponse.json(
        { success: false, error: FRIENDLY_ERROR },
        { status: 403 }
      );
    }

    // Case 3: HTML error page from Google (e.g. TypeError, ReferenceError, Exception)
    if (text.includes('<!DOCTYPE html>') || text.includes('<html')) {
      const runtimeErrorMatch = text.match(/(TypeError|ReferenceError|SyntaxError|Exception|Error):[^\n<]*/i);
      logFailureDiagnostics(
        `Apps Script returned an HTML error page.${runtimeErrorMatch ? ' Error: ' + runtimeErrorMatch[0] : ''}`,
        response,
        text
      );
      return NextResponse.json(
        { success: false, error: FRIENDLY_ERROR },
        { status: 502 }
      );
    }

    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      logFailureDiagnostics('Non-JSON response from Google Apps Script.', response, text);
      return NextResponse.json(
        { success: false, error: FRIENDLY_ERROR },
        { status: 502 }
      );
    }

    // Case 4: JSON with success: false
    if (data.success === false) {
      logFailureDiagnostics(`Apps Script returned success: false (${data.error || 'unknown error'}).`, response, text);
      return NextResponse.json(
        { success: false, error: data.error || FRIENDLY_ERROR },
        { status: 400 }
      );
    }

    if (!response.ok) {
      logFailureDiagnostics(`Unexpected HTTP status ${response.status} from Apps Script.`, response, text);
      return NextResponse.json(
        { success: false, error: FRIENDLY_ERROR },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('[Contact API] Error forwarding contact data to Google Apps Script:', error?.message || error);
    return NextResponse.json(
      { success: false, error: FRIENDLY_ERROR },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'online',
    endpoint: 'Seven Routes Google Sheet Integration API',
  });
}
