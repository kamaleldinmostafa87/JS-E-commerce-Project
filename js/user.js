let navInfo = document.querySelector(".nav-info");
let userInfo = document.querySelector(".user-info");
let user = document.querySelector(".user");
let logoutBtn = document.querySelector(".logout");

if (localStorage.getItem("username") != null) {
  navInfo.style.display = "none";
  userInfo.style.display = "flex";
  user.innerHTML = localStorage.getItem("username");
}

logoutBtn.addEventListener("click", () => {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});