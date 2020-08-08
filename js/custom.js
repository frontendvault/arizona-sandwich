$(function () {
  $('#orderingStatus').change(function () {
    $('.method').hide();
    $('#' + $(this).val()).show();
  });
  $('#customScroll').mCustomScrollbar({
    theme: 'dark-thin',
  });
});
$(document).ready(function () {
  $('.toggle-map').click(function () {
    $('.toggle-map-container').toggle();
  });
});
