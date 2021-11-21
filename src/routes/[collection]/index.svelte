<script>
  import { data } from '$lib/data';
  import ClickableThumb from '$lib/components/ClickableThumb.svelte'
  import { page } from "$app/stores";

  const { collection } = $page.params
  let regex = '';
  
  $ : keep = function(datum) {
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

<div id="filter" >
  <input bind:value={regex}/>
</div>
<div class=gallery>
  {#each $data as record }
    {#if record}
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
    margin: auto;

  }
</style>