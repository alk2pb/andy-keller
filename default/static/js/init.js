$(document).ready(function() {
  $('.button-collapse').sideNav();
  $(".dropdown-button").dropdown({ hover: false, alignment: 'right', constrain_width: false, gutter: 5 });

  $('.your-class').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // vertical: true
  });

  $('.p1').attr('data-tooltip','Project 1');
  $('.p2').attr('data-tooltip','Project 2');
  $('.p3').attr('data-tooltip','Project 3');

  $('.tooltipped').tooltip({delay: 0});

  $('#projects').css('height',$(window).height() + 'px');

  $('.project').each(function() {
    $(this).css('height', $(window).height() + 'px');
  });

  $('.middle').each(function() {
    $(this).css('padding-top', ($(window).height() - $(this).height())/2 + 'px')
  });

  $('.slick-prev').css('top', $('.slick-list').height()/2 - $('.slick-prev').height()/2 + 'px');
  $('.slick-prev').css('left', $('.slick-prev').height()/4 + 'px');
  $('.slick-next').css('top', $('.slick-list').height()/2 - $('.slick-prev').height()/2 + 'px');
  $('.slick-next').css('right', $('.slick-prev').height()/4 + 'px');
  $('.slick-dots').css('left', $(window).width()/2 - $('.slick-dots').width()/2 + 'px');
  $('.slick-dots').css('bottom', $('.nav-wrapper').height()/2 - $('.slick-dots').height()/2 + 'px');

  //Class for Detecting Mobile devices
  var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };

  $(window).resize(function() {
    $('#projects').css('height',$(window).height() + 'px');

    $('.project').each(function() {
      $(this).css('height', $(window).height() + 'px');
    });

    $('.middle').each(function() {
      $(this).css('padding-top', ($(window).height() - $(this).height())/2 + 'px')
    });

    $('.slick-prev').css('top', $('.slick-list').height()/2 - $('.slick-prev').height()/2 + 'px');
    $('.slick-prev').css('left', $('.slick-prev').height()/4 + 'px');
    $('.slick-next').css('top', $('.slick-list').height()/2 - $('.slick-prev').height()/2 + 'px');
    $('.slick-next').css('right', $('.slick-prev').height()/4 + 'px');
    $('.slick-dots').css('left', $(window).width()/2 - $('.slick-dots').width()/2 + 'px');
    $('.slick-dots').css('bottom', $('.nav-wrapper').height()/2 - $('.slick-dots').height()/2 + 'px');
  });

  $('body').css('opacity',1);

  // $('.tooltipped').mouseenter();

});