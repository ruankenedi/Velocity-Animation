// stuffs.js
require('materialize-css/dist/js/materialize.min');
require('./src/js/isOnScreen');
require('./src/js/carousel');
require('./src/js/scrollIt');
require('./src/js/init');


const headerElement = $('.header-background');
let parent;
let caption;
let headline;
let p;
let image;

function addElement(element, src, elmClass, title, content) {
  if (element === 'img') {
    $('.video-background').remove();
    headerElement
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
        src: require('./src/images/' + src),
        autoplay: true,
        loop: true,
        muted: true
      }));

    return;
  }

  if (element === 'slide' && elmClass) {
    parent = $('<li></li>').addClass('carousel-item');
    caption = $('<div></div>').addClass(`regular-caption ${elmClass}`);
    headline = $('<h3></h3>').addClass('light').html(title);
    p = $('<h5></h5>').addClass('light grey-text text-lighten-2').html(content);
    image = $('<div></div>')
      .addClass('slide-mask')
      .css({
        background: 'linear-gradient(rgba(0,0,0,.74),rgba(0,0,0,.74)),url(' + require('./src/images/' + src) +')',
        'background-position': '50%',
        'background-size': 'cover',
        width: '100%',
        height: '100%',
        position: 'sticky',
        bottom: '0',
        'z-index': '-1'
      });

    caption.append(headline);
    caption.append(p);
    parent.append(caption);
    parent.append(image);

    if (elmClass === 'left-caption') {
      $('.left-slide').append(parent);
      
      return;
    }

    if (elmClass === 'right-caption') {
      $('.right-slide').append(parent);
    }
  }
}

function renderElement() {
  const { width } = screen;

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
  }
}

renderElement();
$(window).resize(() => {
  renderElement();
});

addElement('slide', 'main-car-slide.png', 'left-caption', 'Rastreamento online de onde estiver.', 'Saiba onde seus veículos estão em tempo real e tenha todos os detalhes sobre seus veículos de qualquer lugar que estiver com qualquer dispositivo com conectado a internet.');
addElement('slide', 'car-slide-5.jpg', 'left-caption', 'Cerca eletrônica.', 'Proteja seu veículo usando a cerca eletrônica, uma funcionalidade que permite que você determine um perímetro para seu veículo, assim o sistema irá automaticamente te alertar caso seu veículo não esteja dentro do perímetro delimitado.');
addElement('slide', 'car-ignition.jpg', 'left-caption', 'Alerta de ignição.', 'Basta ativar o Alerta de Ignição e você será notificado em tempo real quando a iginção do seu veículo for ativida.');
addElement('slide', 'truck-slide-5.jpg', 'right-caption', 'Controle total da sua frota.', 'Com a tecnologia de telemetria de dados da Sattrack, as informações coletadas dos veículos são analisadas em dados, com isso é possível acompanhar o comportamento do motorista ao volante, identificando infrações que aumentam o risco de acidente, desperdiço de combustível e redução da disponibilidade da frota.');
addElement('slide', 'truck-slide-3.jpg', 'right-caption', 'Analise sua frota.', 'Saiba das informações detalhadamente, como tempo de utilização do veículo, velocidade média e máxima, distância percorrida, ponto inicial e ponto final com histórico de até 6 meses.');
addElement('slide', 'truck-slide-1.jpg', 'right-caption', 'Bloqueio imediato.', 'Em caso de roubo ou circunstâncias que podem colocar seu veículo em perigo, baster pedir o bloqueio imediato do veículo.');

// stuffs.css
require('materialize-css/dist/css/materialize.min.css');
require('./src/fonts/icons/material-icons.css');
require('./src/css/style.css');
