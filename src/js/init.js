function autoplay() {
  setTimeout(() => {
    $('.carousel').carousel('next')
    autoplay();
  }, 4000);
}

(function ($) {
  $.scrollIt({
    easing: 'linear',
    scrollTime: 1000,
    activeClass: 'active',
    onPageChange: null,
    topOffset: -46
  });

  $(function () {

    $(document).ready(function () {
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
    });

    let car = $('.car'),
      truck = $('.truck'),
      carTier = $('.wheel'),
      truckTier = $('.truck-tier'),
      secTruckTier = $('.second-truck-tier'),
      options = [{
          selector: '.car',
          offset: 45,
          callback: function (el, jQuery) {
            car.velocity({
              translateX: '285px'
            }, {
              duration: 650
            });
            carTier.velocity({
              translateX: '285px',
              rotateZ: '600deg'
            }, {
              duration: 650
            });
            $('.place-icon-left').addClass('bounceInDown');
          }
        },
        {
          selector: '.truck',
          offset: 80,
          callback: function (el) {
            truck.velocity({
              translateX: '-285px'
            }, {
              duration: 650
            });
            truckTier.velocity({
              translateX: '-285px',
              rotateZ: '-600deg'
            }, {
              duration: 650
            });
            secTruckTier.velocity({
              translateX: '-285px',
              rotateZ: '-600deg'
            }, {
              duration: 1825
            });
            $('.place-icon-right').addClass('bounceInDown');
          }
        }
      ];

    Materialize.scrollFire(options);
    // autoplay();

  });
})(jQuery);