var resNumber = $('h4');
var tableNumber;
var customerInput;
var partyInput;

// $('.table').on('click', function(){
//   $('.newRes').css('display', 'block');
//   tableNumber = $(this).attr('id');
//   resNumber.text('Table Number: ' + tableNumber);
// });

$('i').on('click', function() {
  $('.newRes').fadeOut('despacito');
  $('.newRes')[0].reset();
});

$('.button').on('click', function() {
  $("#" + tableNumber).addClass('reserved');
  $('.newRes').css('display', 'none');
  customerInput = $('#customer').val();
  partyInput = $('#partySize').val();
  $('#' + tableNumber).prepend('<div class = "popUp"><span>Name:  </span>' + customerInput + '<br><span>Party: </span>' + partyInput + '</div>');
  $('.popUp').hide();
  $('.reserved').hover(function() {
      $(this).find('.popUp').show();
    },
    function() {
      $('.popUp').hide();
    });
});


$('.table').on('click', function() {
  $('.newRes').fadeIn('despacito');
  tableNumber = $(this).attr('id');
  resNumber.text('Table Number: ' + tableNumber);
});
