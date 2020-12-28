// hero carousel
$(document).ready(function(){
  $('#hero').slick({
     dots: true,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 2000,
     slidesToShow: 1,
     adaptiveHeight: true,
     prevArrow: false,
     nextArrow: false
  });
});

// product slider
$(document).ready(function(){
  $('.slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<img class="prev" src="dist/images/Arrow Left.png"/>',
      nextArrow: '<img class="next" src="dist/images/Arrow Right.png"/>',
      responsive: [
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
          }
      ]
  });
});

// accordion
const accordion = function(){
    if (window.matchMedia('(max-width: 768px)').matches) {
        if ($('.accordion_content').is(':visible')) {
          $(".accordion_content").slideUp(300);
          $(".plusminus").text('+');
      } else {
           $(".plusminus").text('+');
      }

        $(".accordion_header").click(function() {
            if ($('.accordion_content').is(':visible')) {
              $(".accordion_content").slideUp(300);
              $(".plusminus").text('+');
            }
            if ($(this).next(".accordion_content").is(':visible')) {
              $(this).next(".accordion_content").slideUp(300);
              $(this).children(".plusminus").text('+');
            } else {
              $(this).next(".accordion_content").slideDown(300);
              $(this).children(".plusminus").text('-');
            }
        });
    } else {
        $(".plusminus").text(' ');
        $(".accordion_content").show();
    }
}

$(document).ready(function() {
    accordion();
    // navigation
    $("#nav").click(function() {
        $(".nav_content").slideToggle();
    });
});
