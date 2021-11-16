<script context="module">
  export async function load({ page, fetch }) {
    const { slug } = page.params
    const innerHTML = await fetch(`/exhibits/${slug}/exhibit-text.html`)
      .then(d => d.text())
    return {
      props : {
        innerHTML,
        slug
      }
    }
  }
</script>

<script>
  export let innerHTML
  export let slug

  import { get_exhibit_pages } from '$lib/config'
  const page = get_exhibit_pages()
    .map(d => {
      d.slug = d.link.replace(/\/$/, "").split("/").pop()
      return d
    })
    .filter(d => d.slug === slug)[0]

</script>

<div class=narrative>
  {#if page.google_drive_id}
     <a href="https://docs.google.com/document/d/{page.google_drive_id}/edit">edit in Google</a>
  {/if}
 {@html innerHTML}
</div>

