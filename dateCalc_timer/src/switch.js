import { dateCalcForm } from "./datecalc.js";
import { timerFormEl } from "./timer.js";

const calcBtnEl = document.getElementById("calcBtn");
const timerBtnEl = document.getElementById("timerBtn");

calcBtnEl.addEventListener("click", handleCalcShow);

function handleCalcShow(event) {
    
    event.preventDefault();
    dateCalcForm.classList.toggle("hidden_block");
    dateCalcForm.classList.toggle("show_block");
}

timerBtnEl.addEventListener("click", handleTimerShow);

function handleTimerShow(event) {
    event.preventDefault();
    timerFormEl.classList.toggle("hidden_block");
    timerFormEl.classList.toggle("show_block");
}