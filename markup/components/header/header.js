$(document).ready(function() {
  $(".header-menu__item").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    $(this).addClass('_active').siblings().removeClass('_active');
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination - 50
    }, 800);
    return false;
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('_active');
    } else {
      $('.header').removeClass('_active');
    }
  });

});