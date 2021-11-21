import { csvParse } from 'd3-dsv';
import config from './config.js';
import { all_images } from './image_management.js'
import { promises as fs } from 'fs';
// This parses all collection CSV files from disk and turns them into a site-wide JSON list of records.

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
  const promise = fs.readFile(source_csv, {encoding : 'utf-8'})
  .then( (data) => csvParse(data))
  .then(d => 
    d.
    filter(d => full_imagelist.get(d.pid.toLowerCase()))
    .map(entry => {
      entry['pid'] = entry['pid'].toLowerCase(); // Case insensitivity as lowercase.
      entry["wax:collection"] = collection_name;
      entry["wax:images"] = full_imagelist.get(entry['pid'].toLowerCase()).map(d => d['wax:id']);
      const my_str = `${collection_name}:${entry.pid}`;
      entry['wax:id'] = my_str;
      return entry
    })
//    .filter(d => d["wax:images"].length || console.log(d['wax:images']))
  )
  .catch(e => {throw new Error(e)})
  cache[source_csv] = promise;
  return promise
}

export async function reparse_all_datasets() {
  const promises = [];

  for (const collection_name in config.collections) {
    promises.push(return_dataset(collection_name));
  }

  const all_data = await Promise.all(promises)
  .then(sets => {
    const all = [];
    for (const set of sets) {
      all.push(...set);
    }
    return all;
  })
  .catch(err => {console.warn(err)})

  return all_data
}