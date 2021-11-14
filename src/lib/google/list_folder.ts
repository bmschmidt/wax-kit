import run_with_auth from '$lib/google/auth'
import {google} from 'googleapis';


function list_files(auth, id, pageToken) {
  let query;
  if (id) {
    query = {q : `'${id}' in parents`,
             fields: 'files(name, id, mimeType, modifiedTime, kind), nextPageToken'
    }
  } else {
    query = {pageToken : pageToken}
  }
  return new Promise((resolve) => {
    google
      .drive({version: 'v3', auth})
      .files
      .list(query)
      .then(d => resolve(d.data))
  })
}

async function list_dir(auth, id, recursively = true) {
  let page = await list_files(auth, id, false)
  let results = [...page.files];
  while (page.nextPageToken) {
    page = await list_files(auth, false, page.nextPageToken)
    results = [...results, ...page.files]
  }
  const dirs = results.filter(d => d.mimeType.endsWith("folder"))
  results = results.filter(d => !d.mimeType.endsWith("folder"))
  for (let dir of dirs) {
    results = [...results, ...await list_dir(auth, dir.id, true)]
  }
  return results
}

export function list_dir_completely(id) {
  return run_with_auth(list_dir, id, true)
}