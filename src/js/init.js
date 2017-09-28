const car = $('.car');
const truck = $('.truck');
const carTier = $('.wheel');
const truckTier = $('.truck-tier');
const secTruckTier = $('.second-truck-tier');
const rightPlaceIcon = $('.place-icon-right');
const leftPlaceIcon = $('.place-icon-left');
const footer = $('.footer-copyright');

let options;
let hasTruckStarted = false;
let hasCarStarted = false;
let dirtyTruck;
let dirtyCar;

function autoplay() {
  setTimeout(() => {
    $('.carousel').carousel('next');
    autoplay();
  }, 4000);
}

function isFooterVisible() {
  if (footer.isOnScreen()) {
    $('.about').removeClass('active');
    $('.contact').addClass('active');
  }
}

function isVehicleVisible() {
  if ($('.car').isOnScreen() && hasCarStarted === false) {
    hasCarStarted = true;
    car.velocity({
      translateX: '285px'
    }, {
      duration: 650,
      begin: () => { dirtyCar = true; },
      complete: () => { dirtyCar = false; }
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
      begin: () => { dirtyTruck = true; },
      complete: () => { dirtyTruck = false; }
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

(function init($) {
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

    $('.contact').click(function () {
      isFooterVisible();
    });

    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
    });

    options = [{
      selector: '.truck',
      offset: 80,
      callback: function () {
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