# reveal.js boilerplate

Build presentations with reveal.js with zip export, build with webpack.

## Requirements

- nodejs 6+

## How to use

1. Clone this repository
2. Install all dependencies with `npm install` and change your project name and description on multible places
4. Do your changes in `index.html` and/or in `src/index.js`
5. Run `npm start` to run the deploy and automatically open the `index.html` in a browser

## Export ZIP

Run `npm run export` to export your presentation into a single zip file.

## Export PDF

1. Start your presentation with `print-pdf` in Querystring, e.g. `localhost:8080/index.html?print-pdf`
2. Use the `Print -> Save as PDF` function of your browser. (Google Chrome works best)
