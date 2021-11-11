<script context="module">
  export async function load({ page, fetch }) {
    const { slug } = page.params
    const innerHTML = await fetch(`/exhibits/${slug}/exhibit-text.html`)
      .then(d => d.text())
    return {
      props : {
        innerHTML
      }
    }
  }
</script>

<script>
  export let innerHTML
  console.log(innerHTML)
</script>

<div class=narrative>
 {@html innerHTML}
</div>

