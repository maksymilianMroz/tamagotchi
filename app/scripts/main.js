/******************************************** VARIABLES ********************************************/
let timeContainer = document.querySelector('.game-time--content');
let scoreContainer = document.querySelector('.game-points__content');

let feedBtn = document.querySelector('.game-btns__feed');
let cleanBtn = document.querySelector('.game-btns__clean');
let playBtn = document.querySelector('.game-btns__play');

/* CREATE DIV WITH +1 CONTENT FOR ANIMATION OF ACHIVING A POINT */
let pointAddAnimation = document.createElement('div');
let pointAddAnimationTekst = document.createTextNode('+1');
let pointAddAnimationClassAtr = document.createAttribute('class');
pointAddAnimationClassAtr.value = 'points-animate';

/* CREATE DIV WITH -1 CONTENT FOR ANIMATION OF LOSSING A POINT */
let pointLoseAnimation = document.createElement('div');
let pointLoseAnimationTekst = document.createTextNode('-1');
let pointLoseAnimationClassAtr = document.createAttribute('class');
pointLoseAnimationClassAtr.value = 'removing-points-animate';

/* CREATING A RANDOM NUMBER FROM WHICH WE WILL MAKE OUR ACTIONS IN GAME */
let randomNumber = 70;
let secondsToAction = randomNumber * 50;
console.log(secondsToAction);


/***************** FIRST VERSION OF START BUTTON - MAYBE I LEAVE IT IN GAME ******************/
let startBtn = document.querySelector('.startBtn');


/******************************************** MY FUNCTIONS ********************************************/

/* FUNCTION WHICH WILL ADD ONE POINT TO SCORE */
let addPoint = () => {
    // scoreContainer.innerHTML += 1;

    console.log('DODANE');

    pointAddAnimation.appendChild(pointAddAnimationTekst);
    pointAddAnimation.setAttributeNode(pointAddAnimationClassAtr);
}

/* FUNCTION WHICH WILL SUBTRACT ONE POINT FROM SCORE */
let removePoint = () => {
    // scoreContainer.innerHTML -= 1;
    console.log('ODJĘTE');

    pointLoseAnimation.appendChild(pointLoseAnimationTekst);
    pointLoseAnimation.setAttributeNode(pointLoseAnimationClassAtr);
}

