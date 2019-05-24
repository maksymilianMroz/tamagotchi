/******************************************** VARIABLES ********************************************/
let timeContainer = document.querySelector('.game-time--content');
let scoreContainer = document.querySelector('.game-points__content');

let feedBtn = document.querySelector('.game-btns__feed');
let cleanBtn = document.querySelector('.game-btns__clean');
let playBtn = document.querySelector('.game-btns__play');

let addPointsCounter = 0;
let subPointsCounter = 0;

/* VARIABLES FOR GAME ANIMATIONS */
playImgAnimation = document.querySelector('.btn-container-img-play');
feedImgAnimation = document.querySelector('.btn-container-img-feed');
cleanImgAnimation = document.querySelector('.btn-container-img-clean');

feedNowInfoBox = document.querySelector('.game-command-animate-feed');
cleanNowInfoBox = document.querySelector('.game-command-animate-clean');
playNowInfoBox = document.querySelector('.game-command-animate-play');

/* CREATE DIV WITH +1 CONTENT FOR ANIMATION OF ACHIVING A POINT */
let pointAddAnimation = document.createElement('div');
let pointAddAnimationTekst = document.createTextNode('+1');
let pointAddAnimationClassAtr = document.createAttribute('class');
pointAddAnimationClassAtr.value = 'points-animate';
pointAddAnimation.setAttributeNode(pointAddAnimationClassAtr);

/* CREATE DIV WITH -1 CONTENT FOR ANIMATION OF LOSSING A POINT */
let pointLoseAnimation = document.createElement('div');
let pointLoseAnimationTekst = document.createTextNode('-1');
let pointLoseAnimationClassAtr = document.createAttribute('class');
pointLoseAnimationClassAtr.value = 'removing-points-animate';
pointLoseAnimation.setAttributeNode(pointLoseAnimationClassAtr);

/* CREATING A RANDOM NUMBER FROM WHICH WE WILL MAKE OUR ACTIONS IN GAME */
let randomNumber = 11;
let secondsToAction = randomNumber * 50;
// console.log(secondsToAction);

/* SET TIMER FOR 55 SECONDS - OUR BASE GAME TIME */
let timeLeft = 55;


/***************** START BUTTON AND NAVIGATION CONTAINER VARIABLES ******************/
let startBtn = document.querySelector('.startBtn');
let gameNav = document.querySelector('.game-navigation');
let yourLastScore = document.querySelector('.last-game-score');
let bestScore = document.querySelector('.your-top-score');


/* ARRAY IN WHICH WILL SAVE YOUR SCORES */
let yourTopScores = [];



/******************************************** MY FUNCTIONS ********************************************/

/* FUNCTION WHICH WILL ADD ONE POINT TO SCORE */
let addPoint = () => {
    scoreContainer.innerHTML++;
    // console.log('DODANE');


    /* AFTER YOU GAIN TEN POINTS (EVEN IF THE GAINING WAS INTERRUPTED BY THE LOSS OF A POINT) THERE WILL BE TWO SECONDS ADD TO YOUR TIMER */
    let addTime = () => {
        addPointsCounter++;
        if (addPointsCounter === 10) {
            timeLeft = timeLeft + 5;
            addPointsCounter = 0;
            // console.log('add time działa')
        }
    }
    addTime();

    /* SAME THINK AS IN THE CONTAINER WITH REMOVE POINTS - MAY HAPPEN THAT YOU WILL ADD MORE THAN ONE POINT IN THE DIFFERENT COLUMNS, AND WE WANT TO CREATE TWO DIVS */
    pointAddAnimation = document.createElement('div');
    pointAddAnimationTekst = document.createTextNode('+1');
    pointAddAnimationClassAtr = document.createAttribute('class');
    pointAddAnimationClassAtr.value = 'points-animate';
    pointAddAnimation.setAttributeNode(pointAddAnimationClassAtr);
    pointAddAnimation.appendChild(pointAddAnimationTekst);

}

/* FUNCTION WHICH WILL SUBTRACT ONE POINT FROM SCORE */
let removePoint = () => {
    scoreContainer.innerHTML--;
    // console.log('ODJĘTE');


    /* AFTER YOU LOSS TEN POINTS (EVEN IF THE LOSSING WAS INTERRUPTED BY THE GAIN OF A POINT) THERE WILL BE EIGHT SECONDS SUBSTRACT FROM YOUR TIMER */
    let subTime = () => {
        subPointsCounter++
        if (subPointsCounter === 4) {
            timeLeft = timeLeft - 8;
            subPointsCounter = 0;
            // console.log('sub time działa')
        }
    }
    subTime();

    /* WE WANT TO GENERATE NEW DIV EACH TIME WE ARE CLICKING ON GAME BUTTON - TO REMOVE POINTS WITH NEW DIVS */
    pointLoseAnimation = document.createElement('div');
    pointLoseAnimationTekst = document.createTextNode('-1');
    pointLoseAnimationClassAtr = document.createAttribute('class');
    pointLoseAnimationClassAtr.value = 'removing-points-animate';
    pointLoseAnimation.setAttributeNode(pointLoseAnimationClassAtr);
    pointLoseAnimation.appendChild(pointLoseAnimationTekst);

}

