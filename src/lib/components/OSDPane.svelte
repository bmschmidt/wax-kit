<script>
  export let pid;
  export let collection;
  import { assets } from '$app/paths';
  import { onMount } from 'svelte';
  import config from '$lib/config'

  const { base_url } = config;
  const google_id = config.collections[collection].metadata.google_drive_id

  const manifestUrl = `${base_url}iiif/presentation/${collection}:${pid}/manifest.json`;

  onMount(() => 
    { 
      const OSD = import('openseadragon');
      const manifest = fetch(manifestUrl).then(d=>d.json());
      Promise.all([OSD,manifest])
      .then(([OpenSeadragon, manifest]) => {
        const tileSources = manifest.sequences[0].canvases.map(val => {
          return val.images[0].resource.service['@id'] + "/info.json"
        })

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
      }
      
    )})
</script>

<div id="osd" class="image-viewer">
  
</div>

<style>
  #osd {
    min-width:640px;
    min-height:480px;
    width:100%;
    height:550px;
    margin:15px;
  }
</style>