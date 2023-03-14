$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $(".gotop").fadeIn()
    } else {
      $(".gotop").fadeOut()
    }
  })

  $(".gotop").click(function () {
    $("html").animate({ scrollTop: 0 }, 800)
  })
  $(".btn4").click(function () {
    var introBox = $(".intro_box")
    if (!introBox.is(":animated")) {
      introBox.stop().animate({ opacity: "toggle", height: "toggle" }, 800)
    }
  })
})
