<script context="module">
  export async function load({ fetch, page }) {
    let res = await fetch(`/${page.params.collection}/contents.json`).then(r => r.json());
    if (res) {
      return { props: { data: res } }
    } else {
      return {
        status: 404,
        error: new Error("SOMETHING WENT WRONG")
      }
    }
  }
</script>


<script>
  export let data;
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

  function filter(data) {
    return data.filter(keep);
  }
  const collection_data = Promise.resolve([])

</script>

<svelte:head>
	<title>Collections index</title>
</svelte:head>

<div id="filter" >
  <input bind:value={regex}/>
</div>
<div class=gallery>
  {#each data as datum }
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

  #filter {
    max-width: 25%;
    margin: auto;

  }
</style>