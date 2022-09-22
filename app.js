const container = document.querySelector("#container");
const pane = document.querySelectorAll(".pane");

container.addEventListener("click", (e) => {
  if (e.target.className === "remove-button") {
    e.target.parentElement.style.display = "none";
  }

  console.log(e);
});
