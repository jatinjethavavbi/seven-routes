import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SHEET_URL ||
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

const FRIENDLY_ERROR =
  'Something went wrong. Please call +91 81281 28791 or email ops@sevenrouteslogistics.com';

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
    if (!GOOGLE_SCRIPT_URL) {
      console.error('[Contact API] GOOGLE_SHEET_URL environment variable is not set.');
      return NextResponse.json(
        { success: false, error: FRIENDLY_ERROR },
        { status: 500 }
      );
    }

    const body = await req.json();

    const rawRoute = (body.route || '').toString().trim();
    const rawBranch = (body.branchPreference || '').toString().trim();
    const branchOrRoute =
      rawRoute && !rawRoute.startsWith('General Route /')
        ? rawRoute
        : (rawBranch || rawRoute);

    const rawName = (body.name || '').toString().trim();
    const rawCompany = (body.company || '').toString().trim();
    const combinedName = rawName && rawCompany ? `${rawName} / ${rawCompany}` : (rawName || rawCompany);

    const payload = {
      name: combinedName,
      email: (body.email || '').toString().trim(),
      phone: (body.phone || '').toString().trim(),
      service: (body.service || body.subject || '').toString().trim(),
      route: branchOrRoute,
      message: (body.message || '').toString().trim(),
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
