import { csvParse } from 'd3-dsv';
import config from '$lib/config';
import { all_images } from '$lib/image_management'

const cache = {};

export async function return_dataset(collection_name) {
  const cache = {};
  if (!config.collections[collection_name] || !config.collections[collection_name].metadata || !config.collections[collection_name].metadata.source) {
    // There can be 'collections' that aren't *wax* collections.
    return Promise.resolve([]);
  }
  const source_csv = '_data/' + config.collections[collection_name].metadata.source;
  if (cache[source_csv] !== undefined) {
    return cache[source_csv];
  }
  const full_imagelist = await all_images(collection_name);
  const fs = await import('fs').then(p => p.promises)

  const promise = fs.readFile(source_csv)
  .then( (data) => csvParse('' + data))
  .then(d => 
    d.
    filter(d => full_imagelist.get(d.pid.toLowerCase()))
    .map(entry => {
      entry['pid'] = entry['pid'].toLowerCase(); // Case insensitivity as lowercase.
      entry["wax:collection"] = collection_name;
      entry["wax:images"] = full_imagelist.get(entry['pid'].toLowerCase()).map(d => d['wax:id']);
      const my_str = `${collection_name}:${entry.pid}`
      entry['wax:id'] = my_str
      return entry
    }).filter(d => d["wax:images"].length)
   
  )
  .catch(e => {throw new Error(e)})
  cache[source_csv] = promise;
  return promise
}

export function return_all_datasets() {
  const promises = [];

  for (const collection_name in config.collections) {
    promises.push(return_dataset(collection_name));
  }

  return Promise.all(promises)
  .then(sets => {
    const all = [];
    for (const set of sets) {
      all.push(...set);
    }
    return all;
  })
  .catch(err => {console.warn(err)})

}

console.log("FOO")
export const all_data = return_all_datasets()