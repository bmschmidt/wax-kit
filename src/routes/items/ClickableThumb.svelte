<script>
  export let datum;
  import { base } from '$app/paths';
  export let pid;
  import {thumbnail} from '$lib/iiif'
  let img_thumb 
  if (pid) {img_thumb = thumbnail(pid)}
  else if (datum == undefined) {

  }
  else {pid = datum.pid};
</script>

{#if datum && pid}
  <div class=thumb id={pid}>
    <a href="{base}/{datum.collection}/{pid}/">
      <figure>
        {#await img_thumb}
        [Looking for thumbnail]
        {:then url}
        <img src={url} alt="Improve alt-text: {datum.label}" style="width:100%" />
        <figcaption>{datum.label}</figcaption>
        {/await}
      </figure>
    </a>
  </div>
  {:else}
    Could not find an id for {pid};
  {/if}


<style>
.thumb {
  max-width: 20%;
  margin: 7px 7px 7px 7px;
  font-size: 10px;
}
</style>

