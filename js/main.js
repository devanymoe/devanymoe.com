var $navbar = $('#navbar');

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 650) {
    $navbar.addClass('solidNav');
  }

  if (scroll < 650) {
    $navbar.removeClass('solidNav');
  }
});
