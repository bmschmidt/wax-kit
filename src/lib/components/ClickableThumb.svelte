
<script>
  export let record;
  const waxid = record['wax:id']
  import config from '$lib/config';
  const { base_url } = config;
  const collection = record['wax:collection']
  const thumbnail = `${base_url}thumbnails/${waxid}.jpg`;
</script>

{#if record && waxid}
  <div class="thumb" id={waxid}>
    <!---XXXXXX-->
    <a sveltekit:prefetch href="/{record['wax:collection']}/{record.pid}/">
      <figure>
        <img src="{thumbnail}" loading="lazy" alt="Improve alt-text: {record.label}" style="width:100%" />
        <figcaption>{record.label}</figcaption>
      </figure>
    </a>
  </div>
  {:else}
    Could not find an id for {waxid};
  {/if}


<style>

.thumb {
  max-width: 20%;
  min-width: 20%;
  min-height: 20%;
  max-height: 20%;
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

