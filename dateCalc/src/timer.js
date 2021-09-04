//import { DateTime } from "./luxon.js";
//import { counter } from "./timer_counter.js";
import { formatError } from "./utils.js";
//import { Howl, Howler } from "../../../howler.js-master/dist/howler.js";

export const timerFormEl = document.getElementById("timer");
export const timerCounterEl = document.getElementById("timer_counter");
const startBtnEl = document.getElementById("startBtn");
const stopBtnEl = document.getElementById("stopBtn");

timerFormEl.addEventListener("submit", handleStartTimer);

function handleStartTimer(event) {
    event.preventDefault();
    startBtnEl.setAttribute('disabled', true);
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
    
    if (seconds == 0) {
        timerCounterEl.innerHTML = formatError("Для запуска таймера надо заполнить хотя бы секунды");
        startBtnEl.removeAttribute('disabled');
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
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
            
            timerCounterEl.innerHTML = `
            <span> 
                ${hours} : ${minutes} : ${seconds}
            </span>
            `;
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            
            timerCounterEl.innerHTML = `
            <span> 
                ${hours} : ${minutes} : ${seconds}
            </span>
            `;
        }
        // } else if (seconds == 0 && minutes == 0) {
        //      console.log("end!");
        // }
        
    }

    setInterval(counter, 1000);
}