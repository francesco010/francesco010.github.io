const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAllClassActive();
    panel.classList.add("active");
  });
});

const removeAllClassActive = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
