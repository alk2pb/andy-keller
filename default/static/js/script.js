var position = $(".navbar-brand-name").position();
if ($(window).width() >= 767){
  $(".profile-picture-collapse").css("left",position.left + 140);
}
else {
  $(".profile-picture-collapse").css("left",position.left + 130);
}

var position2 = $(".resume-container").find(".section-heading").position();

var resumepositionleft = position2.left + $(".resume-container").find(".section-heading").width() - 26;

var resumepositiontop = position2.top + 10;

$(".resume-link").css("left",resumepositionleft);
$(".resume-link").css("top",resumepositiontop);


var rtime = new Date(1, 1, 2000, 12,00,00);
var timeout = false;
var delta = 200;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        //alert('Done resizing');
    }
    position = $(".navbar-brand-name").position();
    if ($(window).width() >= 767){
      $(".profile-picture-collapse").css("left",position.left + 140);
    }
    else {
      $(".profile-picture-collapse").css("left",position.left + 130);
    }
    
    position2 = $(".resume-container").find(".section-heading").position();

    var resumepositionleft = position2.left + $(".resume-container").find(".section-heading").width() - 26;
    
    var resumepositiontop = position2.top + 10;
    
    $(".resume-link").css("left",resumepositionleft);
    $(".resume-link").css("top",resumepositiontop);
}

$("html").click(function(event) {
  
  if ($(window).width() >= 767){
    event.stopPropagation();
  }
  else {
    if ($(".navbar-collapse").is(":hidden") && !$(event.target).hasClass("navbar-toggle")){
      event.stopPropagation();
    }
  }
  
});

$(".navbar").click(function(event) {
  if (!$(event.target).hasClass("navbar-toggle")){
    event.stopPropagation();
  }
});

$(".navbar-brand").mouseover(function() {
        $(".profile-picture-collapse").addClass("shadow-z-2-hover");
      });
      $(".navbar-header").mouseout(function() {
        $(".profile-picture-collapse").removeClass("shadow-z-2-hover");
      });

if ($("#intro").height() < $(window).height()){
  $("#intro").height($(window).height());
}
if ($("#contact").height() < $(window).height()){
  $("#contact").height($(window).height());
}

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").addClass("shadow-z-2");
        $(".profile-picture").fadeOut(800)
        $(".profile-picture-collapse").fadeIn(800);
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").removeClass("shadow-z-2");
        $(".profile-picture").fadeIn(800);
        $(".profile-picture-collapse").fadeOut(800);
    }
    
    /*if ($(document).height() - ($(window).scrollTop() + $(window).height()) <= 92){
      $(".footer").show();
    }
    else {
      $(".footer").hide();
    }*/
    
    
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});