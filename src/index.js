import bar from './bar';
import 'reveal.js/lib/js/head.min.js';
import Reveal from 'reveal.js';

import 'reveal.js/css/reveal.css';
// Themes: beige, black, blood, league, moon, night, serif, simple, sky, solarized, white
import 'reveal.js/css/theme/white.css';
// Theme used for syntax highlighting of code
import 'reveal.js/lib/css/zenburn.css';

// configuration see https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    history: true,
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    dependencies: [
		// DONT LOAD PLUGINS HERE!
        // use require() for plugins after Reveal.initialize()
	],
});

// Load plugins here
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/highlight/highlight');
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/marked');
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/markedown');
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/notes/notes'); // NOT WORKING!!
require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/zoom-js/zoom');

bar();
