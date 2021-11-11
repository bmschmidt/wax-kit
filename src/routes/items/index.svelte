

<script>
  import { data } from '$lib/data';
  import { base } from '$app/paths';
  const vals = new Map()
  const fields = Object.keys($data[0])


</script>

<svelte:head>
	<title>Browse by metadata</title>
</svelte:head>

<h1>Browse by metadata fields</h1>


<div class=gallery>
  <ul>
    {#each fields as field}
    {#if field.length < 80 && field !== 'pid' && !field.startsWith("wax") && !field.startsWith("Student")}
      <li><a href={base}/items/{field}>{field}</a></li>
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