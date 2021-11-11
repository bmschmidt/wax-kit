import {image_manifest} from '$lib/iiif/image';
// returns the IIIF manifest

export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	let { id } = params;
  const manifest = await image_manifest(id);
  return {body: manifest}
}
