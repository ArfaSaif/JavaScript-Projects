'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const newBtnEL = document.querySelector('.btn--new');
const rollBtnEL = document.querySelector('.btn--roll');
const holdBtnEL = document.querySelector('.btn--hold');
const diceImage = document.querySelector('.dice');
const playerOEl = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

// Player Score

const scores = [0, 0];
// current score independent of the current player
let currentScore = 0;
let currentPlayer = 0;
// Game state
let playing = true;

const init = function () {
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.remove('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');

  scores[0] = 0;
  scores[1] = 0;

  score0El.textContent = 0;
  score1EL.textContent = 0;
  playing = true;
  currentScore = 0;

  currentPlayer = 0;
  document.querySelector('.player--0').classList.add('player--active');
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceImage.classList.remove('hidden');
};

// call init
init();

//handle button clicks

const newButtonClicked = function () {
  init();
};
const rollButtonClicked = function () {
  if (playing) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);

    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      currentScore += randomNumber;

      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${currentPlayer}`).textContent = 0;

      changeCurrentPlayer();
    }
  }

  //getPlayerScore = score + randomNumber;
};
const holdButtonClicked = function () {
  if (playing) {
    scores[currentPlayer] = scores[currentPlayer] + currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    //if won
    if (scores[currentPlayer] >= 20) {
      playing = false;
      diceImage.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      changeCurrentPlayer();
    }
  }

  //change current player
};

newBtnEL.addEventListener('click', newButtonClicked);
rollBtnEL.addEventListener('click', rollButtonClicked);
holdBtnEL.addEventListener('click', holdButtonClicked);

function changeCurrentPlayer() {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;

  currentPlayer = currentPlayer ? 0 : 1;
  // toggle on both
  playerOEl.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  console.log('Current player = ' + currentPlayer);
  return;
}
