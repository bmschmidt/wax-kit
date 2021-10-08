<script context="module">
//  import { base } from "$app/paths";
  export async function load({ page, fetch,  }) {
//    let res = await fetch(`/${page.params.collection}/contents.json`);
//    let contents;
    const {collection, pid} = page.params;
    const manifestUrl = `${base}/iiif/presentation/${collection}:${pid}/manifest.json`;
    const manifest = await fetch(manifestUrl).then(d => d.json());
    const tileSources = manifest.sequences[0].canvases.map(val => {
      return val.images[0].resource.service['@id'] + "/info.json"
    })

    if (manifest) {
      return { props: { 
        manifest,
        tileSources
      } }
    } else {
      return {
        status: 404,
        error: new Error("SOMETHING BROKE")
      }
    }
  }
</script>

<script>
  import { page } from "$app/stores";
  export let tileSources = [];
  export let manifest;
  import { base, assets } from '$app/paths';
  import { onMount } from 'svelte';
  const { collection, pid } = $page.params
  const manifestUrl = `${base}/iiif/presentation/${collection}:${pid}/manifest.json`;

  onMount(() => 
  { import('openseadragon').then(OpenSeadragon =>
  OpenSeadragon.default({
      id:                 "osd",
      prefixUrl: `${assets}/assets/openseadragon/images/`,
      preserveViewport:   true,
      visibilityRatio:    1,
      minZoomLevel:       1,
      defaultZoomLevel:   1,
      sequenceMode:       true,
      tileSources
  })
  )})
</script>

<h1>
  {manifest.label}
</h1>
<div id="osd" class="image-viewer"></div>
<!--This link is necessary to ensure the manifest is statically generated.-->
<a href={manifestUrl}>IIIF manifest for this item.</a>

<dl>
  {#each manifest.metadata as row}
    {#if row.value !== undefined && row.value !== ""}
      <dt>{row.label}</dt><dd>{row.value}
          {#if (encodeURIComponent(row.label).length < 80) && (encodeURIComponent(row.value).length < 80)}
            <a href="../items/{encodeURIComponent(row.label)}/{encodeURIComponent(row.value)}/">(See other items.)</a>
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
