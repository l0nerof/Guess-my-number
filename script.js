'use strict';

const againEl = document.querySelector('.again');
const checkEl = document.querySelector('.check');
const guessEl = document.querySelector('.guess');
const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const highscoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

const checkValueHandler = function () {
  const guessedValue = Number(guessEl.value);

  if (!guessedValue) {
    displayMessage('⛔️ No number!');
  } else if (guessedValue === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberEl.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberEl.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guessedValue !== score) {
    if (score > 1) {
      displayMessage(
        guessedValue > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = 0;
    }
  }
};

const restartTheGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreEl.textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  numberEl.textContent = '?';
  guessEl.value = '';
};

checkEl.addEventListener('click', checkValueHandler);
againEl.addEventListener('click', restartTheGame);