/****************** FUNCTION WHICH IS BODY FOR ALL THE PROCESSES OF THE GAME ******************/
let timer = () => {
    if (timeLeft < 0) {
        timeLeft = 55;
    }
    /* STUFF WHICH WILL HAPPEN JUST AFTER CLICKING START THE GAME */
    gameNav.classList.add("hide-nav");


    /* SETTING STATE OF ALL NEEDS TO FALSE AT THE START OF THE GAME - IF WE CLICK WRONG BUTTON AFTER STARTING THE GAME YOU WILL SUBSTRACT YOUR POINTS - EVEN IF THERE WAS NO CALL FOR EATING< CLEANING OR PLAYING */
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
        // console.log(randomNumber);


        /* IF THERE IS 0> TIME LEFT GAME IS OVER */
        if (timeLeft < 0) {
            clearInterval(gameStuff);
            timeContainer.innerHTML = "GAME OVER";

            /* STUFF WHICH WILL HAPPEN AFTER GAME OVER */
            gameNav.classList.remove("hide-nav");
            yourLastScore.innerHTML = scoreContainer.innerHTML;
            yourTopScores.push(yourLastScore.innerHTML);
            yourTopScores.sort((a, b) => b - a);
            bestScore.innerHTML = yourTopScores[0];
            console.log(yourTopScores);

            /* FUNCTION DELETES ALL CREATED DIV - WITH POINTS - WHEN GAME IS DONE */
            function deleteChild() { 
                let containerForElementsToDelete = document.querySelectorAll(".delete-after-game"); 
                console.log(containerForElementsToDelete);
                
                
                let child = containerForElementsToDelete.childNodes;  
                while (child) { 
                    containerForElementsToDelete.removeChild(child); 
                    child = containerForElementsToDelete.childNodes; 
                } 
            } 
            deleteChild();


        } else if (randomNumber > 70) {
            /* IF THE RANDOM NUMBER IS EQUAL TO MORE THAN 70 CALL FOR HUNGRY STATE ACTIONS */
            hungry = true;
            dirty = false;
            bored = false;
            if (hungry === true) {
                // console.log('JEŚĆ');

                feedImgAnimation.classList.remove('btn-img-hide');
                cleanImgAnimation.classList.add('btn-img-hide');
                playImgAnimation.classList.add('btn-img-hide');

                feedNowInfoBox.classList.add('game-command-animate-feed-effect');
                cleanNowInfoBox.classList.remove('game-command-animate-clean-effect');
                playNowInfoBox.classList.remove('game-command-animate-play-effect');

                feedBtn.onclick = function () {
                    let feedGrasp = document.querySelector('.game-panel__column--feed');
                    feedGrasp.appendChild(pointAddAnimation);
                    addPoint();
                    hungry = false;
                    feedImgAnimation.classList.add('btn-img-hide');
                    feedNowInfoBox.classList.remove('game-command-animate-feed-effect');

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
                // console.log('BRUDNO');
                feedImgAnimation.classList.add('btn-img-hide');
                cleanImgAnimation.classList.remove('btn-img-hide');
                playImgAnimation.classList.add('btn-img-hide');

                feedNowInfoBox.classList.remove('game-command-animate-feed-effect');
                cleanNowInfoBox.classList.add('game-command-animate-clean-effect');
                playNowInfoBox.classList.remove('game-command-animate-play-effect');

                cleanBtn.onclick = function () {
                    let cleanGrasp = document.querySelector('.game-panel__column--clean');
                    cleanGrasp.appendChild(pointAddAnimation);
                    addPoint();
                    dirty = false;
                    cleanImgAnimation.classList.add('btn-img-hide');
                    cleanNowInfoBox.classList.remove('game-command-animate-clean-effect');

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
                // console.log('NUDNO');
                feedImgAnimation.classList.add('btn-img-hide');
                cleanImgAnimation.classList.add('btn-img-hide');
                playImgAnimation.classList.remove('btn-img-hide');

                feedNowInfoBox.classList.remove('game-command-animate-feed-effect');
                cleanNowInfoBox.classList.remove('game-command-animate-clean-effect');
                playNowInfoBox.classList.add('game-command-animate-play-effect');

                playBtn.onclick = function () {
                    let playGrasp = document.querySelector('.game-panel__column--play');
                    playGrasp.appendChild(pointAddAnimation);
                    addPoint();
                    bored = false;
                    playImgAnimation.classList.add('btn-img-hide');
                    playNowInfoBox.classList.remove('game-command-animate-play-effect');

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
    // timeContainer.innerHTML = "READY? GO!"

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
        return timeLeft;
    }, 1000);
}

/* STARTING GAME WITH START BUTTON */
startBtn.addEventListener('click', timer)