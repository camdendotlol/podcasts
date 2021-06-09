# Podcast App

There will be an actual name eventually.

The goal of this project is to create a podcast app that will run in the browser as well as on the desktop via Electron. The browser version will be prioritized first.

The title, repo name, and URL will change once a proper name is selected.

Notes for development:

[React Player npm package for audio](https://www.npmjs.com/package/react-player)

[Howler](https://www.npmjs.com/package/howler) might be better

## Docs

Configuration variables are stored in `/src/config.tsx`.

The podcast app cannot directly access most RSS feeds due to CORS policies on the host's end. To get around this, you must run a CORS proxy server and provide its URL in ``config.tsx``. The best option is [my fork of CORS Anywhere](https://github.com/mythmakerseven/cors-anywhere), which works out of the box with the podcast app's default configuration.
