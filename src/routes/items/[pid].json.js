import {data} from '$lib/manifest.js';
//const data = [{pid: "a014704318_00"}]
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { pid } = params;
  const d = data.filter(d => d.pid == pid)
  
	if (d.length) {
		return {
			body: d[0]
		};
	}
}
