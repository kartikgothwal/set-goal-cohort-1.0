const input = document.querySelectorAll(".goal");
const inputParent = document.querySelector("#goals");
// input.forEach((input, id) => {
//     input.addEventListener("input", (e) => {
//       const value = e.target.value;
//     e.target.id = id;
//     localStorage.setItem(id, value);
//     console.log("🚀 ~ input.addEventListener ~ value:", value)
//    });
// });

inputParent.addEventListener("input", (e) => {
  const target = e.target;

  console.log("🚀 ~ inputParent.addEventListener ~ target:", e);

  if (target.type == "radio") {
    target.previousElementSibling.classList.add("block");
    target.classList.add("hidden");
    target.nextElementSibling.classList.add("text-compeleted");
  }
});
inputParent.addEventListener("click", (e) => {
  const target = e.target;

  console.log(
    "🚀 ~ inputParent.addEventListener ~ target:",
    target.nextElementSibling
  );
  if (target.tagName === "IMG" && target.classList.contains("hidden")) {
  }
});
