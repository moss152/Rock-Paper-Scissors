const button = document.querySelector('.btn');
const buttons = document.querySelectorAll('.btns');

const playingGame = function (e) {
  const playGround2 = document.querySelector('.playGround');
  const btn = document.querySelector('.btn');

  playGround2.style.background = 'black';

  btn.remove();

  buttons.forEach(function (button) {
    button.style.visibility = 'visible';
  });
};

const playerSelection = function (e) {
  const playerChoice = e.target.innerHTML;
  rockPaperScissor(playerChoice);
};

button.addEventListener('click', playingGame);
buttons.forEach((button) => button.addEventListener('click', playerSelection));

const getComputerChoice = function () {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  const random = Math.floor(Math.random() * choices.length);

  return choices[random];
};

function rockPaperScissor(playerChoice) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();

    if (playerChoice === 'ROCK' && computerSelection === 'PAPER') {
      console.log('YOU LOOSE! PAPER BEATS ROCK');
      computerScore++;
    } else if (playerChoice === 'ROCK' && computerSelection === 'SCISSORS') {
      console.log('YOU WIN! ROCK BEATS SCISSORS');
      playerScore++;
    } else if (playerChoice === 'PAPER' && computerSelection === 'ROCK') {
      console.log('YOU WIN! PAPER BEATS ROCK');
      playerScore++;
    } else if (playerChoice === 'PAPER' && computerSelection === 'SCISSORS') {
      console.log('YOU LOOSE! SCISSORS BEATS PAPER');
      computerScore++;
    } else if (playerChoice === 'SCISSORS' && computerSelection === 'PAPER') {
      console.log('YOU WIN! SCISSORS BEATS PAPER');
      playerScore++;
    } else if (playerChoice === 'SCISSORS' && computerSelection === 'ROCK') {
      console.log('YOU LOOSE! ROCK BEAT SCISSORS');
      computerScore++;
    } else if (playerChoice === computerSelection) {
      console.log('DRAW, PLEASE PLAY AGAIN');
    }
  }
  if (playerScore > computerScore) {
    console.log(playerScore + '  PLAYER WINS!');
  } else if (computerScore > playerScore) {
    console.log(computerScore + '  COMPUTER WINS!');
  } else if (computerScore === playerScore) {
    console.log("It's a draw!");
  }
}
