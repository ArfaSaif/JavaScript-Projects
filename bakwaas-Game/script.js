'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 14;

// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no guess
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No number guessed';
  }
  // user won
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      ' ⭐️ You Guessed the Number!';

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  // guess too high
  else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = ' 📈 Guess too high';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '♨️ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // guess too low
  else {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📉 Guess too low';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '♨️ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //   secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = 0;
  document.querySelector('.number').style.width = '15rem';
});
