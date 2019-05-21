let timeToGo = document.querySelector('.game-time--content');

let timer = () => {
    let timeleft = 5;
    let downloadTimer = setInterval(function () {
        timeToGo.innerHTML = timeleft;
        timeleft -= 1;
        if (timeleft < 0 ) {
            clearInterval(downloadTimer);
            timeToGo.innerHTML = "Finished"
        }
    }, 1000);
}
timer();

















// let startTimer = (duration, display) => {

//     let timer = duration, minutes, seconds;

//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }  
//     }, 1000);
// }

// startTimer(60, timeToGo);
// window.onload = function () {
//     let oneMinute = 10;
//     let display = document.querySelector('.game-time--content');

//     startTimer(oneMinute, display);
// }