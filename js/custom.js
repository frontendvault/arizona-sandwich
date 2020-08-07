$(function () {
  $('#orderingStatus').change(function () {
    $('.method').hide();
    $('#' + $(this).val()).show();
  });
});

// $(function() {
//     $('#colorselector').change(function(){
//         $('.colors').hide();
//         $('#' + $(this).val()).show();
//     });
// });
