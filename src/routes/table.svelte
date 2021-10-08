<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch }) => {
          const res = await fetch('/nara/contents.json');
          if (res.ok) {
                  const data = await res.json();
                  return {
                          props: { data }
                  };
          }
          const { message } = await res.json();
          return {
                  error: new Error(message)
          };
  };
</script>

<script>
  export let data; // from load in module context.
  const vals = new Map()
  const keys = Object.keys(data[0])
</script>

<svelte:head>
<title>Data table</title>
</svelte:head>

<h1>Data table</h1>

{#await data}

Waiting for data....

{:then}
<div class=table>
<table>
  <tr>
    {#each keys as key}
      <th>{key}</th>
    {/each}
  </tr>
  {#each data as datum}
  <tr>
    {#each keys as key}
      <td>{datum[key]}</td>
    {/each}
  </tr>
  {/each}
</table>

  </div>

{/await}
