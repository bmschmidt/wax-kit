import sharp from 'sharp';
import { original_location } from '$lib/image_management';



export async function get({ params }) {
  const not_found_image = sharp('static/404.jpg').resize(256, 256)

  const {id} = params;
  const [collection, ...rest] = id.split(':');
  const pid = rest.join(':');
  if (pid === '') {
    throw new Error('Invalid IIIF Image ID: Must contain a colon to indicate the collection');
  }
  return new Promise((resolve, reject) => {
    return original_location(collection, pid)
    .then(img_loc =>
       sharp(img_loc)
      .resize(256, 256, { 
          fit: "cover", 
          position: sharp.strategy.entropy
        })
      .toBuffer()      
      .then(thumb => {
        resolve({
          headers: {
            'Content-Type': 'image/jpeg',
            'Cache-Control': 'public, max-age=31536000',
          },
          body: thumb       
        })
      })
    )
    .catch((err) => not_found_image.toBuffer().then(img =>
      resolve({
        status: 200,
        body: img,
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=31536000',
        },
      })
    ))
  })
  
}