import { csvParse } from 'd3-dsv';
import config from '$lib/config';
import { promises as fs } from 'fs';
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
  const promise = fs.readFile(source_csv)
  .then( (data) => csvParse('' + data))
  .then(d => 
    d.map(entry => {
      entry["wax:collection"] = collection_name;
      entry["wax:images"] = []
      const my_str = `${collection_name}:${entry.pid}`
      entry['wax:id'] = my_str
      for (let imagename of full_imagelist) {
        if (imagename.toLowerCase().includes(my_str.replace(/[^:]+:/, '').toLowerCase())) {
          entry["wax:images"].push(collection_name + ":" + imagename);
        } else {

        }
      }
      return entry
    }).filter(d => d["wax:images"].length)
    
    );
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

export const all_data = return_all_datasets()