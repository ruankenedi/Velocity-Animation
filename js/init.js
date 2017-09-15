let playing;

function autoplay(speed) {
  if (typeof speed === 'number' && speed >= 1500) {
    setTimeout(() => {
      $('.slider').slider('next');

      playing = setTimeout(() => {
        autoplay(speed);
      }, (speed * 2)) ;
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

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top + 140;
  var elemBottom = elemTop + $(elem).height() - 500;

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
   $('.running-car').each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('in-view');
    } else {
      $(this).removeClass('in-view');
    }
  });
});


(function($){
  $.scrollIt({
    upKey: 38,
    downKey: 40,
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
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    }
  );

  }); // end of document ready
})(jQuery); // end of jQuery name space