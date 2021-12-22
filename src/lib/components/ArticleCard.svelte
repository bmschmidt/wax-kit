<script>
  export let title
  export let author_for_public_display
  export let site_link
  export let sentence_summary
  export let demo_image_id
</script>

<div class="card">
  <div class="img">
    {#if demo_image_id}
      <div class="img-container">
        <img src="/thumbnails/{demo_image_id}.jpg" alt="{title}">
      </div>
    {/if}
  </div>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    {#if author_for_public_display}
      <span class="card-text">{author_for_public_display}</span>
    {/if}
    <p class="card-text">{sentence_summary}</p>
    <a href="{site_link}/" class="btn btn-primary">Read</a>
  </div>
 
</div>


<style>
  .img-container {
    flex: 1 100px;
  }

  .card {
    display: flex;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    flex-direction: row;
    max-width : 600px;
  }
  @media screen and (max-width: 800px) {
    .card {
      flex-direction: column;
      max-width : 480px;
    }
  }
  .card-body {
    flex: 2 250px;
    max-width: 50%;
    margin-left: 20px;
  }

  .card-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
  }


</style>