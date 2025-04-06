// let counterText = document.getElementById("countermeter");
// let startBtn = document.getElementById("startbtn");
// let stopBtn = document.getElementById("stopbtn");
// let resetBtn = document.getElementById("resetbtn");
// let shortBtn = document.getElementById("shortbtn");
// let longBtn = document.getElementById("longbtn");
// let audioEl = document.getElementById("audio");

// let timerId = null;
// let count = 25 * 60;


// function formatTime(seconds) {
//     let min = Math.floor(seconds / 60);
//     let sec = seconds % 60;
//     return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
// }


// counterText.innerText = formatTime(count);


// startBtn.addEventListener('click', () => {
//     if (timerId === null) {
//         timerId = setInterval(() => {
//             if (count > 0) {
//                 count -= 1;
//                 counterText.innerText = formatTime(count);
//             } else {
//                 clearInterval(timerId);
//                 timerId = null;
//                 alert("Time's up!");
//             }
//         }, 1000);
//     }
// });


// stopBtn.addEventListener('click', () => {
//     clearInterval(timerId);
//     timerId = null;
// });


// resetBtn.addEventListener('click', () => {
//     clearInterval(timerId);
//     timerId = null;
//     count = 25 * 60;
//     counterText.innerText = formatTime(count);
// });


// shortBtn.addEventListener('click', () => {
//     clearInterval(timerId);
//     timerId = null;
//     count = 5 * 60;
//     counterText.innerText = formatTime(count);
// });


// longBtn.addEventListener('click', () => {
//     clearInterval(timerId);
//     timerId = null;
//     count = 15 * 60;
//     counterText.innerText = formatTime(count);
// });

let counterText = document.getElementById("countermeter");
let startBtn = document.getElementById("startbtn");
let stopBtn = document.getElementById("stopbtn");
let resetBtn = document.getElementById("resetbtn");
let shortBtn = document.getElementById("shortbtn");
let longBtn = document.getElementById("longbtn");
let audio = document.getElementById("audio");

let timerId = null;
let count = 1 * 60; 


function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}


counterText.innerText = formatTime(count);


startBtn.addEventListener('click', () => {
    if (timerId === null) {
        timerId = setInterval(() => {
            if (count > 0) {
                count -= 1;
                counterText.innerText = formatTime(count);
            } else {
                clearInterval(timerId);
                timerId = null;
                audio.play(); 
                alert("Time's up!");
            }
        }, 1000);
    }
});


stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
});


resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    count = 1 * 60;
    counterText.innerText = formatTime(count);
});


shortBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    count = 5 * 60;
    counterText.innerText = formatTime(count);
});


longBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    count = 15 * 60;
    counterText.innerText = formatTime(count);
});
