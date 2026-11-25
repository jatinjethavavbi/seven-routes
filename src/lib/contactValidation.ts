export const ALLOWED_SERVICES = [
  'International Freight Forwarding',
  'Chemical & Pharma Cargo Handling',
  'Freight Procurement - Ocean (FCL, LCL) and Air Cargo',
  'Special Equipment Handling - OOG, Reefer',
  'Clearance and Local Transportation',
  'Worldwide Agency Network',
  'Textile Machinery Imports',
] as const;

export const ALLOWED_BRANCHES = [
  'Corporate Office (Goregaon, Mumbai)',
  'Mumbai Office (Mulund)',
  'Surat Desk',
  'Ahmedabad Desk',
  'Mumbai HQ',
] as const;

export type ContactFieldName =
  | 'name'
  | 'email'
  | 'phone'
  | 'subject'
  | 'branchPreference'
  | 'route'
  | 'message';

export type ContactFieldErrors = Partial<Record<ContactFieldName, string>>;

export interface ContactValidationInput {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  subject?: string;
  route?: string;
  branchPreference?: string;
  message?: string;
}

export interface SanitizedContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  route: string;
  message: string;
  branchPreference: string;
}

export interface ContactValidationResult {
  valid: boolean;
  error?: string;
  errors: ContactFieldErrors;
  hints: { email?: string };
  data: SanitizedContactPayload;
  values: SanitizedContactPayload;
}

const COMMON_EMAIL_DOMAINS = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'] as const;
const EMAIL_TYPO_MAP: Record<string, string> = {
  'gmial.com': 'gmail.com',
  'gmai.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gnail.com': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'gmail.co': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'yhoo.com': 'yahoo.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'outllook.com': 'outlook.com',
  'hotmial.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'hotmal.com': 'hotmail.com',
};

const EMAIL_ERROR_MSG = 'Enter a valid email address, for example name@company.com';
const PHONE_REQUIRED_ERROR_MSG = 'Please enter your mobile number.';
const PHONE_FORMAT_ERROR_MSG = 'Phone number can contain only digits, spaces, + and -';
const PHONE_INVALID_ERROR_MSG = 'Please enter a valid mobile number.';

export function stripControlChars(value: string, allowNewlines = false): string {
  if (allowNewlines) {
    return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
  }
  return value.replace(/[\u0000-\u001F\u007F]/g, '');
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[] = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const temp = dp[j];
      dp[j] =
        a[i - 1] === b[j - 1]
          ? prev
          : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = temp;
    }
  }
  return dp[n];
}

function getEmailTypoHint(local: string, domainLower: string): string | undefined {
  if ((COMMON_EMAIL_DOMAINS as readonly string[]).includes(domainLower)) {
    return undefined;
  }
  if (EMAIL_TYPO_MAP[domainLower]) {
    return `Did you mean ${local}@${EMAIL_TYPO_MAP[domainLower]}?`;
  }
  for (const target of COMMON_EMAIL_DOMAINS) {
    if (levenshtein(domainLower, target) === 1) {
      return `Did you mean ${local}@${target}?`;
    }
  }
  return undefined;
}

export function validateEmail(emailInput: string): {
  valid: boolean;
  error?: string;
  hint?: string;
  normalized: string;
} {
  const trimmed = stripControlChars((emailInput ?? '').toString()).trim();
  if (!trimmed || trimmed.length > 254 || /\s/.test(trimmed)) {
    return { valid: false, error: EMAIL_ERROR_MSG, normalized: trimmed };
  }

  const parts = trimmed.split('@');
  if (parts.length !== 2) {
    return { valid: false, error: EMAIL_ERROR_MSG, normalized: trimmed };
  }

  const [local, rawDomain] = parts;
  if (
    !local ||
    local.length > 64 ||
    local.startsWith('.') ||
    local.endsWith('.') ||
    local.includes('..') ||
    !/^[A-Za-z0-9._%+-]+$/.test(local)
  ) {
    return { valid: false, error: EMAIL_ERROR_MSG, normalized: trimmed };
  }

  const domain = rawDomain.toLowerCase();
  if (!domain.includes('.') || domain.includes('..')) {
    return { valid: false, error: EMAIL_ERROR_MSG, normalized: trimmed };
  }

  const labels = domain.split('.');
  const tld = labels[labels.length - 1];
  if (!/^[a-z]{2,24}$/.test(tld)) {
    return { valid: false, error: EMAIL_ERROR_MSG, normalized: trimmed };
  }

  for (const label of labels) {
    if (
      !label ||
      label.length > 63 ||
      label.startsWith('-') ||
      label.endsWith('-') ||
      !/^[a-z0-9-]+$/.test(label)
    ) {
      return { valid: false, error: EMAIL_ERROR_MSG, normalized: trimmed };
    }
  }

  const normalized = `${local}@${domain}`;
  const hint = getEmailTypoHint(local, domain);
  return { valid: true, normalized, hint };
}

