$(function () {
  // header fixed

  const header = document.querySelector(".header")
  window.addEventListener("scroll", () => {
    header.style.position = "fixed"
    header.style.top = "0"
    header.style.left = "0"
    header.style.width = "100%"
  })
})
