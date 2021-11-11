<script>
  import { data } from '$lib/data';
  import ClickableThumb from '$lib/components/ClickableThumb.svelte'
  import { page } from "$app/stores";
  const { field, value } = $page.params
  const matches = $data.filter(d => d[field] === value)
</script>

<svelte:head>
	<title>Items where {field} is {value}</title>
</svelte:head>

<h1>All items where {field} is {value}</h1>

<div class=gallery>
{#each matches as record}
  {#if record}
    <ClickableThumb {record}></ClickableThumb>
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