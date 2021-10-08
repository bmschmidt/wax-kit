import { return_dataset } from '$lib/records'

export async function get({params}) {
  // 'get' is called when the route is visited
  const collection = params.collection;
  const dataset = await return_dataset(collection);
  return {
    body: dataset
  }
}