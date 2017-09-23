//stuffs.j
require('materialize-css/dist/js/materialize.min.js');
require('./src/js/isOnScreen.js');
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
    caption = $('<div></div>').addClass('regular-caption ' + elmClass);
    headline = $('<h3></h3>').addClass('light').html(title);
    p = $('<h5></h5>').addClass('light grey-text text-lighten-2').html(content);
    image = $('<div></div>')
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

    caption.append(headline);
    caption.append(p);
    parent.append(caption);
    parent.append(image);

    if (elmClass === 'left-caption') {
      return $('.left-slide').append(parent);
    }

    if (elmClass === 'right-caption') {
      return $('.right-slide').append(parent);
    }

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


addElement('slide', 'main-car-slide.png', 'left-caption', 'Rastreamento online de onde estiver.', 'Com o sistema Sattrack você saberá onde seus veículos estão em tempo real com atualização a cada minuto, possibilitando o acompanhamento online e podendo ser visualizado por qualquer dispositivo com acesso a internet. Rápido, fácil e preciso.');
addElement('slide', 'truck-slide-5.jpg', 'right-caption', 'Tenha controle total sobre sua frota com a Telemetria', 'Com a tecnologia de telemetria de dados da Sattrack, as informações coletadas dos veículos são analisadas em dados, com isso é possível acompanhar o comportamento do motorista ao volante, identificando infrações que aumentam o risco deacidente, desperdiçam combustível e reduzem a disponibilidade da frota.');

//stuffs.css
require('materialize-css/dist/css/materialize.min.css');
require('./src/fonts/icons/material-icons.css');
require('./src/css/style.css');