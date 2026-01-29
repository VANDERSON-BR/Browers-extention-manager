const navBtn = document.querySelectorAll(".extension-list .btn");
const toggleBtn = document.querySelectorAll(".toggle-btn");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");
const boxList = document.querySelectorAll(".box-list");
const boxMessage = document.querySelector(".box-message");

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


function showMessage(message){
  boxMessage.classList.remove("hidden");
  boxMessage.textContent = message;
}

function verifyAllTogglesStates(filterType){
  let activeCount = 0;
  let activeTotal = toggleBtn.length;

  toggleBtn.forEach(toggleBtn => {
    if(toggleBtn.classList.contains("active")){
      activeCount++;
    }
  })

  boxMessage.classList.add("hidden");
  
  if(filterType === "Active" && activeCount === 0){
    showMessage("Todos as extensões estão inativas");
  } else if (filterType === "Inactive" && activeCount === activeTotal){
    showMessage("Todos as extensões estão Ativas")

  }
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

   })

  verifyAllTogglesStates(filterType);

};

navBtn.forEach(button => button.addEventListener("click", (e) => {
  navBtn.forEach(button => button.classList.remove("active"));
  button.classList.add("active");

  let filterType = button.textContent.trim();
  filterExtensions(filterType);
}));





