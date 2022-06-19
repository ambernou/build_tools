// import { timerCounterEl, timerID } from "./timer.js" 

// export let counter = (hours, minutes, seconds) => {
//     if (seconds > 0) {
//         seconds--;
//         timerCounterEl.innerHTML = `
//         <span> 
//             ${hours} : ${minutes} : ${seconds}
//         </span>
//         `;
//     } else if (minutes > 0) {
//         minutes--;
//         seconds = 59;
        
//         timerCounterEl.innerHTML = `
//         <span> 
//             ${hours} : ${minutes} : ${seconds}
//         </span>
//         `;
//     } else if (hours > 0) {
//         hours--;
//         minutes = 59;
        
//         timerCounterEl.innerHTML = `
//         <span> 
//             ${hours} : ${minutes} : ${seconds}
//         </span>
//         `;
//     } else {
//         clearInterval(timerID);
//         let audio = `<audio autoplay src="Sound_22474.mp3"></audio>`;
//         timerCounterEl.insertAdjacentHTML("beforeend", audio);
//     }
// }