import { promises as fs } from 'fs'

export async function get() {
  const data = await fs.readFile('_all_data.json', 'utf8')
  return {
    status: 200
  , body: JSON.parse(data)
}
};