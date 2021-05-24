'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no guess
  if (!guess) {
    setMessageContent('❌ No number guessed');
  }
  // user won
  else if (guess === secretNumber) {
    setMessageContent(' ⭐️ You Guessed the Number!');

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // guess not correct
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      setMessageContent(
        guess > secretNumber ? ' 📈 Guess too high' : '📉 Guess too low'
      );

      setScore(score);
    } else {
      setMessageContent('♨️ You lost the game!');
      setScore(0);
    }
  } else {
  }
});

function setMessageContent(mes) {
  document.querySelector('.message').textContent = mes;
}
function setScore(num) {
  document.querySelector('.score').textContent = num;
}
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = ''; //empty value
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  setScore(score);
});
