import { root, iiif_root } from '$lib/site_params.js';

import {data} from '$lib/manifest.js';


const img_cache = {};

export async function thumbnail(pid) {
  return manifest(pid)['thumbnail'];
}

export async function get_images(pid) {
  if (img_cache[pid]) {
//    return img_cache[pid];
  }
  let images;  
  images = data.filter(d => d.pid==pid)[0]['wax:images']
  const promises = images
    .map(id => `${iiif_root}/${id}/info.json`)
    .map(d => fetch(d)
    .then(r => r.json()));
  const responses = await Promise.all(promises);
  img_cache[pid] = responses;
  return responses;
}

export async function manifest(pid) {
  const sequences = [await sequence(pid)];
  const d = data.filter(d => d.pid == pid)[0]
  const first_image = (await get_images(pid))[0]

  if (first_image === undefined) {
    throw(pid, "IS UNDEFINED")
  }
  const first_image_id = first_image['@id'];
  const manifest = {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": `${root}/iiif/${pid}`,
      "@type": "sc:Manifest",
      "metadata": Object.entries(d).filter(([label, value]) => label && value).map(([label, value]) => ({label: label, value: value})),
      "label": `${d.label}`, // Controversial. 
      "thumbnail": `${iiif_root}/${pid}/full/250,/0/default.jpg`,
      "viewingDirection": "left-to-right",
      "viewingHint": "individuals",
      "sequences": sequences,
      "full": `${iiif_root}/${first_image_id}/full/full/0/default.jpg`,
      "fullwidth": `${iiif_root}/${first_image_id}/full/${first_image.width},/0/default.jpg`
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

export async function sequence(pid) {

  // Figuring out multi-page items will be trickier.
  const images = await get_images(pid);
  if (images.length === 0) {
    throw(pid, "IS UNDEFINED")
  }
  const first_image = images[0];
  const first_image_id = first_image['@id'];

  const sequence = 
    {
      "@id": `${root}/iiif/sequence/${pid}.json`,
      "@type": "sc:Sequence",
      "canvases": images.map(d => img_to_canvas(d)), 
    }
    return sequence;
}