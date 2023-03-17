$(function () {
  // mobile-menu

  $(".bars").click(function () {
    $(".gnb").toggleClass("active")
    $(this).find("i").toggleClass("xi-close")
  })

  // gotop

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $(".gotop").fadeIn()
    } else {
      $(".gotop").fadeOut()
    }
  })

  $(".gotop").click(function () {
    $("html").animate({ scrollTop: 0 }, 600)
  })
})
