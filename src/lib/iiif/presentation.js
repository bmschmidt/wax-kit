import { root } from '$lib/site_params';
import config from '$lib/config'
import { all_data } from '$lib/records';
const img_cache = {};
const data_cache = {};

const { iiif_root } = config;
let cached = undefined;
export async function thumbnail(pid) {
  try {
    const man = await manifest(pid);
    return man['thumbnail'];
  } catch (e) {
    return undefined
  }
}

export async function get_images(id) {
  if (img_cache[id]) {
    return img_cache[id];
  }
  const data = await all_data
  const image_set = data.filter(d => d['wax:id'] == id)

  if (image_set.length == 0) {
    return Promise.resolve([])
  }
  const ids = image_set[0]['wax:images']
  const promises = ids
    .map(id => `${iiif_root}/${id}/info.json`)
    .map(d => 
      fetch(d)
       .then(r => {
        return r.json()
      }));
  const responses = await Promise.all(promises);
  img_cache[id] = responses;
  return responses;
}

export async function manifest(id) {
  const sequences = [await sequence(id)];
  const data = await all_data;

  const d = data.filter(d => d['wax:id'] == id)[0]
  const first_image = (await get_images(id))[0]
  if (first_image === undefined) {
    throw new Error(id + "IS UNDEFINED")
  }

  const first_image_id = first_image['@id'];

  const manifest = {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": `${iiif_root}/presentation/${id}`,
      "@type": "sc:Manifest",
      "metadata": Object.entries(d).filter(([label, value]) => label && value).map(([label, value]) => ({label: label, value: value})),
      "label": `${d.label}`, // Controversial. 
      "thumbnail": `${root}/thumbnails/${first_image_id}.jpg`,
      "viewingDirection": "left-to-right",
      "viewingHint": "individuals",
      "sequences": sequences,
      "full": `${iiif_root}/${first_image_id}/full/full/0/default.jpg`,
//      "fullwidth": `${iiif_root}/${first_image_id}/full/${first_image.width},/0/default.jpg`
  }
  return manifest;
}

export function img_to_canvas(img) {
  const id = img['@id']
  const filename = id.split('/').pop();
  const canvas = `${root}/iiif/canvas/${filename}.json`
  return {
    "@type": "sc:Canvas",
    "@id": canvas,
    "label": "front",
    "width": 2501,
    "height": 4331,
    "thumbnail": `${iiif_root}/${filename}/full/250,/0/default.jpg`,
    "images": [
      {
        "@type": "oa:Annotation",
        "@id": `${root}/iiif/annotation/${filename}.json`,
        "motivation": "sc:painting",
        "resource": {
          "@id": `${id}/full/full/0/default.jpg`,
          "@type": "dcterms:Image",
          "format": "image/jpeg",
        "service": {
          "@context": "http://iiif.io/api/image/2/context.json",
          "@id": id,
          "profile": "http://iiif.io/api/image/2/level2.json"
        },
        "width": img.width,
        "height": img.height
        },
        "on": canvas
        }
    ]
    }

}

export async function sequence(id) {

  // Figuring out multi-page items will be trickier.
  const images = await get_images(id);
  if (images.length === 0) {
    throw new Error("pid " + id + " IS UNDEFINED")
  }
  const first_image = images[0];
  const first_image_id = first_image['@id'];
  const sequence = 
    {
      "@id": `${root}/iiif/sequence/${id}.json`,
      "@type": "sc:Sequence",
      "canvases": images.map(d => img_to_canvas(d)), 
    }
    return sequence;
}