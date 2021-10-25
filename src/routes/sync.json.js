import {sync_data, sync_pages} from '$lib/google/sync_all';

// This is a route that triggers a full page sync. On a static site, it will either not exist at all, 
// or will just say 'success'. In dev mode, it will actually pull the most recent versions of all data.

export async function get() {
  return Promise.all([sync_data(), sync_pages()])
    .then(() => {
      return {
        status: 200,
        body: {
          message: 'success'
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