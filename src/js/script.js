$(document).ready(function () {
    $('.carousel__inner').slick({
        dots: false,
        speed: 1200,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:2000,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows:false
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                arrows:false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
});
//   slick slider