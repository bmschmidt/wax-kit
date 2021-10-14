import sharp from 'sharp';
import { disk_image_locations, disk_image_location } from '$lib/image_management';


export async function get({ params }) {
  const {id} = params;
  const [collection, ...rest] = id.split(':');
  const pid = rest.join(':');
  if (pid === '') {
    throw new Error('Invalid IIIF Image ID: Must contain a colon to indicate the collection');
  }
  const loc = await disk_image_locations(collection, pid);
  console.log({loc})
  return disk_image_locations(collection, pid)
    .then(img_locs =>
      sharp(img_locs[0])
    .resize(256, 256, { 
        fit: "cover", 
        position: sharp.strategy.entropy
      })
    .toBuffer()      
    .then(thumb => {
      return {
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=31536000',
        },
        body: thumb
      }
    })
  )
  .catch((err) => 
    sharp('static/404.jpg').resize(256, 256).toBuffer()
    .then(img =>
      { 
        console.warn("Using default file", err); // First write the error to stdout.
        return {
          status: 200,
          body: img,
          headers: {
            'Content-Type': 'image/jpeg',
            'Cache-Control': 'public, max-age=31536000',
          },
        }
      })
  )  
}