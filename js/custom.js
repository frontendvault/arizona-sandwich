$(function () {
  $('#orderingStatus').change(function () {
    $('.method').hide();
    $('#' + $(this).val()).show();
  });
});

// $('.alert').alert();
