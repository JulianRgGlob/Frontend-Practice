"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

const openMod = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeMod = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener("click", openMod);
}
btnClose.addEventListener("click", closeMod);
overlay.addEventListener("click", closeMod);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeMod();
  }
});
