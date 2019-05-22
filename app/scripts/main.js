/******************************************** VARIABLES ********************************************/
let timeContainer = document.querySelector('.game-time--content');
let scoreContainer = document.querySelector('.game-points__content');

let feedBtn = document.querySelector('.game-btns__feed');
let cleanBtn = document.querySelector('.game-btns__clean');
let playBtn = document.querySelector('.game-btns__play');

/* CREATING A RANDOM NUMBER FROM WHICH WE WILL MAKE OUR ACTIONS IN GAME */
let randomNumber = 70;
let secondsToAction = randomNumber * 20;
console.log(secondsToAction);


/***************** FIRST VERSION OF START BUTTON - MAYBE I LEAVE IT IN GAME ******************/
let startBtn = document.querySelector('.startBtn');


/******************************************** MY FUNCTIONS ********************************************/

let addPoint = () => {
    scoreContainer.innerHTML += 1;
    console.log('DODANE');
}

let removePoint = () => {
    scoreContainer.innerHTML -= 1;
    /* FUNCTION WHICH WILL SUBTRACT ONE POINT FROM SCORE */
    console.log('ODJĘTE');
}

if (feedBtn.style.background === "white") {
    feedBtn.addEventListener('click', function() {
        removePoint();
        feedBtn.style.background = "white";
    });
}

let hungry = () => {
    /* FUNCTION WHICH WILL ADD POINTS IF BTNS CLICKED ON RIGHT TIME */
    console.log('głodny!')

    feedBtn.style.background = "red";

    let hungryTime = 2;

    hungryTime -= 1;
    if (hungryTime <= 0) {
        clearInterval(setTimer);
        console.log('po jedzonku');
    } else if (hungryTime > 0) {
        feedBtn.addEventListener('click', function () {
            addPoint();
            feedBtn.style.background = "white";
        });
    }
}

   




let timer = () => {

    /* SET A SCORE TO ZERO - POINT FROM WHERE WE START OUR GAME */
    scoreContainer.innerHTML = 0

    /* SET TIMER FOR 55 SECONDS - OUR BASE GAME TIME */
    let timeLeft = 5;

    let gameStuff = setInterval(() => {
        /****************** FUNCTION WHICH START TIMER - BODY FOR ALL THE PROCESS OF GAME ******************/
        randomNumber = Math.floor(Math.random() * 100 + 1);
        console.log(randomNumber);

        /* IF THERE IS 0> TIME LEFT GAME IS OVER */
        if (timeLeft < 0) {
            clearInterval(gameStuff);
            timeContainer.innerHTML = "GAME OVER";
        } else if (randomNumber > 40) {
            /* IF THE RANDOM NUMBER IS EQUAL TO MORE THAN 40 CALL FOR HUNGRY FUNCTION */
            hungry();
        }

        return timeLeft;
    }, secondsToAction);




    /* AFTER CLICK START BUTTON SET A TEXT IN TIME CONTAINER TO "READY? GO!" FOR ONE SECOND UNTIL SETTIMER STARTS */
    timeContainer.innerHTML = "READY? GO!"

    /* SET A TIME */
    let setTimer = setInterval(() => {

        /* SET A TIMERCONTAINER TO THOSE 55 SECONDS WHICH WE DECLARED BEFORE IN TIMELEFT VARIABLE */
        timeContainer.innerHTML = timeLeft;

        /* SUBTRACT ONE FROM TIME LEFT EVERY SECOND */
        timeLeft -= 1;
        if (timeLeft < 0) {
            clearInterval(setTimer);
            timeContainer.innerHTML = timeLeft;
        }
        return timeLeft;
    }, 1000);
}

/* STARTING GAME WITH START BUTTON */
startBtn.addEventListener('click', timer)