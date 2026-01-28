const navBtn = document.querySelectorAll(".extension-list .btn");
const toggleBtn = document.querySelectorAll(".toggle-btn");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");
const boxList = document.querySelectorAll(".box-list");

themeToggle.addEventListener("click", () => {
  if (themeToggle.src.includes("icon-sun.svg")) {
    themeToggle.src = "images/icon-moon.svg";
  } else {
    themeToggle.src = "images/icon-sun.svg";
  }
  body.classList.toggle("theme-light");
});

toggleBtn.forEach((item) =>
  item.addEventListener("click", (e) => item.classList.toggle("active")),
);

function verifyBoxNull(isActive){
  let list = []
  list = isActive
  console.log(list);


}


function filterExtensions(filterType){
   boxList.forEach(box => {
    const toggleBtn = box.querySelector(".toggle-btn");
    const isActive = toggleBtn.classList.contains("active");
    let shouldShow = true;

    if(filterType === "All"){
      shouldShow = true;
    } else if(filterType === "Active"){
      shouldShow = isActive;
    } else {
      shouldShow = !isActive;
    }

    if(shouldShow){
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }

    verifyBoxNull(shouldShow)
   })
}

navBtn.forEach(button => button.addEventListener("click", (e) => {
  navBtn.forEach(button => button.classList.remove("active"));
  button.classList.add("active");

  let filterType = button.textContent.trim();
  filterExtensions(filterType);
}));





