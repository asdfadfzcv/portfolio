$(function () {
  const modalTriggers = document.querySelectorAll(".modal_trigger")
  const modals = document.querySelectorAll(".modal")

  modalTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      modals[index].classList.add("active")
    })
  })

  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target.closest(".modal_close")) {
        modal.classList.remove("active")
      }
    })
  })
})
