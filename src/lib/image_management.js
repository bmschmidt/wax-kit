import { promises as fs } from 'fs'
import config from '$lib/config'

const original_formats = [
  "jpg", 
  "jpeg",
  "png",
  "tiff",
  "tif"
]

async function all_dir_images(dir, prefix = "") {
  // This function was mostly written by Copilot.
  const files = await fs.readdir(dir)
  const images = []
  for (let file of files) {
    const location = `${dir}/${file}`
    const stats = await fs.stat(location)
    if (stats.isDirectory()) {
      let sub_images = await all_dir_images(location, 
        `${file}_`)
//      sub_images = sub_images.map(d => `${prefix}${d}`)
      images.push(...sub_images)
    } else {
      if (original_formats.includes(file.split('.').pop())) {
        const front = file.split('.')
        front.pop()
        const name = front.join('.')
        images.push(prefix + name)
      }
    }
  }
  return images
}

export async function all_images(collection) {
  const imgdir = `_data/` + config.collections[collection].images.source;
  const images = await all_dir_images(imgdir)
  return images;
}

export async function associated_images(collection, pid) {
  // returns all associated files for a given pid within a collection
  const imgdir = `_data/` + config.collections[collection].images.source;
  const base = imgdir + "/" + pid
  if (await fs.file_exists(imgdir + "/" + pid)) {
    const files = await fs.readdir(base)
    files.map(fname => {
      return base + "/" + fname
    })
  }
//  await fs.stat(imgdir / ).isDirectory()
}

export async function original_location(collection, pid) {
  const imgdir = `_data/` + 
  config.collections[collection].images.source;
  for (let format of original_formats) {
    const location = imgdir + "/" + pid + '.' + format;
    if (await file_exists(location)) {
      return Promise.resolve(location)
    }
    const location2 = location.replace(/_([^_]*)$/, '/$1')
    if (await file_exists(location2)) {      
      return Promise.resolve(location2)
    }
  }
  throw new Error("File not Found")
}

async function file_exists(location) {
  return fs.access(location)
           .then(() => true)
           .catch(() => false)
}