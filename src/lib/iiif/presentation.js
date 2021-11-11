import config from '$lib/config'
import { dev } from '$app/env';
import { image_manifest } from '$lib/iiif/image';
import data_raw from '../../../_all_data.json?raw'
const data = JSON.parse(data_raw);

const img_cache = {};
const root = dev ? "" : config.url 
const { iiif_root } = config;

export async function thumbnail(pid) {
  try {
    const man = await manifest(pid);
    return man['thumbnail'];
  } catch (e) {
    return undefined
  }
}

export async function get_images(id) {
  console.log("getting", {id})
  if (img_cache[id]) {
    return img_cache[id];
  }
  const image_set = data.filter(d => d['wax:id'] == id)
  if (image_set.length == 0) {
    return []
  }
  const ids = image_set[0]['wax:images']
  const promises = ids
    .map(id => image_manifest(id))

  const responses = await Promise.all(promises);
  img_cache[id] = responses.filter(d => d);
  return img_cache[id]
}

export async function manifest(id) {
  let sequences = [await sequence(id)];
  if (sequences[0] == undefined) {
    sequences = [];    
  }
  const d = data.filter(d => d['wax:id'] == id)[0]
  const individual_images = d['wax:images']
  const first_image = individual_images[0]
/*  const all_images = await get_images(id);
  const first_image = all_images[0]
  if (first_image === undefined) {
    throw new Error(id + "IS UNDEFINED: " + JSON.stringify(all_images))
  } */

  const first_image_id = first_image['@id'];
  const manifest = {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": `${iiif_root}/presentation/${id}`,
      "@type": "sc:Manifest",
      // The metadata is filled directly from the wax metadata.
      "metadata": Object.entries(d).filter(([label, value]) => label && value).map(([label, value]) => ({label: label, value: value})),
      // The IIIF label is the same as the Wax label.
      "label": `${d.label}`,
      "thumbnail": `${root}/thumbnails/${individual_images[0]}.jpg`,
      "viewingDirection": "left-to-right",
      "viewingHint": "individuals",
      "sequences": sequences,
      "full": `${iiif_root}/${first_image}/full/full/0/default.jpg`,
//      "fullwidth": `${iiif_root}/${first_image_id}/full/${first_image.width},/0/default.jpg`
  }
  return manifest;
}

export function img_to_canvas(img) {
  let id = img['@id']
  const filename = id.split('/').pop();
  if (dev) {
    id = `http://localhost:3000/iiif/image/${filename}`
  }
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
    throw new Error("pid " + id + " HAS NO IMAGES")
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