function isFakeDigitPattern(digits: string): boolean {
  if (/^(\d)\1+$/.test(digits)) {
    return true;
  }
  return digits === '1234567890' || digits === '0123456789';
}

export function validatePhone(phoneInput: string): {
  valid: boolean;
  error?: string;
  normalized: string;
} {
  const raw = stripControlChars((phoneInput ?? '').toString()).trim();
  if (!raw) {
    return { valid: false, error: PHONE_REQUIRED_ERROR_MSG, normalized: '' };
  }

  const stripped = raw.replace(/[\s().-]/g, '');
  if (!stripped) {
    return { valid: false, error: PHONE_REQUIRED_ERROR_MSG, normalized: '' };
  }

  const hasPlus = stripped.startsWith('+');
  const body = hasPlus ? stripped.slice(1) : stripped;

  if (!/^\d+$/.test(body)) {
    return { valid: false, error: PHONE_FORMAT_ERROR_MSG, normalized: raw };
  }

  if (!hasPlus || stripped.startsWith('+91')) {
    let national = body;
    if (hasPlus && stripped.startsWith('+91')) {
      national = body.slice(2);
    } else if (!hasPlus) {
      if (national.length === 12 && national.startsWith('91')) {
        national = national.slice(2);
      } else if (national.length === 11 && national.startsWith('0')) {
        national = national.slice(1);
      }
    }

    if (!/^[6-9]\d{9}$/.test(national) || isFakeDigitPattern(national)) {
      return { valid: false, error: PHONE_INVALID_ERROR_MSG, normalized: raw };
    }

    return {
      valid: true,
      normalized: `+91 ${national.slice(0, 5)} ${national.slice(5)}`,
    };
  }

  if (!/^[1-9]\d{7,14}$/.test(body) || isFakeDigitPattern(body)) {
    return { valid: false, error: PHONE_INVALID_ERROR_MSG, normalized: raw };
  }

  return {
    valid: true,
    normalized: `+${body}`,
  };
}

export function validateContactInquiry(
  input: ContactValidationInput,
  options: { requireMessage?: boolean; validateBranch?: boolean } = {}
): ContactValidationResult {
  const errors: ContactFieldErrors = {};

  const rawName = stripControlChars((input.name ?? '').toString()).trim();
  const rawCompany = stripControlChars((input.company ?? '').toString()).trim();
  const name = rawName && rawCompany ? `${rawName} / ${rawCompany}` : (rawName || rawCompany);

  if (name.length < 2 || name.length > 100 || !/[A-Za-z]/.test(name)) {
    errors.name = 'Enter your name or company (2 to 100 characters, must include letters).';
  }

  const emailCheck = validateEmail(input.email ?? '');
  if (!emailCheck.valid) {
    errors.email = emailCheck.error;
  }

  const phoneCheck = validatePhone(input.phone ?? '');
  if (!phoneCheck.valid) {
    errors.phone = phoneCheck.error;
  }

  const service = stripControlChars((input.service ?? input.subject ?? '').toString()).trim();
  if (service && !(ALLOWED_SERVICES as readonly string[]).includes(service)) {
    errors.subject = 'Please select a valid service from the list.';
  }

  const rawRoute = stripControlChars((input.route ?? '').toString()).trim();
  const rawBranch = stripControlChars((input.branchPreference ?? '').toString()).trim();
  if (
    (options.validateBranch || rawBranch) &&
    rawBranch &&
    !(ALLOWED_BRANCHES as readonly string[]).includes(rawBranch)
  ) {
    errors.branchPreference = 'Please select a valid office desk.';
  }

  const route =
    rawRoute && !rawRoute.startsWith('General Route /')
      ? rawRoute
      : (rawBranch || rawRoute);

  if (route.length > 300) {
    errors.route = 'Route must be 300 characters or fewer.';
  }

  const message = stripControlChars((input.message ?? '').toString(), true).trim();
  if (options.requireMessage) {
    if (message.length < 10 || message.length > 2000) {
      errors.message = 'Please enter your cargo & requirement details (10 to 2000 characters).';
    }
  } else if (message.length > 2000) {
    errors.message = 'Shipment details must be 2000 characters or fewer.';
  }

  const firstError =
    errors.name ||
    errors.email ||
    errors.phone ||
    errors.subject ||
    errors.branchPreference ||
    errors.route ||
    errors.message;

  const sanitized: SanitizedContactPayload = {
    name,
    email: emailCheck.normalized,
    phone: phoneCheck.normalized,
    service: service || ALLOWED_SERVICES[0],
    route,
    message,
    branchPreference: rawBranch || 'Corporate Office (Goregaon, Mumbai)',
  };

  return {
    valid: !firstError,
    error: firstError,
    errors,
    hints: emailCheck.hint ? { email: emailCheck.hint } : {},
    data: sanitized,
    values: sanitized,
  };
}
