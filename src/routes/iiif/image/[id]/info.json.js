import {image_manifest} from '$lib/iiif/image';
import config from '$lib/config';
// returns the IIIF manifest

export async function get({ params }) {
	const { full_url } = config;
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	let { id } = params;
  const manifest = await image_manifest(id);
	manifest['@id'] = `${full_url}/iiif/image/${id}`;
  return {body: manifest}
}
