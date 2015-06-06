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
        $(this).css('background-color', '#839098');
        break;
      case 1:
        $(this).css('background-color', '#5481e6');
        break;
      case 2:
        $(this).css('background-color', '#913ccd');
        break;
      case 3:
        $(this).css('background-color', '#f15f74');
        break;
      case 4:
        $(this).css('background-color', '#f76d3c');
        break;
      case 5:
        $(this).css('background-color', '#f7d842');
        break;
      case 6:
        $(this).css('background-color', '#2ca8c2');
        break;
      case 7:
        $(this).css('background-color', '#98cb4a');
        break;
    }
    i = i + 1;
  });

  $('.p1').attr('data-tooltip','Project 1');
  $('.p2').attr('data-tooltip','Project 2');
  $('.p3').attr('data-tooltip','Project 3');
  $('.p4').attr('data-tooltip','Project 4');
  $('.p5').attr('data-tooltip','Project 5');
  $('.p6').attr('data-tooltip','Project 6');
  $('.p7').attr('data-tooltip','Project 7');
  $('.p8').attr('data-tooltip','Project 8');

  $('.tooltipped').each(function() {
    $(this).tooltip({delay: 0});
  });

  $('.slick-list').css('height', $(window).height() + 'px');

  $('.slick-slide').each(function() {
    $(this).css('height', $(window).height() + 'px');
    $(this).css('line-height', $(window).height() + 'px');
  });

  $('.slick-dots').css('top', $(window).height()/2 - $('.slick-dots').height()/2 + 'px');

  $(window).resize(function() {
    $('.tooltipped').each(function() {
      $(this).mouseout();
    });

    $('.slick-list').css('height', $(window).height() + 'px');

    $('.slick-slide').each(function() {
      $(this).css('height', $(window).height() + 'px');
      $(this).css('line-height', $(window).height() + 'px');
    });

    $('.slick-dots').css('top', $(window).height()/2 - $('.slick-dots').height()/2 + 'px');
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
});