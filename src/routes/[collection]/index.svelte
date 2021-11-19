<script>
  import { data } from '$lib/data';
  import ClickableThumb from '$lib/components/ClickableThumb.svelte'
  import { page } from "$app/stores";
  import { filter } from 'markdown-it/lib/common/html_blocks';

  $: collection = $page.params.collection
  let regex = '';

  $ : keep = function(datum) {
    if (datum['wax:collection'] !== collection) {
      return false
    }
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

</script>

<svelte:head>
	<title>Collections index</title>
</svelte:head>

<div id="filter">
  Search within metadata: <input bind:value={regex}/>
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
    max-width: 100%;
  }

  #filter {
    margin-left: auto;
    margin-right: auto;
  }
</style>