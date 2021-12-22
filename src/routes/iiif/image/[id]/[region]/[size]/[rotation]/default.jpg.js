// These are read from from the cached locations, *not* created directly. 
// It would actually be easy to make them with sharp, but would consume resources.

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
  .catch((err) => {
    console.warn((err.body || err).toString());
      return {
        status: 404,
        message: "FILE NOT FOUND"
    }
  })
}
