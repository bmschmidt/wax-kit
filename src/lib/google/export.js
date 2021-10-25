import run_with_auth from '$lib/google/auth'
import {google} from 'googleapis';
import { promises as fs, createWriteStream } from 'fs';
import { reparse_all_datasets } from '$lib/records'

// Utilities for downloading directly from Google Drive.
// Just how often these should be called is kind of a matter of preference.

function uncached_get(auth, id, mimeType, location) {
  const fout = createWriteStream(location)
  return new Promise((resolve) => {
    google
    .drive({version: 'v3', auth})
    .files
    .export({
      fileId: id,
      mimeType
    }, {
      // Make sure we get the binary data
      responseType: 'stream'
    })
    .then( response => {
      response.data.on('end', function() {
        console.log("DONE WRITING")
        fout.end(undefined, undefined, () => 
          resolve(fs.readFile(location))
        )
      })
      .on('error', function (err) {
        console.log('Error during download', err);
      })
      .pipe(fout)
    })
    
  })
}

async function remote_mod_time(auth, id) {
  console.log({id})
  if (id === undefined) throw new Error("No id provided")
  console.log({id})
  return google
    .drive({version: 'v3', auth})
    .files
    .get({fileId: id, fields: "modifiedTime"})
    .then(d => new Date(d.data.modifiedTime))
}

export async function cached_get(id, location, return_existing_immediately = true) {
  console.log({id, location})
  const mod_remote = run_with_auth(remote_mod_time, id)
  const mod_local = fs
    .stat(location)
    .then(d => {
      return new Date(d.mtime)
    })
    // if it doesn't exist, we just set the date a long time ago.
    .catch(err => new Date("1970-01-01"))

  return Promise.all([mod_remote, mod_local])
    .then(([mod_remote, mod_local]) => {
      console.log({mod_remote, mod_local})
      if (mod_remote < mod_local) {
        return fs.readFile(location)
      } else {
        const mimeType = location.endsWith("md") ? 
         'text/plain' : location.endsWith("csv") ? "text/csv" : "application/octet-stream"
         console.log("Fetching remote", id, mimeType, location)
        const update_process = run_with_auth(
          uncached_get, id, mimeType, location)
            .catch(err => console.log(err) || fs.readFile(location))
        if (mimeType == 'text/csv') {
          return update_process.then(async (f) => {
            await reparse_all_datasets()
            return f;
          })
        }
        if (return_existing_immediately) {

          return fs.readFile(location)
        } else {
          return update_process; 
        }
      }
    })
}