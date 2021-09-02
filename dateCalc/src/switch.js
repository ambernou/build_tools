import { dateCalcForm } from "./datecalc.js";

const calcBtnEl = document.getElementById("calcBtn");
const timerBtnEl = document.getElementById("timerBtn");

const timerFormEl = document.getElementById("timer");

calcBtnEl.addEventListener("click", handleCalcShow);

function handleCalcShow(event) {
    
    event.preventDefault();
    console.log("123");
    dateCalcForm.classList.toggle("hidden_block");
    dateCalcForm.classList.toggle("show_block");
}

timerBtnEl.addEventListener("click", handleTimerShow);

function handleTimerShow(event) {
    event.preventDefault();
    timerFormEl.classList.toggle("hidden_block");
    timerFormEl.classList.toggle("show_block");
}