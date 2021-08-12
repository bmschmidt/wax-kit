<script>
  import {data} from '$lib/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE.js';  
  import ClickableThumb from '../items/ClickableThumb.svelte'
  import { page } from "$app/stores";

  import { base, assets } from '$app/paths';
  //const assets = ``;
  const { collection, pid } = $page.params
  let regex = '';
  
  $ : keep = function(datum) {
    if (datum.collection !== collection) {return false}
    if (regex === '') {
      return true;
    }
    const matcher = new RegExp(regex)
    for (let k of Object.keys(datum)) {
      if (datum[k].match && datum[k].match(matcher)) {
        return true;
      }
    }
    return false;
  }
  $ : visible = data.filter( d => keep(d))
</script>

<svelte:head>
	<title>Collections index</title>
</svelte:head>

<div id="filter" >
  <input bind:value={regex}/>
</div>

{#await data}

Waiting for data....

{:then}
<div class=gallery>
{#each visible as datum }
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

  #filter {
    max-width: 25%;
    margin: auto;

  }
</style>