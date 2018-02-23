$(main);

function navListener() {
  const menuNodes = document.querySelectorAll('#menu > li > a');
  // make an array with the targets from the links in our #menu
  const allNavs = [...menuNodes].map(el => el.dataset.target)
  // when a link in our menu is clicked, show the target
  // hide the others
  $('#menu').on('click', 'a', function(e) {
    const target = e.target.dataset.target;
    const others = allNavs.filter(el => el != target);
    $(`.page-${target}`).show();
    others.forEach(other => $(`.page-${other}`).hide());
  })
}

function main() {
  // carousel
  // $('.slick-carousel').slick();
  //show main div;
  $('.page-home').show();
  navListener();
}
