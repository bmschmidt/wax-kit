import { csv } from 'd3-fetch';

// start it as an unresolved promise
const cache = {};

export function get_data(spreadsheet_key) {
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheet_key}/export?format=csv`; 
  if (cache[url]) {
    return cache[url];
  }
  const promise = csv(url).then(data => {
    cache[url] = data;
    return data;
  } );
  cache[url] = promise;
  return promise;
}