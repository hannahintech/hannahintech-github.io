
$(() => {
  // on page load, show main div;
  $('.page-one').show();

  // hide and show pages;
  // page one
  $('.home').on('click', function() {
    $('.page-one').show();
    $('.page-two').hide();
    $('.page-three').hide();
    $('.page-four').hide();
    $('.page-five').hide();
  });
  // page two
  $('.projects').on('click', function() {
    $('.page-one').hide();
    $('.page-two').show();
    $('.page-three').hide();
    $('.page-four').hide();
    $('.page-five').hide();
  });
  // page two project carousel

  // page three
  $('.skills').on('click', function() {
    $('.page-one').hide();
    $('.page-two').hide();
    $('.page-three').show();
    $('.page-four').hide();
    $('.page-five').hide();
  });



// window load function ends
});
