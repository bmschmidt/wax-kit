import tile_image from '$lib/iiif/tiler'
import { disk_image_location } from '$lib/image_management'
// import { browser, prerendering } from '$app/env';
import config from '$lib/config'


export async function image_manifest(id) {
  const fs = await import('fs').then(p => p.promises)

  // The collection is prefixes the pid with the collection.
  // Split apart while allowing colons inside the pid but not the collection.

  const [collection, ...rest] = id.split(':');
  let partial_id = rest.join(':');
  if (id === '') {
    throw new Error('Invalid IIIF Image ID: Must contain a colon to indicate the collection');
  }

  const info_file_location = `img/derivatives/iiif/images/${id}/info.json`
  const manifest = await fs.readFile(info_file_location)
    .catch((err) => 
      disk_image_location(collection, partial_id)
      .then(location => tile_image(location, id))
      .then(() => fs.readFile(info_file_location))
    )
    .then(d => JSON.parse(d))
  // We're going to regenerate the http portion of the id depending
  // on whether we're in dev or build mode.
  manifest['@id'] = `${config.full_url}/iiif/image/${id}`;
  return manifest;
}