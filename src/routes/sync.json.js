import {sync_data, sync_pages, sync_images} from '$lib/google/sync_all';
import { reparse_all_datasets } from '$lib/records'

// This is a route that triggers a full page sync. On a static site, it will either not exist at all, 
// or will just say 'success'. In dev mode, it will actually pull the most recent versions of all data.

let last = undefined;

export async function get() {
  let now = new Date()
  let diff = last ? now - last : 1e9
  console.log(`sync: ${diff}ms`)
  if (diff < 30000) {
    return {
      status: 200,
      body: {
        message: 'already syncing'
      }
    }
  }

  last = now

  return Promise.all([sync_data(), sync_pages(), sync_images()])
    .then(async () => {
      const data = await reparse_all_datasets()
      return {
        status: 200,
        body: {
          data
        }
      }
    })
    .catch(err => {
      return {
        status: 500,
        body: {
          message: err.message
        }
      }
    }
    )
  }