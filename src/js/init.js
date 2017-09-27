const footer = $('.footer-copyright');

let car = $('.car'),
    truck = $('.truck'),
    carTier = $('.wheel'),
    truckTier = $('.truck-tier'),
    secTruckTier = $('.second-truck-tier'),
    rightPlaceIcon = $('.place-icon-right'),
    leftPlaceIcon = $('.place-icon-left');

function autoplay() {
  setTimeout(() => {
    $('.carousel').carousel('next')
    autoplay();
  }, 4000);
}

function isFooterVisible() {
  if (footer.isOnScreen()) {
    $('.about').removeClass('active');
    $('.contact').addClass('active');
  }
}

let hasCarStarted = false,
    hasTruckStarted = false,
    dirtyCar,
    dirtyTruck;

function isVehicleVisible() {
  if ($('.car').isOnScreen() && hasCarStarted === false) {
    hasCarStarted = true;
    
    car.velocity({
      translateX: '285px'
    }, {
      duration: 650,
      begin: (el) => { dirtyCar = true; },
      complete: (el) => { dirtyCar = false; }
    });
    carTier.velocity({
      translateX: '285px',
      rotateZ: '600deg'
    }, {
      duration: 650
    });    
    leftPlaceIcon.addClass('bounceInDown');

    return;
  }

  if (dirtyCar === false && $('.car').isOnScreen() === false) {
    dirtyCar = true;
    hasCarStarted = false;

    car.velocity({
      translateX: '0px'
    }, {
      duration: 300
    });
    carTier.velocity({
      translateX: '0px',
      rotateZ: '0deg'
    }, {
      duration: 300
    });
    leftPlaceIcon.removeClass('bounceInDown');

    return;
  }

  if ($('.truck').isOnScreen() && hasTruckStarted === false) {
    hasTruckStarted = true;
    
    truck.velocity({
      translateX: '-285px'
    }, {
      duration: 620,
      begin: (el) => { dirtyTruck = true; },
      complete: (el) => { dirtyTruck = false; }
    });
    truckTier.velocity({
      translateX: '-285px',
      rotateZ: '-600deg'
    }, {
      duration: 620
    });
    secTruckTier.velocity({
      translateX: '-285px',
      rotateZ: '-600deg'
    }, {
      duration: 620
    });

    rightPlaceIcon.addClass('bounceInDown');

    return;
  }

  if (dirtyTruck === false && $('.truck').isOnScreen() === false) {
    dirtyTruck = true;
    hasTruckStarted = false;

    truck.velocity({
      translateX: '0px'
    }, {
      duration: 620
    });
    truckTier.velocity({
      translateX: '0px',
      rotateZ: '0deg'
    }, {
      duration: 620
    });
    secTruckTier.velocity({
      translateX: '0px',
      rotateZ: '0deg'
    }, {
      duration: 620
    });
    rightPlaceIcon.removeClass('bounceInDown');
  }
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

    $(window).scroll(function() {
      isFooterVisible();
      isVehicleVisible();
    });

    $('.contact').click(function (el) {
      isFooterVisible();
      // footer.scr
    });

    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
    });

    
    let  options = [ 
        {
          selector: '.truck',
          offset: 80,
          callback: function (el) {
            truck.velocity({
              translateX: '-285px'
            }, {
              duration: 620
            });
            truckTier.velocity({
              translateX: '-285px',
              rotateZ: '-600deg'
            }, {
              duration: 620
            });
            secTruckTier.velocity({
              translateX: '-285px',
              rotateZ: '-600deg'
            }, {
              duration: 620
            });

            $('.place-icon-right').addClass('bounceInDown');
          }
        }
      ];

    // Materialize.scrollFire(options);
    // autoplay();

  });
})(jQuery);