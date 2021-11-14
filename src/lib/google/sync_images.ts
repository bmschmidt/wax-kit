import {list_dir_completely} from '$lib/google/list_folder';
import config from '$lib/config'

function get_groups() {
  // get all the google drive locations for all collections
  // in this folder.
  const collections = config.collections
  const online_collections = {}
  for (let [k, v] of Object.entries(collections)) {
    console.log({k, v})
    if (v.images) {
      online_collections[k] = [v.images.source];
      if (v.images.google_drive_ids) {
        online_collections[k][1] = v.images.google_drive_ids
      } else if (v.images.google_drive_id) {
        online_collections[k][1] = [v.images.google_drive_id]
      }
    }
  }
  return online_collections
}

export async function image_list() {

  const promises = []
  const labels = []
  const locs = []

  for (let [k, v] of Object.entries(get_groups())) {
    const [disk, google] = v;
    console.log({disk, google})
    labels.push(k)
    locs.push(disk)
    promises.push(list_dir_completely(google))
  }

  return Promise.all(promises)
    .then(async (dirs) => {

      dirs.forEach((files, i) => {
        for (let file of files) {
          file.collection = labels[i];
          file.subfolder = ''
          //TODO--handle nested files gracefully.
          file.location = "_data/" + locs[i] + file.subfolder + "/" + file.name
        }
      })

      return dirs.flat()
    })
  }