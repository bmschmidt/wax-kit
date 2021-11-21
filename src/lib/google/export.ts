import run_with_auth from '$lib/google/auth'
import {drive_v3, google} from 'googleapis';
import { promises as fs, createWriteStream, PathLike } from 'fs';
import { reparse_all_datasets } from '$lib/records'
import sanitize from 'sanitize-html'

// Utilities for downloading directly from Google Drive.
// Just how often these should be called is kind of a matter of preference.

async function download_resource(drive: drive_v3.Resource$Files, id: string, location: PathLike | fs.FileHandle, fout) {
  console.log("Downloading resource", id, "to", location)
  return new Promise((resolve, reject) => 
    drive
      .get({fileId: id, alt: 'media'}, {responseType: 'stream'})
      .then(res =>  
        res.data
          .on('end', () =>  {
            console.log("DONE downloading", {location})
            fout.end(undefined, undefined, 
              () => resolve(fs.readFile(location)))
          })
          .on('error', (err: any) => reject(err))
          .pipe(fout)
      )
  )
}

async function uncached_get(auth: any, id: any, mimeType: string, location: string) {
  const fout = createWriteStream(location)
  let drive = google
    .drive({version: 'v3', auth})
    .files

  if (mimeType == 'application/octet-stream') {
      console.log("DOWNLOADING", {location})
      return await download_resource(drive, id, location, fout)
  } else {
    let full_text : string = await new Promise((resolve) => {
    drive
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
          resolve(fs.readFile(location, {encoding : 'utf-8'}))
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
}
async function remote_mod_time(auth: any, id: any) {
  if (id === undefined) throw new Error("No id provided")
  return google
    .drive({version: 'v3', auth})
    .files
    .get({fileId: id, fields: "modifiedTime"})
    .then(d => new Date(d.data.modifiedTime))
}

export async function cached_get(id: any, 
  location: PathLike | fs.FileHandle, 
  return_existing_immediately = true,
  mod_time = undefined,
  empty_return = false): Promise<string | Buffer> {
  const mod_remote = mod_time ? mod_time : run_with_auth(remote_mod_time, id)
  const mod_local = fs
    .stat(location)
    .then(d => new Date(d.mtime))
    // if it doesn't exist, we just set the date a long time ago.
  .catch(err => new Date(0))

  const val = Promise.all([mod_remote, mod_local])
    .then(
      ([mod_remote, mod_local]) => {
      if (mod_remote < mod_local) {
        console.log("getting local", location)
        return empty_return ? "" : fs.readFile(location)
      } else {
        console.log("getting remote", location, mod_remote, mod_local)
        let mimeType: string;
        if (location.endsWith("md")) {
          mimeType =  'text/html'
        } else if (location.endsWith("html")) {
          mimeType = 'text/html'
        } else if (location.endsWith("csv")) {
          mimeType = "text/csv"
        } else {
          mimeType = "application/octet-stream"
        }
        const update_process = run_with_auth(uncached_get, id, mimeType, location)
          .catch(err => empty_return ? "" : fs.readFile(location))
        if (mimeType == 'text/csv') {
          return update_process.then(async (f) => {
            await reparse_all_datasets()
            return f;
          })
        }
        if (return_existing_immediately && mod_local > new Date(1)) {
          return empty_return ? "" : fs.readFile(location)
        } else {
          return empty_return ? "" : update_process; 
        }
      }
      })
  return val
}