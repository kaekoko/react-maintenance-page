# Maintenance Page for Hotcode company

The default maintenance page for React project create by Hotcode team

## Required dependencies

`react` 16.12.0 or above

`react-dom` 16.12.0 or above

## Installation

for NPM version

`npm install @hotcode/maintenance-page`

for Github version

`npm install @hotcode/maintenance-page:hotcode-dev/maintenance-page`

## Commands

`npm run {script}`

replace `script` with following commands

`dev`: Run Webpack server and Live reload

`check`: Check Google Typescript Style

`fix`: Automatic fix Google Typescript Style

`compile`: Compile `/src` codes to `/build`

`publish`: Publish the package to NPM

## Project structures

`/src` : Codes that will compile to /build and publish to package manager. These will compile using Typescript cli.

`/test` : Contain codes for test and dev only. These will compile using Webpack for live reload to /dist.

`/design` : Design files contains images and Inkscape SVG.

## Todos

- Add animation background for SVG image with Anime.js

## Links

<https://blog.logrocket.com/comparing-the-top-js-animation-libraries-for-use-in-react-apps-2/>
<https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript>
<https://stackoverflow.com/questions/48704770/webpack-is-not-copying-images-to-dist-folder>
