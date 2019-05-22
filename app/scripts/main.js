/******************************************** VARIABLES ********************************************/
let timeContainer = document.querySelector('.game-time--content');
let scoreContainer = document.querySelector('.game-points__content');

let feedBtn = document.querySelector('.game-btns__feed');
let cleanBtn = document.querySelector('.game-btns__clean');
let playBtn = document.querySelector('.game-btns__play');

let hungry = false;
let dirty = false;
let bored = false;

/* CREATING A RANDOM NUMBER FROM WHICH WE WILL MAKE OUR ACTIONS IN GAME */
let randomNumber = 70;
let secondsToAction = randomNumber * 20;
console.log(secondsToAction);


/***************** FIRST VERSION OF START BUTTON - MAYBE I LEAVE IT IN GAME ******************/
let startBtn = document.querySelector('.startBtn');


/******************************************** MY FUNCTIONS ********************************************/

/* FUNCTION WHICH WILL ADD ONE POINT TO SCORE */
let addPoint = () => {
    scoreContainer.innerHTML += 1;
    console.log('DODANE');
}

/* FUNCTION WHICH WILL SUBTRACT ONE POINT FROM SCORE */
let removePoint = () => {
    scoreContainer.innerHTML -= 1;
    console.log('ODJĘTE');
}





let timer = () => {

    /* SET A SCORE TO ZERO - POINT FROM WHERE WE START OUR GAME */
    scoreContainer.innerHTML = 0;

    /* SET TIMER FOR 55 SECONDS - OUR BASE GAME TIME */
    let timeLeft = 55;

    let gameStuff = setInterval(() => {
        /****************** FUNCTION WHICH START TIMER - BODY FOR ALL THE PROCESS OF GAME ******************/
        randomNumber = Math.floor(Math.random() * 100 + 1);
        console.log(randomNumber);

        /* IF THERE IS 0> TIME LEFT GAME IS OVER */
        if (timeLeft < 0) {
            clearInterval(gameStuff);
            timeContainer.innerHTML = "GAME OVER";
        } else if (randomNumber > 70) {
            /* IF THE RANDOM NUMBER IS EQUAL TO MORE THAN 70 CALL FOR HUNGRY FUNCTION */
            hungry = true;
            dirty = false;
            bored = false;
            if (hungry === true) {
                console.log('JEŚĆ');
                feedBtn.style.background = "red";
                cleanBtn.style.background = "white";
                playBtn.style.background = "white";
            }
        } else if (randomNumber <= 70 && randomNumber > 33) {
            hungry = false;
            dirty = true;
            bored = false;
            if (dirty === true) {
                console.log('BRUDNO');
                feedBtn.style.background = "white";
                cleanBtn.style.background = "red";
                playBtn.style.background = "white";
            }
        } else if (randomNumber <= 33) {
            hungry = false;
            dirty = false;
            bored = true;
            if (bored === true) {
                console.log('NUDNO');
                feedBtn.style.background = "white";
                cleanBtn.style.background = "white";
                playBtn.style.background = "red";
            }
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