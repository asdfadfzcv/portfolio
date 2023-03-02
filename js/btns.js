$(function () {
  $(".box1 ul li .btn1").hide()
  $(".box1 ul li").hover(
    function () {
      $(this).find(".btn1").delay(500).show(0)
    },
    function () {
      $(this).find(".btn1").delay(500).hide(0)
    }
  )
})
