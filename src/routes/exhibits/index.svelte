<script>
  import configuration, {get_exhibit_pages} from '$lib/config';
  const pages = get_exhibit_pages(configuration)
</script>

<ul>
  
  {#each pages as p}
  <li>
    <a sveltekit:prefetch href="{p.link}">{p.label}</a>
  </li>
  {/each}

</ul>