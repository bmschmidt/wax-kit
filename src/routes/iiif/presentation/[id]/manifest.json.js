import { manifest } from '$lib/iiif/presentation.js';
export async function get({ params }) {
	const { id } = params;
  return {
    body: await manifest(id)
  };
}
