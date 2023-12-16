const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav.forEach((navItem) => navItem.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((navItem) => navItem.classList.remove("visible"));
});
