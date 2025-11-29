"use strict";

const clickableEl = document.querySelectorAll(".section--click");
const showAnswer = document.querySelectorAll(".section-Ans");
const plusIconEl = document.querySelectorAll(".plus-icon-img");

const plusIcon = "assets/images/icon-plus.svg";
const minusIcon = "assets/images/icon-minus.svg";

console.log(showAnswer);
console.log(clickableEl);
console.log(plusIconEl);

for (let i = 0; i < clickableEl.length; i++) {
  clickableEl[i].addEventListener("click", function () {
    showAnswer[i].classList.toggle("hidden");

    if (showAnswer[i].classList.contains("hidden")) {
      plusIconEl[i].src = plusIcon; // FAQ hidden → show plus icon
    } else {
      plusIconEl[i].src = minusIcon; // FAQ shown → show minus icon
    }
  });
}
