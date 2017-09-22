//stuffs.j
require('materialize-css/dist/js/materialize.min.js');
require('./src/js/scrollIt.js');
require('./src/js/init.js');

const headerElement = $('.header-background');
let parent, caption, headline, p, image, div = $('<div></div>');

function addElement(element, src, elmClass, title, content) {
  if (element === 'img') {
    $('.video-background').remove();
    $(headerElement)
    .css({
      'background-image': 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(' + require('./src/images/' + src) +')',
      'background-position': 'center',
      'background-size': 'cover'
    });

    return;
  }

  if (element === 'video') {
    $(headerElement).append($('<video></video>')
    .addClass(elmClass || '')
    .attr({
      'src': require('./src/images/' + src),
      'autoplay': true,
      'loop': true,
      'muted': true
    }));

    return;
  }

  if (element === 'slide' && elmClass) {
    parent = $('<li></li>').addClass('carousel-item');
    caption = div.addClass('regular-caption' + elmClass);
    headline = $('<h3></h3>').addClass('light');
    p = $('<p></p>').addClass('light grey-text text-lighten-2');
    image = div
      .addClass('slide-mask')
      .css({
        'background': 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(' + require('./src/images/' + src) +')',
        'background-position': '50%',
        'background-size': 'cover',
        'width': '100%',
        'height': '100%',
        'position': 'sticky',
        'bottom': '0',
        'z-index': '-1'
      });

    caption.append(headline).html(title);
    caption.append(p).html(content);
    parent.append(caption);
    parent.append(image);

    return;
  }
}

function renderElement() {
  const width = screen.width;

  if (width <= 500) {
    addElement('img', 'phone-bg.jpg');

    return;
  }
  if (width <= 768) {
    addElement('img', 'tablet-bg.jpg');

    return;
  }
  if (width > 768) {
    addElement('video', 'video.mp4', 'video-background');

    return;
  }
}

renderElement(); 
$(window).resize(function() {
  renderElement();
});


addElement('slide', 'about.png', 'left-caption', 'About', 'this is a dummy text');


//stuffs.css
require('materialize-css/dist/css/materialize.min.css');
require('./src/fonts/icons/material-icons.css');
require('./src/css/style.css');