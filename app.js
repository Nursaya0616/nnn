const btn = document.querySelector(".toggle-btn");


btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    
  } else {
    btn.classList.remove("slide");
    
  }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
