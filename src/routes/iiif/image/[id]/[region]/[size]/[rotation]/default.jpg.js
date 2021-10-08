import config from '$lib/config';
import { promises as fs } from 'fs';
export async function get({ params }) {
  const { id, region, size, rotation } = params;
  const img_loc = `img/derivatives/iiif/images/${id}/${region}/${size}/${rotation}/default.jpg`
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
