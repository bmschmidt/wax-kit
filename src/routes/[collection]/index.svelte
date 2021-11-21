<script>
  import { data } from '$lib/data';
  import ClickableThumb from '$lib/components/ClickableThumb.svelte'
  import { page } from "$app/stores";

  $: collection = $page.params.collection;

  let regex = '';
  $: matcher = new RegExp(regex)
  $ : keep = function(datum) {
    if (datum['wax:collection'] !== collection) return false
    if (regex === '') {
      return true;
    }
    for (let k of Object.keys(datum)) {
      if (datum[k].match && datum[k].match(matcher)) {
        return true;
      }
    }
    return false;
  }

</script>

<svelte:head>
	<title>Collections index</title>
</svelte:head>

<div id="filter" >
  Search in this collection:
  <input bind:value={regex}/>
</div>
<div class=gallery>
  {#each $data as record }
    {#if record && keep(record) }
      <ClickableThumb {record}></ClickableThumb>
    {/if}
  {/each}
</div>

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #filter {
    max-width: 25%;
    margin-left: auto;
    margin-right: auto;

  }
</style>