<script context="module">
  export async function load({ fetch, page }) {
    let res = await fetch(`/contents.json`).then(r => r.json());
    const { field, value } = page.params;
    if (res) {
      return { props: { matches: res.filter(d => d[field] === value) } }
    } else {
      return {
        status: 404,
        error: new Error("SOMETHING WENT WRONG")
      }
    }
  }
</script>

<script>
  export let matches;
  import ClickableThumb from '$lib/components/ClickableThumb.svelte'
  import { page } from "$app/stores";
  const { field, value } = $page.params

</script>

<svelte:head>
	<title>Items where {field} is {value}</title>
</svelte:head>

<h1>All items where {field} is {value}</h1>

<div class=gallery>
{#each matches as datum}
  {#if datum}
    <ClickableThumb {datum} pid={datum.pid}></ClickableThumb>
  {/if}
{/each}
</div>

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
</style>