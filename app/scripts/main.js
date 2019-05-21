let timeToGo = document.querySelector('.game-time--content');
let startBtn = document.querySelector('.startBtn');
let pointsContainer = document.querySelector('.game-points__content');
let feedBtn = document.querySelector('.game-btns__feed');
let cleanBtn = document.querySelector('.game-btns__clean');
let playBtn = document.querySelector('.game-btns__play');


let losowaLiczba = Math.floor(Math.random() * 100 + 1)



let addPoint = () => {
    pointsContainer.innerHTML++;
    return pointsContainer;

}

let pointsLost = () => {
    pointsContainer.innerHTML--;
    return pointsContainer;
}


let timer = () => {
    pointsContainer.innerHTML = 0
    console.log(losowaLiczba);

    let timeleft = 55;
    if (timeleft >= 0) {

        if (losowaLiczba > 80) {
            console.log('nakarm');
            feedBtn.style.background = "red";
            nakarm();
        } else if (losowaLiczba <= 80 && losowaLiczba > 20) {
            console.log('posprzataj');
            cleanBtn.style.background = "red";
            posprzataj();
        } else if (losowaLiczba <= 20) {
            console.log('graj')
            playBtn.style.background = "red";
            graj();
        }

    }  

    let nakarm = () => {


        if (losowaLiczba > 80) {
            feedBtn.style.background = "red";
        } else {
            feedBtn.style.background = "white";
        }

        if (feedBtn.style.background == "red") {
            feedBtn.addEventListener('click', function () {
                feedBtn.style.background = "white";
                addPoint();
                losowaLiczba = Math.floor(Math.random() * 100 + 1)
                console.log(losowaLiczba);
                nakarm();
            })
        } else if (feedBtn.style.background == "white") {
            feedBtn.addEventListener('click', function () {
                pointsLost();
                console.log('stracone');
                losowaLiczba = Math.floor(Math.random() * 100 + 1)
            })
        }
        return losowaLiczba;
    }

    let posprzataj = () => {


        if (losowaLiczba <= 80 && losowaLiczba > 20) {
            cleanBtn.style.background = "red";
        } else {
            cleanBtn.style.background = "white";
        }

        if (cleanBtn.style.background == "red") {
            cleanBtn.addEventListener('click', function () {
                cleanBtn.style.background = "white";
                addPoint();
                losowaLiczba = Math.floor(Math.random() * 100 + 1)
                console.log(losowaLiczba);
                nakarm();
            })
        } else if (cleanBtn.style.background == "white") {
            cleanBtn.addEventListener('click', function () {
                pointsLost();
                console.log('stracone');
                losowaLiczba = Math.floor(Math.random() * 100 + 1)
            })
        }
        return losowaLiczba;
    }

    let graj = () => {


        if (losowaLiczba <= 20) {
            playBtn.style.background = "red";
        } else {
            playBtn.style.background = "white";
        }

        if (playBtn.style.background == "red") {
            playBtn.addEventListener('click', function () {
                playBtn.style.background = "white";
                addPoint();
                losowaLiczba = Math.floor(Math.random() * 100 + 1)
                console.log(losowaLiczba);
                nakarm();
            })
        } else if (playBtn.style.background == "white") {
            playBtn.addEventListener('click', function () {
                pointsLost();
                console.log('stracone');
                losowaLiczba = Math.floor(Math.random() * 100 + 1)
            })
        }
        return losowaLiczba;
    }

  

    let downloadTimer = setInterval(function () {
        timeToGo.innerHTML = timeleft;

        timeleft -= 1;
        if (timeleft < 0) {
            clearInterval(downloadTimer);
            timeToGo.innerHTML = "Finished"
        }

    }, 1000);
}
// timer();

let timeleft = 55;
    if (timeleft >= 0) {

        if (losowaLiczba > 80) {
            console.log('nakarm');
            feedBtn.style.background = "red";
            nakarm();
        } else if (losowaLiczba <= 80 && losowaLiczba > 20) {
            console.log('posprzataj');
            cleanBtn.style.background = "red";
            posprzataj();
        } else if (losowaLiczba <= 20) {
            console.log('graj')
            playBtn.style.background = "red";
            graj();
        }

    }  

startBtn.addEventListener('click', timer)

















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