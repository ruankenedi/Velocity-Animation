let playing,
    _counter = 1;

function autoplay(speed) {
  if (typeof speed === 'number' && speed >= 1500) {
    setTimeout(() => {
      $('.slider').slider('next');
      $('.slider').slider('pause');

      playing = setTimeout(() => {
        autoplay(speed);
      }, (speed * 3)) ;
    }, speed);
  }
}

function go(where) {
  if (where && typeof where === 'string') {
    clearTimeout(playing);

    if (where === 'next') {
      $('.slider').slider('next');
      autoplay();
      
      return;
    }
    
    if (where === 'prev') {
      $('.slider').slider('prev');
      autoplay();

      return;
    }
  }
}

function mobileViewHelper(element) {
  if (screen.width <= 1020 && typeof element === 'string') {
    $(element).remove();
  }
}

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top + 370;
  var elemBottom = elemTop + $(elem).height() - 800;

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

(function($){
  $.scrollIt({
    easing: 'linear',
    scrollTime: 1000,  
    activeClass: 'active',
    onPageChange: null,
    topOffset: -16
  });
  
  $(function(){

    $(document).ready(function(){ 
      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        padding: 8,
        dist: 0
      });
    });

    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
    }
  );

  let $car = $('.car'),
      $truck = $('.truck'),
      $carTier = $('.wheel'),
      $truckTier = $('.truck-tier'),
      $secTruckTier = $('.second-truck-tier'),
      $placeIconLeft = $('.place-icon-left'),
      $placeIconRight = $('.place-icon-right'),
      options = [
        { 
          selector: '.car',
          offset: 45,
          callback: function(el, jQuery) {
            $car.velocity({ translateX: '285px' }, { duration: 650 });
            $carTier.velocity({ translateX: '285px', rotateZ: '600deg' }, { duration: 650 });
            $($placeIconLeft).addClass('bounceInDown');
          }
        },
        { 
          selector: '.truck',
          offset: 80,
          callback: function(el) {
            $truck.velocity({ translateX: '-285px' }, { duration: 650 });
            $truckTier.velocity({ translateX: '-285px', rotateZ: '-600deg' }, { duration: 650 });
            $secTruckTier.velocity({ translateX: '-285px', rotateZ: '-600deg' }, { duration: 1825 });
            $($placeIconRight).addClass('bounceInDown');
          }
        }
      ];

  mobileViewHelper('.running-car');
  Materialize.scrollFire(options);

  });
})(jQuery);