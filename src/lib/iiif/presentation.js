import config from '$lib/config'
import { image_manifest } from '$lib/iiif/image';
import { reparse_all_datasets } from '$lib/records';

const img_cache = {};
const { full_url } = config;

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
  const data = await reparse_all_datasets();
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
  const data = await reparse_all_datasets();;

  const d = data.filter(d => d['wax:id'] == id)[0]
  const individual_images = d['wax:images']
  const first_image = individual_images[0]
/*  const all_images = await get_images(id);
  const first_image = all_images[0]
  if (first_image === undefined) {
    throw new Error(id + "IS UNDEFINED: " + JSON.stringify(all_images))
  } */

  const manifest = {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": `${full_url}/iiif/image/presentation/${id}`,
      "@type": "sc:Manifest",
      // The metadata is filled directly from the wax metadata.
      "metadata": Object.entries(d).filter(([label, value]) => label && value).map(([label, value]) => ({label: label, value: value})),
      // The IIIF label is the same as the Wax label.
      "label": `${d.label}`,
      "thumbnail": `${full_url}/thumbnails/${individual_images[0]}.jpg`,
      "viewingDirection": "left-to-right",
      "viewingHint": "individuals",
      "sequences": sequences,
      "full": `${full_url}/iiif/image/${first_image}/full/full/0/default.jpg`,
//      "fullwidth": `${iiif_root}/${first_image_id}/full/${first_image.width},/0/default.jpg`
  }
  return manifest;
}

export function img_to_canvas(img) {
  let id = img['@id']
  const filename = id.split('/').pop();
  const canvas = `${full_url}/iiif/canvas/${filename}.json`
  return {
    "@type": "sc:Canvas",
    "@id": canvas,
    "label": "front",
    "thumbnail": `${full_url}/iiif/image/${filename}/full/250,/0/default.jpg`,
    "images": [
      {
        "@type": "oa:Annotation",
        "@id": `${full_url}/iiif/annotation/${filename}.json`,
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
  const sequence = 
    {
      "@id": `${full_url}/iiif/sequence/${id}.json`,
      "@type": "sc:Sequence",
      "canvases": images.map(d => img_to_canvas(d)), 
    }
    return sequence;
}