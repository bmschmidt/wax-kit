import sharp from 'sharp';
import fs from 'fs';
import config from '$lib/config';

const {iiif_root} = config;
export default async function tile_image(local_path, id) {
  // Creates IIIF tiles of an image using the 'sharp' library.


  // Use the same absolute path for derivatives as jekyll/wax.
  const directory = `img/derivatives/iiif/images/${id}`

  if (!fs.existsSync(local_path)) {
    throw new Error(`Can't find file at ${local_path}`)
  }

  if (fs.existsSync(`${directory}/info.json`)) {
    return;
  }

  await fs.mkdir(directory, { recursive: true }, (err) => {
    if (err) throw err;
  });
  
  const val = sharp(local_path)
    .tile({
      layout: "iiif",
      id: iiif_root
    })
    .toFile(directory);
  return val;
}