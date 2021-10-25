import { load } from 'js-yaml'
import t from '../../_config.yml?raw'

import { dev } from '$app/env'

import _all_data from '../../_all_data.json?raw'

//console.log({_all_data})
export const data = JSON.parse(_all_data)

console.log(data[3])
function build_config() {
  const configuration = load(t);

  if (configuration.iiif_root === undefined) {
    configuration.iiif_root = dev ? "http://localhost:3000/iiif/image" : configuration.url + "/iiif/image"
  }

  {
    configuration.base_url = dev ? "http://localhost:3000/" : configuration.url
  }

  test_config(configuration)
  return configuration 
}


const config = build_config()
export default config;

function test_config(configuration) {
  // Some trouble shooting so that things fail earlier. This should be expanded
  // as much as possible.
  if (!configuration.collections) {
    throw new Error('No collections defined in _config.yml')
  }
  for (let name of Object.keys(configuration.collections)) {
    if (name.indexOf(":") > -1) {
      throw new Error(`Collection name "${name}" contains a colon. This is not allowed in Waxkit to make namespacing easier.`)
    }
  }
}