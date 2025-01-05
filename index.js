const GoalsContainer = document.querySelector("#goals");
const progress = document.querySelector("#progress");
const ErrorMessagePara = document.querySelector(".error-message");
const allInputs = document.querySelectorAll(".input-text");

window.addEventListener("load", (e) => {
  if (localStorage.length == 3) {
    allInputs.forEach((item) => {
      item.value = localStorage.getItem(item.getAttribute("task"));
      item.previousElementSibling.classList.add("hidden");
      item.previousElementSibling.previousElementSibling.classList.remove(
        "hidden"
      );
      item.previousElementSibling.previousElementSibling.classList.add("block");
      item.classList.add("text-compeleted");
      progress.value = 100;
      // item.previousElementSibling.classList.add("block");
      // item.nextElementSibling.classList.add("hidden");
    });
  }
});
function checkInputEmpty() {
  const InputArray = Array.from(allInputs);
  return InputArray.every((item) => {
    return item.value.length > 0;
  });
}
GoalsContainer.addEventListener("click", (e) => {
  if (e.target.type == "radio") {
    if (!checkInputEmpty()) {
      e.target.checked = false;
      ErrorMessagePara.classList.remove("hidden");
      ErrorMessagePara.classList.add("block");
    } else {
      const value = +progress.getAttribute("value");
      let newValue = value + 33.33;
      if (newValue > 100) newValue = 100;
      progress.setAttribute("value", newValue);
      progress.textContent = newValue;
      e.target.nextElementSibling.setAttribute("readonly", true);
      ErrorMessagePara.classList.add("hidden");
      e.target.classList.add("hidden");
      e.target.previousElementSibling.classList.remove("hidden");
      e.target.previousElementSibling.classList.add("block");
      e.target.nextElementSibling.classList.add("text-compeleted");
      localStorage.setItem(
        e.target.getAttribute("task"),
        e.target.nextElementSibling.value
      );
    }
  } else if (e.target.type == "image") {
  } else if (e.target.nodeName == "IMG") {
    let newValue = progress.value - 33.33;
    if (newValue < 0) newValue = 0;
    progress.value = newValue;
    progress.textContent = newValue;
    e.target.classList.add("hidden");
    e.target.classList.remove("block");
    e.target.nextElementSibling.classList.add("block");
    e.target.nextElementSibling.classList.remove("hidden");
    e.target.nextElementSibling.nextElementSibling.classList.remove(
      "text-compeleted"
    );
    e.target.nextElementSibling.nextElementSibling.removeAttribute("readonly");
    e.target.nextElementSibling.checked = false;
    localStorage.removeItem(e.target.nextElementSibling.getAttribute("task"));
  }
});
