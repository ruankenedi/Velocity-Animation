//stuffs.js
const $ = require('jquery');

window.jQuery = $;
window.$ = $;

require('materialize-css/dist/js/materialize.js');
require('./src/js/scrollIt.js');
require('./src/js/init.js');

$('.header-background').append($('<video></video>')
.addClass('video-background')
.attr({
  'src': require('./src/images/video.mp4'),
  'autoplay': true,
  'loop': true,
  'muted': true
})
);

//stuffs.css
require('materialize-css/dist/css/materialize.min.css');
require('./src/fonts/icons/material-icons.css');
require('./src/css/style.css');


