import { timerCounterEl } from "./timer.js" 

export let counter = (hours, minutes, seconds) => {
    if (seconds > 0) {
        seconds--;
        timerCounterEl.innerHTML = `
        <span> 
            ${hours} : ${minutes} : ${seconds}
        </span>
        `;

        setInterval(counter(hours, minutes, seconds), 1000);
        
        if (seconds == 0)
            console.log("end!");
        
        
    }  
}