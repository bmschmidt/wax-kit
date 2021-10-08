import fs from 'fs'
import {google} from 'googleapis'
import readline from 'readline';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.

const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.

export function get_data(spreadsheetId, range = 'Sheet1') {
  // Basically I've just bound up some demo docs from Google into a promise, while adding
  // a little bit of data formatting. There's probably some way to rewrite this more
  // cleanly as an async function.
  return new Promise((resolve, reject) => {
    fs.readFile('credentials.json', (err, content) => {
      if (err) reject('Failed to read authentication file at "credentials.json"', err);
      // Authorize a client with credentials, then call the Google Sheets API.
      authorize(JSON.parse(content), get_metadata)
    });

  function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    return fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  function get_metadata(auth) {
    const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.get({
      spreadsheetId, range
    }, (err, res) => {
      if (err) reject('The API returned an error: ' + err);
      const rows = res.data.values;
      const values = []
      if (rows.length) {
        // Print columns A and E, which correspond to indices 0 and 4.
        const names = rows[0]
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i]
          const obj = {}
          for (let j = 0; j < row.length; j++) {
            obj[names[j]] = row[j] === "" ? undefined : row[j].replaceAll("/", "∕") // The second character here is not an ascii slash; it's U+2215, division slash, so that they don't mess up url links.
          }
          values.push(obj)
        }
      } else {
        reject('No data found.');
      }
      resolve(values)
    })
  }
  })
}
/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  })
}