/****************** FUNCTION WHICH IS BODY FOR ALL THE PROCESSES OF THE GAME ******************/
let timer = () => {

    /* SETTING STATE OF ALL NEEDS TO FALSE AT THE START OF THE GAME - IF WE CLICK WRONG BUTTON AFTER STARTING THE GAME YOU WILL SUBSTRACT YOUR POINTS */
    let hungry = false;
    let dirty = false;
    let bored = false;


    if (hungry === false) {
        feedBtn.onclick = function () {
            let feedGrasp = document.querySelector('.game-panel__column--feed');
            feedGrasp.appendChild(pointLoseAnimation);
            removePoint();
        }
    }

    if (dirty === false) {
        cleanBtn.onclick = function () {
            let cleanGrasp = document.querySelector('.game-panel__column--clean');
            cleanGrasp.appendChild(pointLoseAnimation);
            removePoint();
        }
    }

    if (bored === false) {
        playBtn.onclick = function () {
            let playGrasp = document.querySelector('.game-panel__column--play');
            playGrasp.appendChild(pointLoseAnimation);
            removePoint();
        }
    }



    /* SET A SCORE TO ZERO - POINT FROM WHERE WE START OUR GAME */
    scoreContainer.innerHTML = 0;

    /* SET TIMER FOR 55 SECONDS - OUR BASE GAME TIME */
    let timeLeft = 5;

    /* LOGIC WHICH STANDS BEFORE THE GAME */
    let gameStuff = setInterval(() => {

        // gameStartState();

        /* RESET STATES OF ALL NEEDS AFTER CHANGE RANDOM NUMBER - IT'S IN SETINTERVAL SO WILL BE DOING THIS AGAIN, AND AGAIN, ETC. */
        if (hungry === true) {
            hungry = false;
            feedBtn.onclick = function () {
                let feedGrasp = document.querySelector('.game-panel__column--feed');
                feedGrasp.appendChild(pointLoseAnimation);
                removePoint();
            }
        }

        if (dirty === true) {
            dirty = false;
            cleanBtn.onclick = function () {
                let cleanGrasp = document.querySelector('.game-panel__column--clean');
                cleanGrasp.appendChild(pointLoseAnimation);
                removePoint();
            }
        }

        if (bored === true) {
            bored = false;
            playBtn.onclick = function () {
                let playGrasp = document.querySelector('.game-panel__column--play');
                playGrasp.appendChild(pointLoseAnimation);
                removePoint();
            }
        }

        /* CHANGE THE RANDOM NUMBER FROM WHICH WE WILL MAKE OUR ACTIONS IN GAME */
        randomNumber = Math.floor(Math.random() * 100 + 1);
        console.log(randomNumber);


        /* IF THERE IS 0> TIME LEFT GAME IS OVER */
        if (timeLeft < 0) {
            clearInterval(gameStuff);
            timeContainer.innerHTML = "GAME OVER";
        } else if (randomNumber > 70) {
            /* IF THE RANDOM NUMBER IS EQUAL TO MORE THAN 70 CALL FOR HUNGRY STATE ACTIONS */
            hungry = true;
            dirty = false;
            bored = false;
            if (hungry === true) {
                console.log('JEŚĆ');
                feedBtn.style.background = "red";
                cleanBtn.style.background = "white";
                playBtn.style.background = "white";

                feedBtn.onclick = function () {
                    let feedGrasp = document.querySelector('.game-panel__column--feed');
                    feedGrasp.appendChild(pointAddAnimation);
                    addPoint();
                    hungry = false;
                    feedBtn.style.background = "white";

                    if (hungry === false) {
                        feedBtn.onclick = function () {
                            let feedGrasp = document.querySelector('.game-panel__column--feed');
                            feedGrasp.appendChild(pointLoseAnimation);
                            removePoint();
                        }
                    }
                }
            }
        } else if (randomNumber <= 70 && randomNumber > 33) {
            /* IF THE RANDOM NUMBER IS EQUAL OR MORE THAN 70 AND NUMBER IS HIGHER THAN 33 - CALL FOR DIRTY STATE ACTIONS */
            hungry = false;
            dirty = true;
            bored = false;
            if (dirty === true) {
                console.log('BRUDNO');
                feedBtn.style.background = "white";
                cleanBtn.style.background = "red";
                playBtn.style.background = "white";

                cleanBtn.onclick = function () {
                    let cleanGrasp = document.querySelector('.game-panel__column--clean');
                    cleanGrasp.appendChild(pointAddAnimation);
                    addPoint();
                    dirty = false;
                    cleanBtn.style.background = "white";

                    if (dirty === false) {
                        cleanBtn.onclick = function () {
                            let cleanGrasp = document.querySelector('.game-panel__column--clean');
                            cleanGrasp.appendChild(pointLoseAnimation);
                            removePoint();
                        }
                    }
                }
            }
        } else if (randomNumber <= 33) {
            /* IF THE RANDOM NUMBER IS EQUAL OR LESS THAN 33 CALL FOR BORED STATE ACTIONS */
            hungry = false;
            dirty = false;
            bored = true;
            if (bored === true) {
                console.log('NUDNO');
                feedBtn.style.background = "white";
                cleanBtn.style.background = "white";
                playBtn.style.background = "red";

                playBtn.onclick = function () {
                    let playGrasp = document.querySelector('.game-panel__column--play');
                    playGrasp.appendChild(pointAddAnimation);
                    addPoint();
                    bored = false;
                    playBtn.style.background = "white";

                    if (bored === false) {
                        playBtn.onclick = function () {
                            let playGrasp = document.querySelector('.game-panel__column--play');
                            playGrasp.appendChild(pointLoseAnimation);
                            removePoint();
                        }
                    }
                }
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
            timeContainer.innerHTML = timeLeft + 1;
        }
        return timeLeft + 1;
    }, 1000);
}

/* STARTING GAME WITH START BUTTON */
startBtn.addEventListener('click', timer)
