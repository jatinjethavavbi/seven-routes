import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SHEET_URL ||
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbwWiIK503_W7oEHNMvn9elMqfADa40z6US6KogwQfTQy5P4McOizaaLDoiQWRw296YT/exec';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const payload = {
      source: body.source || 'Website Contact Form',
      name: body.name || '',
      phone: body.phone || '',
      email: body.email || '',
      company: body.company || '',
      service: body.service || body.subject || '',
      route: body.route || '',
      branchPreference: body.branchPreference || '',
      message: body.message || '',
      image: body.image || null,
      fileName: body.fileName || null,
      mimeType: body.mimeType || null,
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

    // Check if Google returned an HTML page (usually permission/login required)
    if (text.includes('<!DOCTYPE html>') || text.includes('<html') || text.includes('accounts.google.com')) {
      console.error('Google Apps Script returned an HTML page instead of JSON. Ensure "Who has access" is set to "Anyone".');
      return NextResponse.json(
        {
          success: false,
          error:
            'Google Apps Script authorization error. In Google Apps Script, click "Deploy > Manage Deployments > Edit", select "Version: New version", and verify "Who has access" is set to "Anyone".',
          raw: text.slice(0, 300),
        },
        { status: 403 }
      );
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { success: false, error: 'Non-JSON response from Google Apps Script', raw: text };
    }

    if (data.success === false) {
      return NextResponse.json(data, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error forwarding contact data to Google Apps Script:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit' },
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
