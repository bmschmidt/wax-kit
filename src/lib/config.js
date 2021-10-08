import { load } from 'js-yaml'
import t from '../../_config.yml?raw'

function build_config() {
  const configuration = load(t);
  if (configuration.iiif_root === undefined) {
    configuration.iiif_root = "http://localhost:3000/iiif/image"
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