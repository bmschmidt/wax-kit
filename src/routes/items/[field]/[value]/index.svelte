<script>
  import {data} from '$lib/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE.js';  
  import ClickableThumb from '../../ClickableThumb.svelte'
  import { page } from "$app/stores";
  import { base, assets } from '$app/paths';
  //const assets = ``;
  const { field, value } = $page.params
  import { onMount } from 'svelte';
  const matches = data.filter(d => d[field] == value)

</script>

<svelte:head>
	<title>Items where {field} is {value}</title>
</svelte:head>

<h1>All items where {field} is {value}</h1>

{#await data}

Waiting for data....

{:then}
<div class=gallery>
{#each matches as datum}
  <ClickableThumb {datum} pid={datum.pid}></ClickableThumb>
{/each}
</div>
{/await}


<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
</style>