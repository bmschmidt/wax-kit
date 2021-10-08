import { promises as fs } from 'fs';
import tile_image from '$lib/iiif/tiler'
import { original_location } from '$lib/image_management'
// returns the IIIF manifest

export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { id } = params;

  // The collection is prefixes the pid with the collection.
  // Split apart while allowing colons inside the pid but not the collection.

  const [collection, ...rest] = id.split(':');
  const pid = rest.join(':');
  if (pid === '') {
    throw new Error('Invalid IIIF Image ID: Must contain a colon to indicate the collection');
  }

  const info_file_location = `img/derivatives/iiif/images/${id}/info.json`
  return fs.readFile(info_file_location)
    .then(d => {return {body: JSON.parse(d)}})
    .catch(e => 
      original_location(collection, pid)
      .then(location => console.log({location}) || tile_image(location, id))
      .then(() => fs.readFile(info_file_location))
      .then(d => ({body: JSON.parse(d)}))
    )
    .catch((e) => {
      return {'body': 'bar'} 
    })
      
  
}
