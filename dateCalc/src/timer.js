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
    startBtnEl.setAttribute('disabled', true);
    timerCounterEl.innerHTML = "";

    let { hours, minutes, seconds } = event.target.elements;
    hours = hours.value;
    minutes = minutes.value;
    seconds = seconds.value;
        
    timerCounterEl.innerHTML = `
    <span> 
        ${hours} : ${minutes} : ${seconds}
    </span>
    `;
    
    if (seconds == 0 && minutes == 0 && hours == 0) {
        timerCounterEl.innerHTML = formatError("Для запуска таймера надо заполнить время");
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
        } else {
            clearInterval(timer);
            let audio = `<audio autoplay src="Sound_22474.mp3"></audio>`;
            timerCounterEl.insertAdjacentHTML("beforeend", audio);
        }
    }

    let timer = setInterval(counter, 1000);
    
    stopBtnEl.addEventListener("click", handleStopTimer);

    function handleStopTimer() {
        startBtnEl.removeAttribute('disabled');
        clearInterval(timer);
    }
}
