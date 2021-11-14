<script context="module">
	export async function load({fetch}) {
		const data = await fetch('/data.json').then(d => d.json());
		return {
			props: {
					dataset : data
				}
			}
	}

</script>

<script>
	import Header from '$lib/components/Header/index.svelte';
	import '../app.css';
  export let dataset;
	// Use the on-disk data.json on every page.
	import { data } from '$lib/data';
  $data = dataset;
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	Waxy site.
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
