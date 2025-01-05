const GoalsContainer = document.querySelector("#goals");
const ErrorMessagePara = document.querySelector(".error-message");
const allInputs = document.querySelectorAll(".input-text");

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
      ErrorMessagePara.classList.add("hidden");
      e.target.classList.add("hidden");
      e.target.previousElementSibling.classList.remove("hidden");
      e.target.previousElementSibling.classList.add("block");
      e.target.nextElementSibling.classList.add("text-compeleted");
    }
  }
  else if(e.target.type == "image"){

  }
  else if(e.target.nodeName=="IMG"){
    e.target.classList.add("hidden");
    e.target.classList.remove("block");
    e.target.nextElementSibling.classList.add("block");
    e.target.nextElementSibling.classList.remove("hidden");
    e.target.nextElementSibling.nextElementSibling.classList.remove("text-compeleted");
    e.target.nextElementSibling.checked =false;
  }

});
