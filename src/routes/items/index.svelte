<script>
  import {data} from '$lib/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE.js';  
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
    <li><a href=/items/{field}>{field}</a></li>
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