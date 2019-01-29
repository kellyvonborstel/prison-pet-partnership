$(function() {

  // $('.announcement-wrapper').hide();
  // $('.announcement-wrapper').fadeIn(2000);

  addImageHandlers();

  // tabbed panels
  $(".tabs-menu a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });

  // change order of sidebar items when window is resized
  $(window).resize(function () {
    var windowWidth = $(window).width();

    if (windowWidth >= 870) {
      $(".announcement-wrapper").remove().insertBefore($(".sidebar-links"));
      addImageHandlers();
    }
    else {
      $(".sidebar-links").remove().insertBefore($(".announcement-wrapper"));
    }
  }).trigger("resize");

  // slide menu for small screens
  $('.nav-menu-open').on('click', function(event) {
    event.preventDefault();
    $('body').addClass('menu-open');
    $('.nav-menu').addClass('active');
    $('.mask').addClass('active');
    $('.nav-menu-open').disabled = true;
  });

  $('.nav-menu-close').on('click', function(event) {
    event.preventDefault();
    $('body').removeClass('menu-open');
    $('.nav-menu').removeClass('active');
    $('.mask').removeClass('active');
    $('.nav-menu-open').disabled = false;
  });

  // added the click handler to prevent images from disappearing on ios
  function imageHandler(className, enterImgPath, leaveImgPath) {
    $(className).on({
      mouseenter: function() {
        $(className).attr('src', enterImgPath);
      },
      mouseleave: function() {
        $(className).attr('src', leaveImgPath);
      },
      click: function() {
        $(className).attr('src', leaveImgPath);
      }
    });
  }

  function addImageHandlers() {
    // class names with '-home' included because path is different for images on index.html
    imageHandler('.js-donate-home', 'images/donate-blue-dark.svg', 'images/donate-blue.svg');
    imageHandler('.js-donate', '../images/donate-blue-dark.svg', '../images/donate-blue.svg');
    imageHandler('.js-boarding-home', 'images/boarding-blue-dark.svg', 'images/boarding-blue.svg');
    imageHandler('.js-boarding', '../images/boarding-blue-dark.svg', '../images/boarding-blue.svg');
    imageHandler('.js-calendar-home', 'images/calendar-blue-dark.svg', 'images/calendar-blue.svg');
    imageHandler('.js-calendar', '../images/calendar-blue-dark.svg', '../images/calendar-blue.svg');
    imageHandler('.js-facebook-home', 'images/facebook-blue-dark.svg', 'images/facebook-blue.svg');
    imageHandler('.js-facebook', '../images/facebook-blue-dark.svg', '../images/facebook-blue.svg');
    imageHandler('.js-twitter-home', 'images/twitter-blue-dark.svg', 'images/twitter-blue.svg');
    imageHandler('.js-twitter', '../images/twitter-blue-dark.svg', '../images/twitter-blue.svg');
    imageHandler('.js-facebook-footer-home', 'images/facebook-red.svg', 'images/facebook-white.svg');
    imageHandler('.js-facebook-footer', '../images/facebook-red.svg', '../images/facebook-white.svg');
    imageHandler('.js-twitter-footer-home', 'images/twitter-red.svg', 'images/twitter-white.svg');
    imageHandler('.js-twitter-footer', '../images/twitter-red.svg', '../images/twitter-white.svg');
    imageHandler('.js-linkedin-home', 'images/linkedin-dark.svg', 'images/linkedin.svg');
    imageHandler('.js-linkedin', '../images/linkedin-dark.svg', '../images/linkedin.svg');
  }
});
