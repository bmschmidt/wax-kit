import { all_data } from '$lib/records'

export async function get() {
  // 'get' is called when the route is visited
  const dataset = await all_data;
  return {
    body: dataset
  }
}