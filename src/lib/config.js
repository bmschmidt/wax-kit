import { load } from 'js-yaml'
import t from '../../_config.yml?raw'
import { dev } from '$app/env'

/* NOTE  THIS WILL ONLY WORK IF THE PORT IS 3000 */

// In dev mode, this injects 'localhost:3000' as the root URL, 
// even inside IIIF identifiers.

function build_config() {

  const configuration = load(t)
  if (configuration.iiif_root === undefined) {
    configuration.iiif_root = dev ? 
      "http://localhost:3000/iiif/image" :
       configuration.url + "/iiif/image"
  }

  {
    configuration.base_url = dev ?
      "http://localhost:3000/" : 
      configuration.url
  }

  test_config(configuration)
  return configuration 
}


const config = build_config()
export default config;

export function get_exhibit_pages(conf) {
  const configuration = conf ? conf : config
  const { menu } = configuration
  let exhibits = menu.filter(d => d.label == 'Exhibits')
  if (!exhibits.length) {return}
  exhibits = exhibits[0]
  if (!exhibits || !exhibits.sub) {return []}
  console.log(exhibits.sub)
  return exhibits.sub
}


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