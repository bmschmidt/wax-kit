# Wax-kit

An exploration svelte-kit based static site Wax clone using svelte-kit, a JS framework for static and dynamic websites.

This project unifies code to do three things.

1. (optionally) Use Google Drive to store the text of article exhibits, images, and collection csvs. These are handled by
   adding `google_drive_id` into the files `_config.yml`; once this is done, you can sync the page against Google and download
   any new or changed files while in dev mode or while building as a node target. (In static site mode, obviously, you can't
   keep it synced to Google, because then it wouldn't be static. For Jekyll, you'd need to use my scripts 'rubberstamp' to do this.
2. Build IIIF derivatives for images in a collection, and serve them statically using Level 0 compliance. For this, I use the `sharp` node
   module which calls `libvips` (must be installed on the system). This is a lot faster than imagemagick. Both the image and presentation APIs for
   IIIF are built entirely inside sveltekit as endpoints, making it easier to configure them and include metadata inside the fields.
3. Build instantly updating (for development) and static (for permanent presentation) versions of websites. Here I use svelte-kit for both;
   unlike Jekyll, this allows extremely fast re-rerendering and only partial builds. (E.g., in development mode, IIIF derivatives do not need
   to be built up front--instead, they are generated *on page load* on the fly.

It does this while attempting to maintain back-compatability with the data ingest for
Wax sites, so that you can simply drop in a wax `_data` folder and `_config.yml` file and
experiment with svelte-kit on the fly.

# Why?

1. I think svelte-kit is an ideal forum for experimenting with web development, because it focuses on .svelte files that
   look like real HTML and include javascript, html, *and* css with an avenue for instant experimentation that allows you to learn by doing without
   having to spent minutes recompiling for every change.
2. Svelte-kit can be a better static-site generator than Jekyll for many purposes, because it incorporates a lot of
   accessibility elements out of the box and focuses manaically on having a small footprint. Unlike React/Gatsby, it
   doesn't ship a massive bundle with every page; instead, it compiles your code to small pages that include things
   like code splitting, updateable pages, and sensible routing out of the box.


Demo site at https://paperdata.benschmidt.org

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



