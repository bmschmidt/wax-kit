//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		paths: {
//			assets : './',
			base : ''
		},
		adapter: adapter({
//			pages: 'docs',
//			assets: 'docs',
//			fallback: null
		})
	}
	
};

export default config;
