
// Owner's Google Sheet ID
const SPREADSHEET_ID = '1elu8QlY3MemMebtloT-ymY7llr7ISX7LTqYdJV93OI-fmQB2Lp2cDwHK';

const HEADERS = [
    'Time',
    'Name / Company',
    'Email Address',
    'Phone / Mobile Number',
    'Service Required',
    'Route (Origin & Destination)',
    'Shipment Details'
];

/**
 * Handle HTTP POST from website forms (Contact page & QuoteSection)
 */
function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(30000); // 30 second concurrency lock

    try {
        let data = null;
        if (e && e.postData && e.postData.contents) {
            data = JSON.parse(e.postData.contents);
        } else if (e && e.parameter && Object.keys(e.parameter).length > 0) {
            data = e.parameter;
        }

        if (!data) {
            return createJsonResponse({ success: false, error: 'Empty payload received' });
        }

        const result = processSubmission(data);
        return createJsonResponse(result);
    } catch (error) {
        Logger.log('Error processing submission: ' + error.toString());
        return createJsonResponse({
            success: false,
            error: error.message || error.toString() || 'Server error'
        });
    } finally {
        lock.releaseLock();
    }
}

/**
 * Process and append form data to the Google Sheet
 */
function processSubmission(data) {
    const rawName = (data.name || data.fullName || '').toString().trim();
    const rawCompany = (data.company || data.companyName || '').toString().trim();
    const nameAndCompany = rawName && rawCompany ? `${rawName} / ${rawCompany}` : (rawName || rawCompany);

    const email = (data.email || data.emailAddress || '').toString().trim().toLowerCase();
    const phone = (data.phone || data.mobile || data.phoneNumber || '').toString().trim();
    const service = (data.service || data.subject || data.serviceRequired || '').toString().trim();

    const origin = (data.origin || '').toString().trim();
    const destination = (data.destination || '').toString().trim();
    const rawRoute = (data.route || '').toString().trim();
    const rawBranch = (data.branchPreference || '').toString().trim();
    const route =
        (rawRoute && !rawRoute.startsWith('General Route /') ? rawRoute : '') ||
        (origin && destination ? `${origin} → ${destination}` : (origin || destination)) ||
        rawBranch;

    const message = (data.message || data.details || data.shipmentDetails || '').toString().trim();

    // Basic validation: must have at least name, phone, or email
    if (!nameAndCompany && !phone && !email) {
        return { success: false, error: 'Please provide at least a name, phone number, or email.' };
    }

    const sheet = getTargetSheet();
    const timestamp = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');

    // Ensure row 1 headers match HEADERS without deleting existing data rows
    setupHeadersIfNeeded(sheet);

    const rowValuesByHeader = {
        'Time': timestamp,
        'Name / Company': nameAndCompany,
        'Email Address': email,
        'Phone / Mobile Number': phone,
        'Service Required': service,
        'Route (Origin & Destination)': route,
        'Shipment Details': message
    };

    const row = HEADERS.map(function (header) {
        return rowValuesByHeader[header] !== undefined ? rowValuesByHeader[header] : '';
    });

    const nextRow = sheet.getLastRow() + 1;
    const timeCol = HEADERS.indexOf('Time') + 1;
    const phoneCol = HEADERS.indexOf('Phone / Mobile Number') + 1;

    // Format Time (col A) and Phone (col D) as plain text before writing
    if (timeCol > 0) {
        sheet.getRange(nextRow, timeCol).setNumberFormat('@');
    }
    if (phoneCol > 0) {
        sheet.getRange(nextRow, phoneCol).setNumberFormat('@');
    }

    sheet.getRange(nextRow, 1, 1, HEADERS.length).setValues([row]);

    return {
        success: true,
        message: 'Inquiry saved successfully to Seven Routes Google Sheet.'
    };
}

/**
 * Access the target spreadsheet (first/active tab)
 */
function getTargetSheet() {
    let ss = null;
    try {
        ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch (e) {
        ss = null;
    }
    if (!ss) {
        try {
            ss = SpreadsheetApp.getActiveSpreadsheet();
        } catch (e) {
            ss = null;
        }
    }
    if (!ss) {
        throw new Error('Spreadsheet not found. Please verify SPREADSHEET_ID.');
    }
    return ss.getActiveSheet() || ss.getSheets()[0];
}

/**
 * Setup plain bold headers in Row 1 of Google Sheets
 */
function setupHeaders(targetSheet) {
    const sheet = targetSheet || getTargetSheet();

    if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
    } else {
        const firstCell = (sheet.getRange(1, 1).getValue() || '').toString().trim();
        if (firstCell && firstCell !== 'Time' && firstCell !== 'Timestamp (IST)' && firstCell !== 'Name / Company') {
            sheet.insertRowBefore(1);
        }
        if (sheet.getLastColumn() > HEADERS.length) {
            sheet.getRange(1, HEADERS.length + 1, 1, sheet.getLastColumn() - HEADERS.length).clearContent();
        }
        sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    }

    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground(null);
    headerRange.setFontColor(null);
    sheet.setFrozenRows(1);

    Logger.log('Seven Routes Google Sheet headers setup completed.');
}

function setupHeadersIfNeeded(sheet) {
    if (sheet.getLastRow() === 0) {
        setupHeaders(sheet);
        return;
    }

    const currentHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
    const headersMatch = HEADERS.every(function (header, idx) {
        return currentHeaders[idx] === header;
    });

    if (!headersMatch || sheet.getLastColumn() > HEADERS.length) {
        setupHeaders(sheet);
    }
}

/**
 * Health check endpoint
 */
function doGet(e) {
    return createJsonResponse({
        status: 'ok',
        spreadsheetConnected: Boolean(SPREADSHEET_ID)
    });
}

function createJsonResponse(data) {
    return ContentService.createTextOutput(JSON.stringify(data))
        .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function matching the website form payload
 */
function testSubmit() {
    Logger.log('Running test lead submission...');
    const result = processSubmission({
        name: 'jatin jethava',
        email: 'jatinjethavavbi@gmail.com',
        phone: '8160082638',
        service: 'International Freight Forwarding',
        route: 'mumbai',
        message: 'dacsad'
    });
    Logger.log('Result: ' + JSON.stringify(result));
}
