<script context="module">
	export const prerender = true;
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
<h1>
	Wax-kit: a Svelte approach.
</h1>
<p>
	This is an idea for a Wax-like website that runs in svelte-kit instead of jekyll. It's still built statically,
	and because of the nature of Svelte there is little overhead in browser JS.
</p>
<p>
	It handles a few things differently, though. One is that it doesn't statically cache all the IIIF derivatives up front.
	Instead, it's configured against a particular IIIF server (Canteloupe, running on my private domain) and fetches everything--
	including, calamitously for speed, the thumbnails--on-demand. This reduces some of the space pressure we were seeing.
</p>
<p>
	It also allows for better prototyping because it can be run in "dev" mode locally without having to rebuild the entire thing.
	The input formats and general goals are the same, although there is not currently a config file aside from the couple variables listed.
</p>
<p>	The IIIF server handles only the image API; the entire IIIF presentation API for a wax site is implemented in javascript, which is not nearly 
	as hard as it sounds. Svelte-kit makes it easy to tie individual pages to json endpoints, so that's what we do here. 

</p>
<p>
I haven't really thought about how to handle exhibits, and I've deliberately not touched the basic svelte-kit css at all. 
I think, though, the way to do exhibits in an interesting way might involve bundling them as presentation manifests (IIIF 3.0, probably)
as well. Those could parse from markdown (where <code>![Label](img)</code>) creates an IIIF viewer if <code>img</code> is a key in the dataset--
or perhaps do something a bit more complicated. 
</p>

<p>
	I'd encourage any Jekyll devotees to poke around svelte-kit. It has a lot of interesting features inherited that probably trace their inheritance to Jekyll,
	and the way that svelte files are embedded inside pages should be familiar to anyone who has used Ruby includes. The SyntaxError, aside from the templating language,
	is basically just HTML/CSS/Javascript.
</p>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

</style>
