/**
 * ==============================================================================
 * SEVEN ROUTES LOGISTICS INTERNATIONAL PVT. LTD.
 * GOOGLE APPS SCRIPT WEB APP - LEAD & CONTACT INQUIRY RECEIVER
 * ==============================================================================
 */

// Your Google Sheet & Google Drive Folder IDs
const SPREADSHEET_ID = '1mvxchW8E1sTjgkU0dXS817j2IQZ0Z7q8EoNLBU5rqhQ';
const FOLDER_ID = '1I9S368ZZQNj9zmGRYIVQIAyrbmfoWnLT';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'application/pdf'];

/**
 * Handle HTTP POST from website forms (QuoteSection & Contact page)
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(30000); // 30 second concurrency lock

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({ success: false, error: 'Empty payload received' });
    }

    const data = JSON.parse(e.postData.contents);
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
  // Extract all fields sent by Seven Routes website forms
  const source = (data.source || 'Website Contact Form').toString().trim();
  const name = (data.name || '').toString().trim();
  const phone = (data.phone || '').toString().trim();
  const email = (data.email || '').toString().trim().toLowerCase();
  const company = (data.company || '').toString().trim();
  const service = (data.service || data.subject || '').toString().trim();
  const route = (data.route || '').toString().trim();
  const branchPreference = (data.branchPreference || '').toString().trim();
  const message = (data.message || '').toString().trim();

  // File / Image Attachment (optional)
  const fileBase64 = data.image || data.file || null;
  const fileName = (data.fileName || 'document.png').toString().trim();
  const mimeType = (data.mimeType || 'image/png').toString().toLowerCase();

  // Basic validation: must have at least phone OR email or name
  if (!name && !phone && !email) {
    return { success: false, error: 'Please provide at least a name, phone number, or email.' };
  }

  let fileUrl = '';
  let imageFormula = '';

  // Process file upload to Google Drive folder if attached
  if (fileBase64) {
    try {
      if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
        return { success: false, error: 'Invalid file format. Allowed: PNG, JPG, WEBP, PDF.' };
      }

      const decodedBytes = Utilities.base64Decode(fileBase64);
      if (decodedBytes.length > MAX_FILE_SIZE_BYTES) {
        return { success: false, error: 'File size exceeds 5 MB.' };
      }

      let folder = null;
      try {
        folder = DriveApp.getFolderById(FOLDER_ID);
      } catch (e) {
        folder = null;
      }

      if (!folder) {
        const folderIter = DriveApp.getFoldersByName('Seven Routes Inquiry Uploads');
        folder = folderIter.hasNext() ? folderIter.next() : DriveApp.createFolder('Seven Routes Inquiry Uploads');
      }

      const blob = Utilities.newBlob(decodedBytes, mimeType, fileName);
      const file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

      fileUrl = file.getUrl();
      const fileId = file.getId();

      if (mimeType.startsWith('image/')) {
        imageFormula = `=IMAGE("https://drive.google.com/uc?export=view&id=${fileId}", 4, 70, 70)`;
      }
    } catch (err) {
      Logger.log('Drive upload failed: ' + err.toString());
    }
  }

  const sheet = getTargetSheet();
  const timestamp = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');

  // Ensure headers exist
  setupHeadersIfNeeded(sheet);

  // Append row matching columns
  sheet.appendRow([
    timestamp,
    source,
    name,
    phone,
    email,
    company,
    service,
    route,
    branchPreference,
    message,
    fileUrl,
    imageFormula
  ]);

  if (imageFormula) {
    sheet.setRowHeight(sheet.getLastRow(), 75);
  }

  return { 
    success: true, 
    message: 'Inquiry saved successfully to Seven Routes Google Sheet.' 
  };
}

/**
 * Access the target spreadsheet
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
 * Setup professional styled headers in Google Sheets
 */
function setupHeaders() {
  const sheet = getTargetSheet();
  const headers = [
    'Timestamp (IST)',
    'Inquiry Source',
    'Contact Name',
    'Phone / Mobile',
    'Email Address',
    'Company Name',
    'Cargo Service Required',
    'Origin & Destination Route',
    'Preferred Office Desk',
    'Message / Cargo Details',
    'Attachment Link',
    'Image Preview'
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  } else {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  // Formatting header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#112347'); // Seven Routes Deep Navy
  headerRange.setFontColor('#FFFFFF');
  sheet.setFrozenRows(1);

  // Set optimal column widths
  sheet.setColumnWidth(1, 160); // Timestamp
  sheet.setColumnWidth(2, 170); // Source
  sheet.setColumnWidth(3, 160); // Name
  sheet.setColumnWidth(4, 150); // Phone
  sheet.setColumnWidth(5, 210); // Email
  sheet.setColumnWidth(6, 180); // Company
  sheet.setColumnWidth(7, 230); // Service
  sheet.setColumnWidth(8, 200); // Route
  sheet.setColumnWidth(9, 180); // Office Desk
  sheet.setColumnWidth(10, 260); // Message
  sheet.setColumnWidth(11, 200); // File URL
  sheet.setColumnWidth(12, 90);  // Image Preview

  Logger.log('Seven Routes Google Sheet headers setup completed.');
}

function setupHeadersIfNeeded(sheet) {
  if (sheet.getLastRow() === 0) {
    setupHeaders();
  }
}

/**
 * Health check endpoint
 */
function doGet(e) {
  return createJsonResponse({
    status: 'online',
    company: 'Seven Routes Logistics International Pvt. Ltd.',
    spreadsheetConnected: Boolean(SPREADSHEET_ID)
  });
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify sheet connection
 */
function testSubmit() {
  Logger.log('Running test lead submission...');
  const result = processSubmission({
    source: 'Test Script',
    name: 'Priyank Vasoya',
    phone: '+91 81281 28791',
    email: 'ops@sevenrouteslogistics.com',
    company: 'Seven Routes Logistics',
    service: 'Chemical & Pharma Cargo Handling',
    route: 'Nhava Sheva to Antwerp',
    branchPreference: 'Mumbai HQ',
    message: 'Testing Google Sheet integration from Apps Script editor'
  });
  Logger.log('Result: ' + JSON.stringify(result));
}
