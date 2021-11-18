<script context="module">
  export async function load({ page, fetch }) {
    const {collection, pid} = page.params;
    const host = `../../..`;
    const manifest = await fetch(`${host}/iiif/presentation/${collection}:${pid}/manifest.json`)
       .then(d => d.json())

    const tileSources = manifest.sequences[0].canvases.map(val => {
      console.log(val)
      return val.images[0].resource.service['@id'] + "/info.json"
    })
    return { props: { 
      manifest : JSON.parse(JSON.stringify(manifest)),
      tileSources : JSON.parse(JSON.stringify(tileSources))
    }
    }
  }
</script>

<script>
  export let tileSources = [];
  export let manifest;
  import { page } from "$app/stores";
  import config from '$lib/config'
  import { assets } from '$app/paths';
  import { onMount } from 'svelte';
  const { collection, pid } = $page.params
  const { base_url } = config;
  const google_id = config.collections[collection].metadata.google_drive_id
  
  const manifestUrl = `${base_url}iiif/presentation/${collection}:${pid}/manifest.json`;

  function include_field(k) {
    if (k.startsWith("wax:")) {return false}
    if (k.startsWith("Student ")) {return false}
    return true
  }

  onMount(() => 
    { import('openseadragon').then(OpenSeadragon =>
    OpenSeadragon.default({
        id:                 "osd",
        prefixUrl: `${assets}/assets/openseadragon/images/`,
        preserveViewport:   true,
        visibilityRatio:    1,
        minZoomLevel:       .5,
        defaultZoomLevel:   1,
        sequenceMode:       true,
        tileSources:        tileSources,
    })
  )})
</script>

<h1>
  {manifest.label}
</h1>

<div id="osd" class="image-viewer"></div>
<div id=links style="display:flex">
  <!--This link is necessary to ensure the manifest is statically generated.-->
  <div style="flex-grow:4">
    <a href={manifestUrl}>IIIF manifest for this item.</a>
  </div>
  <div>    
  <a href="https://docs.google.com/spreadsheets/d/{google_id}/edit">Edit metadata</a>
  </div>
</div>
<dl>
  {#each manifest.metadata as row}
    {#if row.value !== undefined && row.value !== "" && include_field(row.label)}
      <dt>{row.label}</dt><dd>{row.value}
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
