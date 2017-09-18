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
    // upKey: 38,
    // downKey: 40,
    easing: 'linear',
    scrollTime: 1000,  
    activeClass: 'active',
    onPageChange: null,
    topOffset: -50
  });
  
  $(function(){

    $('.carousel.carousel-slider').carousel({ fullWidth: true });    
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(document).ready(function(){
      $('.slider').slider();
      autoplay(3000);
    });

    $(document).ready(function(){
      $('.slider').slider();
      autoplay(3000);
    });

    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
    }
  );

  $(window).scroll(function () {
    $('.running-car').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('in-view');
  
        if (_counter <= 1) {
          _counter += 1;
  
          $('.pulsy-icon-wrapper').addClass('bounceInDown');
          setTimeout(() => {
            $('.pulsy-icon-wrapper').removeClass('bounceInDown');
          }, 2200);
        }
      } else {
        $(this).removeClass('in-view');
        $('.pulsy-icon-wrapper').removeClass('fadeInDown');
      }
    });
  });

  mobileViewHelper('.running-car');

  });
})(jQuery);