import { manifest } from '$lib/iiif/presentation.js';
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { pid } = params;
  return {
    body: await manifest(pid)
  };
}
