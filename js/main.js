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

function scrollToAnchor(aid){
  var aTag = $("a[name='"+ aid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top - 100},'slow');
};

$("li > a").click(function(e) {
  e.preventDefault();
  var href = $(this).attr('href').replace('#', '')
  scrollToAnchor(href);
});
