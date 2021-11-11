<script>
  import { data } from '$lib/data'
  const keys = Object.keys($data[0])
</script>

<svelte:head>
<title>Data table</title>
</svelte:head>

<h1>Data table</h1>
<div class=table>
<table>
  <tr>
    {#each keys as key}
      <th>{key}</th>
    {/each}
  </tr>
  {#each $data as datum}
  <tr>
    {#each keys as key}
      <td>{datum[key]}</td>
    {/each}
  </tr>
  {/each}
</table>
</div>

