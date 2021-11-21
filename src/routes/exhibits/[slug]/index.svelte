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
  import Pane from '$lib/components/OSDPane.svelte'
  import config, { get_exhibit_pages } from '$lib/config'
  const page = get_exhibit_pages()
    .map(d => {
      d.slug = d.site_link ? d.site_link.replace(/\/$/, "").split("/").pop() : undefined
      return d
    })
    .filter(d => d.slug === slug)[0]

  function parse_user_image(raw_image_id) {
    // accepts a single id, or a slash sep, or a colon sep. Hmm.
      const image_id = raw_image_id.replace(/\/$/, "") // remove trailing slash
      const colon_split = image_id.split(":")
      const slash_split = image_id.split("/")
      let collection, pid;
      if (colon_split.length === 2) {
        [collection, pid] = colon_split
      } else if (slash_split.length === 2) {
        [collection, pid] = slash_split
      } else {
        pid = raw_image_id;
        collection = Object.keys(config.collections).filter(d => d !== 'exhibits')[0]
      }
      return {pid, collection}
    }

  const arrayed = innerHTML
    .split("{{")
    .map(d => d.split("}}"))
    .flat()
    .map((d, i) => {
      if (i % 2 === 0) {
        return {
          type: 'html',
          data: d
        }
      } else {
        return {
          type : "image",
          data : parse_user_image(d)
        }
      }
    })

</script>

<div class=narrative>
  {#if page.google_drive_id}
     <a href="https://docs.google.com/document/d/{page.google_drive_id}/edit">edit in Google</a>
  {/if}
 {#each arrayed as part}
  {#if part.type === 'html'}
   {@html part.data}
  {:else if part.type === 'image'}
    <Pane {...part.data}></Pane>
  {/if}
 {/each}
</div>

