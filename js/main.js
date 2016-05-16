var $navbar = $('#navbar');

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $navbar.addClass('solidNav');
  }

  if (scroll < 500) {
    $navbar.removeClass('solidNav');
  }
});
