# Wax-kit

A proof of concept for a svelte-kit based static site Wax clone using svelte-kit, a JS framework for static and dynamic websites.

Demo site at https://bmschmidt.github.io (That url is because I haven't yet made it handle non-root URLs!).

To run locally:

```
git clone github.com/bmschmidt/bmschmidt.github.io
cd bmschmidt.github.io
npm i
npm run dev
```

go to localhost:3000 

Edit files in `src/routes` and they'll be instantly updated on the server.

# Architecture

1. The goal here is to maintain a strict separation of data and code.
2. This runs off the same format Jekyll files that Wax uses; I want it to generally be possible to do a plug-and-play 
   on a Jekyll dataset. The following Jekyll locations are currently consulted:
   1. `/_config.yml` for general site configuration, names of collections, etc.
   2. `/_data` for the location of csv files, images, etc.
3. 


