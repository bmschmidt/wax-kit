import { load } from 'js-yaml'
import t from '../../_config.yml?raw'
import { dev } from '$app/env'

/* NOTE  THIS WILL ONLY WORK IF THE PORT IS 3000 */

// In dev mode, this injects 'localhost:3000' as the root URL, 
// even inside IIIF identifiers.

function build_config() {

  const configuration = load(t)

  if (dev) {
    configuration.url = 'http://localhost:3000';
    configuration.baseurl = '';
  }


  configuration.full_url = `${configuration.url}/${configuration.baseurl}`;
  configuration.local_url = `/${configuration.baseurl}`;

  if (configuration.baseurl == '') {
    configuration.full_url = `${configuration.url}`;
    configuration.local_url = ``;
  }

  test_config(configuration)
  return configuration;

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