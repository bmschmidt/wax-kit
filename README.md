# Wax-kit

A proof of concept for a svelte-kit based static site Wax clone that uses a remote IIIF server for the image server, and which generates all presentation IIIF manifests locally.

Demo site at https://bmschmidt.github.io

To run locally:

```
git clone github.com/bmschmidt/bmschmidt.github.io
cd bmschmidt.github.io
npm i
npm run dev

```
go to localhost:3000 

Edit files in `src/routes` and they'll be instantly updated on the server.

(That url is because I haven't yet made it handle non-root URLs!)
