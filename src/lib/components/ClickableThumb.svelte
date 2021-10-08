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
  <div class=thumb id={pid}>
    <a href="{base}/{datum['wax:collection']}/{pid}/">
      <figure>
        <img src="{url}" load="lazy" alt="Improve alt-text: {datum.label}" style="width:100%" />
        <figcaption>{datum.label}</figcaption>
      </figure>
    </a>
  </div>
  {:else}
    Could not find an id for {pid};
  {/if}


<style>
.thumb {
  max-width: 20%;
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
	background: white;
	padding: 15px;
	z-index: 100;
	width: 100%;
	max-height: 100%;
	overflow: hidden;
	top: 50%;
	left: 0;
	-moz-transform: translate3d(-100%, -50%, 0); /* position caption outside layout horizontally and centered vertically */
	-webkit-transform: translate3d(-100%, -50%, 0);
	transform: translate3d(-100%, -50%, 0);
	opacity: 0;
	-moz-transition: all 0.5s;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
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

