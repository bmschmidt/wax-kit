<script>
  import configuration, { get_exhibit_pages } from '$lib/config';
  import ArticleCard from '$lib/components/ArticleCard.svelte'
  const pages = get_exhibit_pages(configuration)
  for (let page of pages) {
    page.demo_image_id = page.demo_image_id ? page.demo_image_id.replace("/", ":") : undefined
  }
</script>

<ul>
  <div class="article-container">
    {#each pages as p}
      {#if p}
       <ArticleCard {...p} />
      {/if}
    {/each}
  </div>
</ul>

<style>
  .article-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>