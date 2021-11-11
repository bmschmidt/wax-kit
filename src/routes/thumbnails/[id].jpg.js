import sharp from 'sharp';
import { disk_image_locations } from '$lib/image_management';
import { promises as fs } from 'fs';

function load_from_raw(collection, pid) {
  return disk_image_locations(collection, pid)
    .then(img_locs => sharp(img_locs[0])
      .resize(256, 256, { 
          fit: "cover", 
          position: sharp.strategy.entropy
      })
      .toBuffer()
    )
}

function load_from_disk(collection, pid) {
  const location = `img/thumbnails/${collection}/${pid}`
  return fs.readFile(location)
    .catch(err => 
      load_from_raw(collection, pid)
      .then(async (buff) => {
        const dir = `img/thumbnails/${collection}`
        fs.mkdir(dir, {recursive: true}).then( () =>
        fs.writeFile(location, buff))
        return buff
      }))
}

export async function get({ params }) {
  const {id} = params;
  const [collection, ...rest] = id.split(':');
  const pid = rest.join(':');
  if (pid === '') {
    throw new Error('Invalid IIIF Image ID: Must contain a colon to indicate the collection');
  }
  // The thumbnail is created by having sharp look for a square of maximum entropy.

  return load_from_disk(collection, pid)  
    .then(thumb => {
      return {
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=31536000',
        },
        body: thumb
      } }
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