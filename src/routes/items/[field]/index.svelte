
<script>
  import { data } from '$lib/data'
  import { page } from "$app/stores";
  import { base, assets } from '$app/paths';
  const { field, value } = $page.params
  const vals = new Map()
  $data.filter(d => d[field] !== undefined && d[field] !== "").forEach(d => {
    const ffield = d[field]
    vals.set(ffield, (vals.get(ffield) ? vals.get(ffield) : 0) + 1)
  })
</script>

<svelte:head>
	<title>Items by {field}</title>
</svelte:head>

<h1>All items by {field}</h1>

<div class=gallery>
  <ul>
    {#each [...vals.entries()] as [match, count] }
        {#if encodeURIComponent(match).length < 80}
          <li><a href="{base}/items/{encodeURIComponent(field)}/{encodeURIComponent(match)}">{match} ({count})</a></li>
        {/if}
    {/each}
  </ul>
</div>

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
</style>