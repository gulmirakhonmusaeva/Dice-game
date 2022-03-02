/////// =======    SELECTORS      =========//////
const btnNew = document.querySelector(`.btn--new`),
  btnRoll = document.querySelector(`.btn--roll`),
  btnHold = document.querySelector(`.btn--hold`),
  dice = document.querySelector(`.dice`),
  scorePlayer1 = document.querySelector(`#score--0`),
  scorePlayer2 = document.querySelector(`#score--1`);
(currentPlayer1 = document.querySelector(`#current--0`)),
  (currentPlayer2 = document.querySelector(`#current--1`));

/////// =====  VARIABLES  =====///////
dice.style.display = `none`;
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let winner = true;
/////// ======  EVENTS ======= ///////
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", hold);
btnNew.addEventListener('click', newGame)

/////// =======  FUNCTIONS ======= //////
function rollDice() {
  if (winner) {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumber);
    dice.src = `dice-${randomNumber}.png`;
    if (randomNumber != 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
      document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
        
      dice.style.display = `block`;
    
    } else {
      changePlay();
    }
  }
}

function hold() {
  if (winner) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      winner = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      dice.style.display = `none`;
    } else {
      changePlay();
    }
  }
}

function changePlay() {
  document.querySelector(`#current--${activePlayer}`).textContent = "0";
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player--0`).classList.toggle("player--active");
  document.querySelector(`.player--1`).classList.toggle("player--active");
}

function newGame() {
    currentScore = 0;
    activePlayer = 0;
    score = [0, 0];
    winner = true;
   
    document.querySelector(`#current--0`).textContent = "0";
    document.querySelector(`#current--1`).textContent = "0";
    document.querySelector(`#score--0`).textContent = '0'
    document.querySelector(`#score--1`).textContent = '0'

    document.querySelector(`.player--0`).classList.remove("player--winner");
    document.querySelector(`.player--1`).classList.remove("player--winner");
    document.querySelector(`.player--0`).classList.remove("player--active");
    document.querySelector(`.player--1`).classList.remove("player--active");
   
}