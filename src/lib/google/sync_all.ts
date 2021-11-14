import { cached_get } from '$lib/google/export';
import configuration, {get_exhibit_pages} from '$lib/config';
import { image_list } from '$lib/google/sync_images';

export async function sync_images() {
  const all_images = await image_list()
  const total_sync = all_images.map(img => {
    return cached_get(img.id, img.location, false, new Date(img.modifiedTime))
      .then(() => true) // throw away the actual value.
  })
  return Promise.all(total_sync)
}

export async function sync_pages() {
  const promises = [];
  for (let sub of get_exhibit_pages(configuration)) {
    if (!sub) continue
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