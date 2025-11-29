"use strict";

const clickableEl = document.querySelectorAll(".section--click");
const showAnswer = document.querySelectorAll(".section-Ans");
const plusIconEl = document.querySelectorAll(".plus-icon-img");

const plusIcon = "assets/images/icon-plus.svg";
const minusIcon = "assets/images/icon-minus.svg";

const toggleFAQ = function (i) {
  showAnswer[i].classList.toggle("hidden");
  plusIconEl[i].src = showAnswer[i].classList.contains("hidden")
    ? "assets/images/icon-plus.svg"
    : "assets/images/icon-minus.svg";
};

clickableEl.forEach((el, i) => {
  // Navigation using mouse
  el.addEventListener("click", function () {
    toggleFAQ(i);
  });

  // Keyboard Navigation
  el.addEventListener("keydown", function (event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault(); // prevent scrolling for Space

      toggleFAQ(i);
    }
  });
});
