jQuery(document).ready(function ($) {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow">                    <img src="images/caret-left-slider.png" alt=""></button>',
    nextArrow: '<button class="slide-arrow next-arrow">                    <img src="images/caret-right-slider.png" alt=""></button>',
    responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.item-slider').slick({

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

    ],
  });
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
  $('#orderingStatus').change(function () {
    $('.method').hide();
    $('#' + $(this).val()).show();
  });
  $('#customScroll').mCustomScrollbar({
    theme: 'dark-thin',
  });
  $('.toggle-map').click(function () {
    $('.toggle-map-container').toggle();
  });

});
$('.mobile-search').click(function () {
  $('.mobile-search-container').toggle();
});