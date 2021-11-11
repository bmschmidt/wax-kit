import { reparse_all_datasets } from '$lib/records.js'

export async function get() {
  reparse_all_datasets()
  return {
    status: 200
  , body: 'OK'}
};