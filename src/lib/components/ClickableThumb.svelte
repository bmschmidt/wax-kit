<script context="module">
  
</script>

<script>
  export let datum;
  export let pid;
  import { base } from '$app/paths';
  const collection = datum['wax:collection']
  const url = `/thumbnails/${collection}:${datum.pid}.jpg`;
</script>

{#if datum && pid}
  <div class="thumb" id={pid}>
    <a href="{base}/{datum['wax:collection']}/{pid}/">
      <figure>
        <img src="{url}" loading="lazy" alt="Improve alt-text: {datum.label}" style="width:100%" />
        <figcaption>{datum.label}</figcaption>
      </figure>
    </a>
  </div>
  {:else}
    Could not find an id for {pid};
  {/if}


<style>

.thumb {
  max-width: 17vw;
  min-width: 17vw;
  min-height: 17vw;
  max-height: 17vw;
  margin: 2px 2px 2px 2px;
  font-size: 10px;
}

figcaption {
	position: absolute;
	display: block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
	text-align: center;
	background: rgba(0,0,0,0);
	padding: 15px;
  font-size: 18px;
	z-index: 100;
	width: 100%;
	max-height: 100%;
  min-height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
	-moz-transition: all 0.5s;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
}

figcaption:hover {
  opacity: 1;
  background: rgba(0,0,0,0.5);
}

figure {
  display: block;
  margin: 2px;
  padding: 2px;
	padding: 0;
	position: relative;
	overflow: hidden;
}

</style>

