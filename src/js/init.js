const car = $('.car');
const truck = $('.truck');
const carTier = $('.wheel');
const truckTier = $('.truck-tier');
const secTruckTier = $('.second-truck-tier');
const rightPlaceIcon = $('.place-icon-right');
const leftPlaceIcon = $('.place-icon-left');
const footer = $('.footer-copyright');

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
  if (hasCarStarted === false) {
    leftPlaceIcon.velocity({ opacity: 0 }, { duration: 0 });
  }

  if (hasTruckStarted === false) {
    rightPlaceIcon.velocity({ opacity: 0 }, { duration: 0 });
  }

  if ($('.car').isOnScreen() && hasCarStarted === false) {
    hasCarStarted = true;
    car.velocity({
      translateX: '285px'
    }, {
      duration: 0,
      begin: () => { dirtyCar = true; },
      complete: () => {
        dirtyCar = false;

        setTimeout(() => {
          leftPlaceIcon.velocity({ opacity: .1 }, { duration: 0 });
          leftPlaceIcon.velocity({ opacity: .5 }, { duration: 0 });
          leftPlaceIcon.velocity({ opacity: 1 }, { duration: 0 });
          leftPlaceIcon.addClass('bounceInDown');
        }, 580);
      }
    });
    carTier.velocity({
      translateX: '285px',
      rotateZ: '600deg'
    }, {
      duration: 0
    });

    return;
  }

  if (dirtyCar === false && $('.car').isOnScreen() === false) {
    hasCarStarted = false;
    dirtyCar = true;

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
      duration: 0,
      begin: () => { dirtyTruck = true; },
      complete: () => {
        dirtyTruck = false;

        setTimeout(() => {
          rightPlaceIcon.velocity({ opacity: .1 }, { duration: 0 });
          rightPlaceIcon.velocity({ opacity: .5 }, { duration: 0 });
          rightPlaceIcon.velocity({ opacity: 1 }, { duration: 0 });
          rightPlaceIcon.addClass('bounceInDown');
        }, 580);
      }
    });
    truckTier.velocity({
      translateX: '-285px',
      rotateZ: '-600deg'
    }, {
      duration: 0
    });
    secTruckTier.velocity({
      translateX: '-285px',
      rotateZ: '-600deg'
    }, {
      duration: 0
    });

    return;
  }

  if (dirtyTruck === false && $('.truck').isOnScreen() === false) {
    hasTruckStarted = false;
    dirtyTruck = true;

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

    $(window).scroll(() => {
      isFooterVisible();
      isVehicleVisible();
    });

    $(window).ready(() => {
      isVehicleVisible();
    });

    $('.contact').click(() => {
      isFooterVisible();
    });

    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
    });
    // autoplay();
  });
})(jQuery);