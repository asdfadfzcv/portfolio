$(function () {
  // typing

  const text = "포트폴리오"
  const target = document.getElementById("typing_text")

  let index = 0
  function typing() {
    target.innerHTML += text[index]
    index++

    if (index > text.length - 1) {
      clearInterval(timer)
    }
  }

  const timer = setInterval(typing, 200)
})
