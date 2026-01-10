const navBtn = document.querySelectorAll(".extension-list .btn");
const toggleBtn = document.querySelectorAll(".toggle-btn");
const allBoxList = document.querySelectorAll(".box-list");
const activeBoxlist = document.querySelectorAll(".box-list.active");
const inactiveBoxlist = document.querySelectorAll(".box-list.inactive");


toggleBtn.forEach((item) =>
    item.addEventListener("click", (e) => item.classList.toggle("active"))
);

navBtn.forEach((button) =>
  button.addEventListener("click", (e) => {
    navBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  })
);


