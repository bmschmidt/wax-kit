import run_with_auth from '$lib/google/auth'
import {google} from 'googleapis';
import { promises as fs, createWriteStream } from 'fs';
import { reparse_all_datasets } from '$lib/records'
import sanitize from 'sanitize-html'

// Utilities for downloading directly from Google Drive.
// Just how often these should be called is kind of a matter of preference.

async function uncached_get(auth, id, mimeType, location) {
  const fout = createWriteStream(location)
  console.log({location, fout})
  let full_text = await new Promise((resolve) => {
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
  if (mimeType == 'text/html') {
    full_text = sanitize(full_text, {
      allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
      "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
      "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
      "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
      "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
      "small", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
      "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"],
      
      allowedAttributes: {
        'a': [ 'href' ]
      },
      allowedIframeHostnames: ['www.youtube.com']
    });
    fs.writeFile(location, full_text)
  }
  return full_text;
}

async function remote_mod_time(auth, id) {
  if (id === undefined) throw new Error("No id provided")
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
  .catch(err => new Date(0))

  return Promise.all([mod_remote, mod_local])
    .then(([mod_remote, mod_local]) => {
      console.log({mod_remote, mod_local})
      if (mod_remote < mod_local) {
        console.log("getting local", location)
        return fs.readFile(location)
      } else {
        let mimeType;
        console.log("getting remote", location)

        if (location.endsWith("md")) {
          mimeType =  'text/html'
        } else if (location.endsWith("html")) {
          mimeType = 'text/html'
        } else if (location.endsWith("csv")) {
          mimeType = "text/csv"
        } else {
          mimeType = "application/octet-stream"
        }
        console.log("Fetching remote", id, location)

        const update_process = run_with_auth(
          uncached_get, id, mimeType, location
        ).catch(err => console.log("AAAAAAA", err)|| fs.readFile(location))
        console.log("HIIII")
//             .catch(err => console.log(err)|| fs.readFile(location))
        if (mimeType == 'text/csv') {
          return update_process.then(async (f) => {
            await reparse_all_datasets()
            return f;
          })
        }
        if (return_existing_immediately && mod_local > new Date(1)) {
          return fs.readFile(location)
        } else {
          return update_process; 
        }
      }
    })
}