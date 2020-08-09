$(function () {
  $('#orderingStatus').change(function () {
    $('.method').hide();
    $('#' + $(this).val()).show();
  });
  $('#customScroll').mCustomScrollbar({
    theme: 'dark-thin',
  });
});
jQuery(document).ready(function ($) {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$('.toggle-map').click(function () {
  $('.toggle-map-container').toggle();
});
