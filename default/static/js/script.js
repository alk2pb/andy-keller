// Position the profile-picture-collapse and resume-link elements correctly
var position_profile = $(".navbar-brand-name").position();

if ($(window).width() >= 767){
  $(".profile-picture-collapse").css("left",position_profile.left + 140);
}
else {
  $(".profile-picture-collapse").css("left",position_profile.left + 130);
}

var position_resume = $("#resume").find(".section-heading").position();
var resumepositionleft = position_resume.left + $("#resume").find(".section-heading").width() - 26;
var resumepositiontop = position_resume.top + 10;

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
    position_profile = $(".navbar-brand-name").position();
    if ($(window).width() >= 767){
      $(".profile-picture-collapse").css("left",position_profile.left + 140);
    }
    else {
      $(".profile-picture-collapse").css("left",position_profile.left + 130);
    }
    
    position_resume = $("#resume").find(".section-heading").position();

    var resumepositionleft = position_resume.left + $("#resume").find(".section-heading").width() - 26;
    
    var resumepositiontop = position_resume.top + 10;
    
    $(".resume-link").css("left",resumepositionleft);
    $(".resume-link").css("top",resumepositiontop);
}

// Prevent collapse event from being triggered unless navbar-toggle is clicked
// or navbar-collapse is visible and the click event is off of the navbar
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

// Change shadow of the profile-picture with mouseover
$(".navbar-brand").mouseover(function() {
        $(".profile-picture-collapse").addClass("shadow-z-2-hover");
      });
      $(".navbar-header").mouseout(function() {
        $(".profile-picture-collapse").removeClass("shadow-z-2-hover");
      });

// Adjust heights of intro and contact sections
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