<script>
  import { data } from '$lib/data';
  import ClickableThumb from '$lib/components/ClickableThumb.svelte'
  import { page } from "$app/stores";

  $: collection = $page.params.collection;
  const full_collection_list = new Set($data.map(d => d['wax:collection']))
  console.log(full_collection_list)
  let regex = '';
  $: matcher = new RegExp(regex)
  $ : keep = function(datum) {
    if (datum['wax:collection'] !== collection && collection !== "all-collections") return false
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
  const links = full_collection_list.size === 1 ? [] : [
    {
      label: 'All Collections',
      href: '/all-collections',
      collection: 'all-collections',
    },
    ...[...full_collection_list].map(c => ({
      label: c,
      collection: c,
      href: `${c}`
    }))
  ]
</script>

<svelte:head>
	<title>Collections index</title>
</svelte:head>
<div class="collection-links">
  {#each links as link}
  <div class="collection-link">
    <a href="{link.href}" class:current={collection==link.collection}>{link.label}</a>
  </div>
  {/each}
</div>
<div id="filter" >
  Search in this collection:
  <input bind:value={regex}/>
</div>
<div class="gallery">
  { #each $data as record }
    {#if record && keep(record) }
      <ClickableThumb {record} />
    {/if}
  {/each}
</div>

<style>

  .collection-links {
    display: flex;
  }

  .collection-link {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    margin-right: 1em;
  }

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