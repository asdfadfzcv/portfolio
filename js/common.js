$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $(".gotop").fadeIn()
    } else {
      $(".gotop").fadeOut()
    }
  })

  $(".gotop").click(function () {
    $("html").animate({ scrollTop: 0 }, 300)
  })
})
