$(document).ready(function() {
  $('.button-collapse').sideNav();
  $(".dropdown-button").dropdown({ hover: false, alignment: 'right', constrain_width: false, gutter: 5 });

  $('.slider').slick({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      arrows: false
  });

  var i = 0;

  $('.slick-slide').each(function() {
    switch (i) {
      case 0:
        $(this).css('background-color', '#607d8b');
        break;
      case 1:
        $(this).css('background-color', '#ff9800');
        break;
      case 2:
        $(this).css('background-color', '#2196f3');
        break;
    }
    i = i + 1;
  });

  $('.p1').attr('data-tooltip','Project 1');
  $('.p2').attr('data-tooltip','Project 2');
  $('.p3').attr('data-tooltip','Project 3');

  $('.tooltipped').each(function() {
    $(this).tooltip({delay: 0});
  });

  $('.slick-list').css('height', $(window).height() + 'px');

  $('.slick-slide').each(function() {
    $(this).css('height', $(window).height() + 'px');
    $(this).css('line-height', $(window).height() + 'px');
  });

  $('.slick-dots').css('left', $('.nav-wrapper').height()/2 - $('.slick-dots').width()/2 + 'px');
  $('.slick-dots').css('top', $(window).height()/2 - $('.slick-dots').height()/2 + 'px');

  $('.copyright').css('top', $('.nav-wrapper').height()/2 - $('.copyright').height()/2 + 'px');
  $('.copyright').css('left', $(window).width()/2 - $('.copyright').width()/2 + 'px');

  $(window).resize(function() {
    $('.tooltipped').each(function() {
      $(this).mouseout();
    });

    $('.slick-list').css('height', $(window).height() + 'px');

    $('.slick-slide').each(function() {
      $(this).css('height', $(window).height() + 'px');
      $(this).css('line-height', $(window).height() + 'px');
    });

    $('.slick-dots').css('left', $('.nav-wrapper').height()/2 - $('.slick-dots').width()/2 + 'px');
    $('.slick-dots').css('top', $(window).height()/2 - $('.slick-dots').height()/2 + 'px');

    $('.copyright').css('top', $('.nav-wrapper').height()/2 - $('.copyright').height()/2 + 'px');
    $('.copyright').css('left', $(window).width()/2 - $('.copyright').width()/2 + 'px');
  });

  // Firefox
  $('body').bind('DOMMouseScroll', function(e){
    if(e.originalEvent.detail > 0) {
      // scroll down
      if ($('.slider').slick("slickCurrentSlide") < ($('.slider').slick("slickSlidePositionCount"))){
        $('.slider').slick("slickNext");
      }
    }else {
      // scroll up
      if ($('.slider').slick("slickCurrentSlide") > 0){
        $('.slider').slick("slickPrev");
      }
    }


    // prevent page fom scrolling
    // return false;
  });

  // IE, Opera, Safari
  $('body').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta < 0) {
      // scroll down
      if ($('.slider').slick("slickCurrentSlide") < ($('.slider').slick("slickSlidePositionCount"))){
        $('.slider').slick("slickNext");
      }
    }else {
      // scroll up
      if ($('.slider').slick("slickCurrentSlide") > 0){
        $('.slider').slick("slickPrev");
      }
    }
    // prevent page fom scrolling
    // return false;
  });

  $('body').keydown(function(event) {
    if (event.keyCode === 38) {
      if ($('.slider').slick("slickCurrentSlide") > 0){
        $('.slider').slick("slickPrev");
      }

    } else if (event.keyCode === 40) {
      if ($('.slider').slick("slickCurrentSlide") < ($('.slider').slick("slickSlidePositionCount"))){
        $('.slider').slick("slickNext");
      }
    }
  });

  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
});