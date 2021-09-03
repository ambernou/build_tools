//import { DateTime } from "./luxon.js";
//import { counter } from "./timer_counter.js";
import { formatError } from "./utils.js";

export const timerFormEl = document.getElementById("timer");
export const timerCounterEl = document.getElementById("timer_counter");
const startBtnEl = document.getElementById("startBtn");
const stopBtnEl = document.getElementById("stopBtn");

timerFormEl.addEventListener("submit", handleStartTimer);

function handleStartTimer(event) {
    event.preventDefault();
    timerCounterEl.innerHTML = "";

    let { hours, minutes, seconds } = event.target.elements;
    hours = hours.value;
    minutes = minutes.value;
    seconds = seconds.value;
    console.log(hours, minutes, seconds);
    
    timerCounterEl.innerHTML = `
    <span> 
        ${hours} : ${minutes} : ${seconds}
    </span>
    `;
    
    //console.log(DateTime.fromISO());
    
    if (seconds == 0) {
        timerCounterEl.innerHTML = formatError("Для запуска таймера надо заполнить хотя бы секунды");
    }
    //counter(hours, minutes, seconds);

    let counter = () => {
        if (seconds > 0) {
            seconds--;
            timerCounterEl.innerHTML = `
            <span> 
                ${hours} : ${minutes} : ${seconds}
            </span>
            `;
            if (seconds == 0)
                console.log("end!");
        }
    }
            
    setInterval(counter, 1000);
}