<script>
  import { data } from '$lib/data'
  const keys = Object.keys($data[0])
  let total_length = 0;
  const char_lengths = keys.map(key => {
    let char_length = 0;
    for (let datum of $data) {
      char_length += ("" + datum[key]).length
    }
    total_length += char_length
    return char_length
  }
  )
</script>

<svelte:head>
  <title>Data table</title>
</svelte:head>

<h1>Data table</h1>

<table style="table-layout: fixed;width:150vw;">
  <tr>
  {#each keys as key, i}
  <th style="word-wrap: break-word" width="{Math.min(3, Math.floor(char_lengths[i]/total_length*100))}%">{key}</th>
  {/each}
  </tr>
  {#each $data as datum}
  <tr>
  {#each keys as key, i}
    <td style="word-wrap: break-word" >
      {datum[key]}
    </td>
    {/each}
  </tr>
  {/each}
</table>


<div class=container>
  <div class=row>
  </div>
  {#each $data as datum}
  <div class=row>
    {#each keys as key}
      <div class="data">{datum[key]}</div>
    {/each}
  </div>
  {/each}
</div>

<style>


td {
  border: 1px solid;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: xx-small;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header {
  flex: 1;
  text-align: left;
}
.data {
  flex: 1;
  margin-left: 1em;
  text-align: right;
  text-overflow: ellipsis;
  max-width:100px;
  max-height:50px;
}
</style>