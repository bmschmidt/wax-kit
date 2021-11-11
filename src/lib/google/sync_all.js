import { cached_get } from '$lib/google/export';
import configuration, {get_exhibit_pages} from '$lib/config';


export async function sync_pages() {
  console.log("syncing pages")
  const promises = [];
  for (let sub of get_exhibit_pages(configuration)) {
    console.log({sub})
    const {link, google_drive_id} = sub;
    if (!sub.google_drive_id) {return}
    const link_parts = link.split('/')
    let slug = ''
    while (slug == '' && link_parts.length) {
      slug = link_parts.pop()
    }
    console.log({slug})
    console.log({slug:`_exhibits/${slug}.md`})
    promises.push(
      cached_get(
        google_drive_id, 
        `_exhibits/${slug}.md`)
    )
  }
  // Currently no way to define markdown links here.
  return promises
  /*
  const downloads = pages
    .filter(d => d.google)
    .map(page => {
      console.log({page})
      cached_get(page.google, `_exhibits/${page.slug}.md`)
    })
  return Promise.all(downloads) */
}

export function sync_data() {
  const downloads = [];
  if (!configuration.collections) return;
  for (let name of Object.keys(configuration.collections)) {
    const collection = configuration.collections[name];
    const { metadata } = collection;
    if (metadata === undefined || 
        metadata.google_drive_id === undefined) {
      continue
    }
    
    downloads.push(
      cached_get(
        metadata.google_drive_id, 
        `_data/${metadata.source}`)
    );
  }
  return Promise.all(downloads)
}