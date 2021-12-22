import config from '$lib/config'

const original_formats = [
  "jpg", 
  "jpeg",
  "png",
  "tiff",
  "tif"
]

function drop_suffix(string) {
  return string.replace(/\.[^.]+$/, "")
}

const img_cache = new Map()

export async function all_images(collection_name) {
  if (img_cache.get(collection_name)) {
    return img_cache.get(collection_name);
  }
  const imgdir = `_data/` + 
    config.collections[collection_name].images.source;

  // This function was mostly written by Copilot.
  const fs = await import('fs').then(d => d.promises);
  const files = await fs.readdir(imgdir);

  const images = new Map()
  for (let file of files) {
    const location = `${imgdir}/${file}`;
    const stats = await fs.stat(location).catch((err) => {isDirectory : () => false});
    if (stats.isDirectory()) {
      const pid = file;
      const matches = [];
      const subfiles = await fs.readdir(location)
      for (let subfile of subfiles) {
        if (!original_formats.includes(subfile.split('.').pop().toLowerCase())) {
          continue
        }
        matches.push({
          original_location: location + "/" + subfile,
          pid: pid,
          'wax:id': collection_name + ":" + pid + "_" + drop_suffix(subfile)
        })
      }
      images.set(pid, matches)
    } else {
      if (original_formats.includes(file.split('.').pop())) {
        const pid = drop_suffix(file).toLowerCase()
        images.set(pid, [
          {
            original_location: location,
            pid: pid,
            'wax:id': collection_name + ":" + pid
          }
        ])
      }
    }
  }
  img_cache.set(collection_name, images)
  return images
}

export async function disk_image_locations(collection, pid) {
  // Return the locations of all images associated with a pid based on the on-disk file hierarchy.
  const images = await all_images(collection)
  const image = images.get(pid)
  if (!image) {
    return []
  }
  return image.map(img => img.original_location)
}

export async function disk_image_location(collection, id) {
  // Return the single location for an 
  const images = await all_images(collection)
  for (let [k, v] of images.entries()) {
    for (let image of v) {
      if (image['wax:id']) {
        if (image['wax:id'] == collection + ":" + id) {
          return image.original_location
        }
      }
    }
  }
  return null
}
