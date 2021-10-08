export async function get({params}) {
  console.log({params})
  const spreadsheet_key = '1wMMPx2O3Q-2kjLGYt1Sb91LEV8fiEq7JPaJ6sIjXo8g';
  const collection = params.collection;
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheet_key}/export?format=csv`; 
  
  if (cache[url]) {
    return {
      body: cache[url]
    }
  }

  const data = await csv(url).then(data => {
    data.forEach(d => {
      d.collection = params.collection
    })
    cache[url] = data;
    return data;
  } );

  return {
    body: data
  }
}