// Return a *sequence* for the pid.
import { sequence } from '$lib/iiif.js'

export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { pid } = params;
  const sequence = await sequence(pid)
  return {
    body: sequence
  };
}