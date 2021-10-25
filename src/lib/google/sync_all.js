import { cached_get } from '$lib/google/export';
import configuration from '$lib/config';

export function sync_pages() {
  // Currently no way to define markdown links here.
  return undefined
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