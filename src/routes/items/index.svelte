
<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch, page }) => {
    const data = await fetch('/contents.json').then(d => d.json())
    return {
      props: { data }
    };
  }
</script>

<script>
  export let data // populates from the module context.
  import { base } from '$app/paths';
  const vals = new Map()
  const fields = Object.keys(data[0])
</script>

<svelte:head>
	<title>Browse by metadata</title>
</svelte:head>

<h1>Browse by metadata fields</h1>

{#await data}

Waiting for data....

{:then}
<div class=gallery>
  <ul>
    {#each fields as field}
    {#if field.length < 80}
    <li><a href={base}/items/{field}>{field}</a></li>
    {/if}
    {/each}
  </ul>
</div>
{/await}


<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
</style>