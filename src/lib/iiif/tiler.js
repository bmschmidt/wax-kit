console.log("WHOOO")
import sharp from 'sharp';
import fs from 'fs';
import config from '$lib/config';

const { full_url } = config;
export default async function tile_image(local_path, id) {
  console.log("TILING", id)
  // Creates IIIF tiles of an image using the 'sharp' library.

  // Use the same absolute path for derivatives as jekyll/wax.
  const directory = `img/derivatives/iiif/images/${id}`

  if (!fs.existsSync(local_path)) {
    throw new Error(`Can't find file at ${local_path}`)
  }
  console.log("FOUND")

  if (fs.existsSync(`${directory}/info.json`)) {
    console.log("FOUND")
    return;
  }

  await fs.mkdir(directory, { recursive: true }, (err) => {
    if (err) throw err;
  });
  
  const val = await sharp(local_path)
    .tile({
      layout: "iiif",
      id: full_url + "/iiif/image/"
    })
    .toFile(directory);
  return val;
}