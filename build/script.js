"use strict";
const sideMenu = document.querySelector("#sideMenu");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

// Mobile Side Menu
openMenu.addEventListener("click", function () {
  sideMenu.style.width = "70%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.body.style.transition = "0.5s";
  sideMenu.style.transition = "0.5s";
});

closeMenu.addEventListener("click", function () {
  sideMenu.style.width = "0px";
  document.body.style.backgroundColor = "white";
});
