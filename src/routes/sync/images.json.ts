import { image_list } from '$lib/google/sync_images'

export async function get() {
  return  image_list()
    .then(d => {
      return {
        status: 200,
        body: {
          images: d
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