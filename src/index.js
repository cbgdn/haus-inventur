import main from './main';
import Reveal from 'reveal.js';

import 'reveal.js/css/reveal.css';
// Themes: beige, black, blood, league, moon, night, serif, simple, sky, solarized, white
import 'reveal.js/css/theme/night.css';
// Theme used for syntax highlighting of code
import 'reveal.js/lib/css/zenburn.css';
import './style.css';

// configuration see https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    history: true,
    transition: 'zoom', // none/fade/slide/convex/concave/zoom
    hideAddressBar: true,
    dependencies: [
        // DONT LOAD PLUGINS HERE!
        // use require() for plugins after Reveal.initialize()
    ],
    // parallaxBackgroundImage: (window.location.search.match( /print-pdf/gi )) ? null :'img/haus-unordnung_1920.jpg',
    // parallaxBackgroundSize: '1920px 1280px',
    pdfSeparateFragments: false,
});

// Load plugins here
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/highlight/highlight');
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/marked');
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/markedown');
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/notes/notes'); // NOT WORKING!!
require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/zoom-js/zoom');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Countdown anzeigen, bevor neue Gegenstände gezeigt werden
Reveal.addEventListener( 'slidechanged', async function( event ) {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    var prevCountdown = event.previousSlide.querySelector('.countdown');
    if (prevCountdown) {
        prevCountdown.innerHTML = '?';
    }

    var countdownElem = event.currentSlide.querySelector('.countdown');
    if (! countdownElem) {
        return;
    }

    var target = countdownElem.dataset.value;
    var counter = 3;
    countdownElem.classList.remove('scaled');

    while (counter > 0) {
        countdownElem.innerHTML = counter;
        countdownElem.classList.add('scaled');
        counter--;
        await sleep(1000);
    }

    countdownElem.classList.remove('scaled');
    countdownElem.innerHTML = target;
} );

main.run();
