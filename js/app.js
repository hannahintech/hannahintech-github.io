

$(() => {
  // carousel
  // $('.slick-carousel').slick();
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
    $('.blurb-page').hide();
    $('.contact-page').hide();
  });
  // page two
  $('.projects').on('click', function() {
    $('.page-one').hide();
    $('.page-two').show();
    $('.page-three').hide();
    $('.page-four').hide();
    $('.page-five').hide();
    $('.blurb-page').hide();
    $('.contact-page').hide();
  });
  // page two project carousel

  // page three
  $('.skills').on('click', function() {
    $('.page-one').hide();
    $('.page-two').hide();
    $('.page-three').show();
    $('.page-four').hide();
    $('.page-five').hide();
    $('.blurb-page').hide();
    $('.contact-page').hide();
  });

  // contact
  $('.contact').on('click', function() {
    $('.contact-page').show();
    $('.page-one').hide();
    $('.page-two').hide();
    $('.page-three').hide();
    $('.page-four').hide();
    $('.page-five').hide();
    $('.blurb-page').hide();
  });

  // blurb
  $('.blurb').on('click', function() {
    $('.blurb-page').show();
    $('.contact-page').hide();
    $('.page-one').hide();
    $('.page-two').hide();
    $('.page-three').hide();
    $('.page-four').hide();
    $('.page-five').hide();
  });


// window load function ends
});
