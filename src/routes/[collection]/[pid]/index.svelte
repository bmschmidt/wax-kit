<script>
  import { page } from "$app/stores";
  import { data } from '$lib/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE.js';
  import { base, assets } from '$app/paths';
  //const assets = ``;
  const { collection, pid } = $page.params
  import { onMount } from 'svelte';
  const item = data.filter(d => d.pid == $page.params.pid)[0] || {label: "Not found"}
	onMount(async () => {
    const dragon = import('openseadragon')
    const manifestUrl = `${base}/iiif/${pid}/manifest.json`;
    const remote_root = assets
    const tiles = fetch(manifestUrl).then(d => d.json())
    .then(data =>
      {
        console.log(data)
        return data.sequences[0].canvases.map(val => {
          console.log(val.images[0].resource.service['@id']);
          return val.images[0].resource.service['@id'] + "/info.json"
        })
        }
      )
    Promise.all([dragon, tiles]).then(([OpenSeadragon, tileSources]) =>
    {
    OpenSeadragon.default({
        id:                 "osd",
        prefixUrl: `${assets}/assets/openseadragon/images/`,
        preserveViewport:   true,
        visibilityRatio:    1,
        minZoomLevel:       1,
        defaultZoomLevel:   1,
        sequenceMode:       true,
        tileSources
    });
})
})



</script>

<h1>
  {item.label}
</h1>
<div id="osd" class="image-viewer"></div>

<dl>
  {#each Object.entries(item) as [k, v]}
    {#if v}
      <dt>{k}</dt><dd>{v} 
        {#if data.filter(d => d[k] == v).length > 1}
          <a href="../items/{k}/{v}/">({(data.filter(d => d[k] == v)).length - 1} other items.)
        </a>
        {/if}
      </dd>
    {/if}
  {/each}
</dl>


<style>
  #osd {
    min-width:640px;
    min-height:480px;
    width:100%;
    height:550px;
    max-height:80vh
  }

  .openseadragon-container {
    width: 100%;
    height: 100%;
  }

  dl {
  display: grid;
  grid-template-columns: max-content auto;
}

dt {
  grid-column-start: 1;
  font-weight: bold;
  font-family: sans-serif;
}

dd {
  grid-column-start: 2;
  font-family: sans-serif;
}

</style>
