
$(function() {

  addListeners();

  // change order of sidebar items when window is resized

  $(window).resize(function () {
    var windowWidth = $(window).width();

    if (windowWidth >= 870) {
      $(".hiring-wrapper").remove().insertBefore($(".sidebar-links"));
      addListeners();
    }
    else {
      $(".sidebar-links").remove().insertBefore($(".hiring-wrapper"));
    }
  }).trigger("resize");


  // slide menu for small screens

  $('.nav-menu-open').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('menu-open');
    $('.nav-menu').addClass('active');
    $('.mask').addClass('active');
    $('.nav-menu-open').disabled = true;
  });

  $('.nav-menu-close').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('menu-open');
    $('.nav-menu').removeClass('active');
    $('.mask').removeClass('active');
    $('.nav-menu-open').disabled = false;
  });

  // added the click handlers to prevent images from disappearing
  // on ios; '-home' included because path is different for index.html

  function addListeners() {

    $('.js-donate-home').on({
      mouseenter: function() {
        $('.js-donate-home').attr('src', 'images/donate-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-donate-home').attr('src', 'images/donate-blue.svg');
      },
      click: function() {
        $('.js-donate-home').attr('src', 'images/donate-blue.svg');
      }
    });

    $('.js-donate').on({
      mouseenter: function() {
        $('.js-donate').attr('src', '../images/donate-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-donate').attr('src', '../images/donate-blue.svg');
      },
      click: function() {
        $('.js-donate').attr('src', '../images/donate-blue.svg');
      }
    });

    $('.js-boarding-home').on({
      mouseenter: function() {
        $('.js-boarding-home').attr('src', 'images/boarding-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-boarding-home').attr('src', 'images/boarding-blue.svg');
      },
      click: function() {
        $('.js-boarding-home').attr('src', 'images/boarding-blue.svg');
      }
    });

    $('.js-boarding').on({
      mouseenter: function() {
        $('.js-boarding').attr('src', '../images/boarding-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-boarding').attr('src', '../images/boarding-blue.svg');
      },
      click: function() {
        $('.js-boarding').attr('src', '../images/boarding-blue.svg');
      }
    });

    $('.js-calendar-home').on({
      mouseenter: function() {
        $('.js-calendar-home').attr('src', 'images/calendar-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-calendar-home').attr('src', 'images/calendar-blue.svg');
      },
      click: function() {
        $('.js-calendar-home').attr('src', 'images/calendar-blue.svg');
      }
    });

    $('.js-calendar').on({
      mouseenter: function() {
        $('.js-calendar').attr('src', '../images/calendar-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-calendar').attr('src', '../images/calendar-blue.svg');
      },
      click: function() {
        $('.js-calendar').attr('src', '../images/calendar-blue.svg');
      }
    });

    $('.js-facebook-home').on({
      mouseenter: function() {
        $('.js-facebook-home').attr('src', 'images/facebook-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-facebook-home').attr('src', 'images/facebook-blue.svg');
      },
      click: function() {
        $('.js-facebook-home').attr('src', 'images/facebook-blue.svg');
      }
    });

    $('.js-facebook').on({
      mouseenter: function() {
        $('.js-facebook').attr('src', '../images/facebook-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-facebook').attr('src', '../images/facebook-blue.svg');
      },
      click: function() {
        $('.js-facebook').attr('src', '../images/facebook-blue.svg');
      }
    });

    $('.js-twitter-home').on({
      mouseenter: function() {
        $('.js-twitter-home').attr('src', 'images/twitter-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-twitter-home').attr('src', 'images/twitter-blue.svg');
      },
      click: function() {
        $('.js-twitter-home').attr('src', 'images/twitter-blue.svg');
      }
    });

    $('.js-twitter').on({
      mouseenter: function() {
        $('.js-twitter').attr('src', '../images/twitter-blue-dark.svg');
      },
      mouseleave: function() {
        $('.js-twitter').attr('src', '../images/twitter-blue.svg');
      },
      click: function() {
        $('.js-twitter').attr('src', '../images/twitter-blue.svg');
      }
    });

    $('.js-facebook-footer-home').on({
      mouseenter: function() {
        $('.js-facebook-footer-home').attr('src', 'images/facebook-red.svg');
      },
      mouseleave: function() {
        $('.js-facebook-footer-home').attr('src', 'images/facebook-white.svg');
      },
      click: function() {
        $('.js-facebook-footer-home').attr('src', 'images/facebook-white.svg');
      }
    });

    $('.js-facebook-footer').on({
      mouseenter: function() {
        $('.js-facebook-footer').attr('src', '../images/facebook-red.svg');
      },
      mouseleave: function() {
        $('.js-facebook-footer').attr('src', '../images/facebook-white.svg');
      },
      click: function() {
        $('.js-facebook-footer').attr('src', '../images/facebook-white.svg');
      }
    });

    $('.js-linkedin-home').on({
      mouseenter: function() {
        $('.js-linkedin-home').attr('src', 'images/linkedin-dark.svg');
      },
      mouseleave: function() {
        $('.js-linkedin-home').attr('src', 'images/linkedin.svg');
      },
      click: function() {
        $('.js-linkedin-home').attr('src', 'images/linkedin.svg');
      }
    });

    $('.js-linkedin').on({
      mouseenter: function() {
        $('.js-linkedin').attr('src', '../images/linkedin-dark.svg');
      },
      mouseleave: function() {
        $('.js-linkedin').attr('src', '../images/linkedin.svg');
      },
      click: function() {
        $('.js-linkedin').attr('src', '../images/linkedin.svg');
      }
    });

    $('.js-twitter-footer-home').on({
      mouseenter: function() {
        $('.js-twitter-footer-home').attr('src', 'images/twitter-red.svg');
      },
      mouseleave: function() {
        $('.js-twitter-footer-home').attr('src', 'images/twitter-white.svg');
      },
      click: function() {
        $('.js-twitter-footer-home').attr('src', 'images/twitter-white.svg');
      }
    });

    $('.js-twitter-footer').on({
      mouseenter: function() {
        $('.js-twitter-footer').attr('src', '../images/twitter-red.svg');
      },
      mouseleave: function() {
        $('.js-twitter-footer').attr('src', '../images/twitter-white.svg');
      },
      click: function() {
        $('.js-twitter-footer').attr('src', '../images/twitter-white.svg');
      }
    });

  }

});
