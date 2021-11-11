<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import config from '$lib/config';
  import { data } from '$lib/data'

</script>

<header>
	<div class="corner">
		<a href="https://minicomp.github.io/wax/">
			Inspired by Wax 🐝
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"/>
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href={base == '' ? "/" : base }>Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href={base}/about>About</a></li>
			{#each Object.keys(config.collections) as collection}
			<li class:active={$page.path === "/" + collection}><a sveltekit:prefetch href={base}/{collection}>{collection}</a></li>
			{/each}
			<li class:active={$page.path === '/items'}><a sveltekit:prefetch href={base}/items>Item categories</a></li>
			<li class:active={$page.path === '/table'}><a sveltekit:prefetch href={base}/table>Data Table</a></li>
			<li>
				<span on:click={() => fetch(`${base}/sync.json`).then(d => d.json()).then(d => $data = data)}>Sync</span>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"/>
		</svg>
	</nav>

</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255,255,255,0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	nav span {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
  
</style>
