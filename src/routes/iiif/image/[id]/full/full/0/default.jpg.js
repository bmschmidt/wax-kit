import config from '$lib/config';
import { promises as fs } from 'fs';
export async function get({ params }) {
  const {id} = params;
  const [collection, ...rest] = id.split(':');
  const pid = rest.join(':');
  if (pid === '') {
    throw new Error('Invalid IIIF Image ID: Must contain a colon to indicate the collection');
  }
  const img_loc = `_data/` +  config.collections[collection].images.source + "/" + pid + ".jpg"
  return fs.readFile(img_loc).then(data => {
    return {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000'          
        },
        body: data
    }
  })
  .catch(err => {
      return {
        status: 404,
        message: "FILE NOT FOUND"
    }
  })
}
