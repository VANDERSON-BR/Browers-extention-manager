const navBtn = document.querySelectorAll(".extension-list .btn");
const toggleBtn = document.querySelectorAll(".toggle-btn");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");

themeToggle.addEventListener("click", () => {
  if (themeToggle.src.includes("icon-sun.svg")) {
    themeToggle.src = "images/icon-moon.svg";
  } else {
    themeToggle.src = "images/icon-sun.svg";
  }
  body.classList.toggle("theme-light");
});

toggleBtn.forEach((item) =>
  item.addEventListener("click", (e) => item.classList.toggle("active"))
);

navBtn.forEach((button) =>
  button.addEventListener("click", (e) => {
    navBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  })
);
