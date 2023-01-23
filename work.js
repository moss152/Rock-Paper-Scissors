const getComputerChoice = function() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * choices.length);

    return choices[random];
};


function rockPaperScissor() {
    let playerScore = 0;
    let computerScore = 0;
  
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Rock, Paper, Scissors?').toUpperCase();
        const computerSelection = getComputerChoice();
      
        if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
            console.log('YOU LOOSE! PAPER BEATS ROCK');
            computerScore++;
      
        } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
            console.log('YOU WIN! ROCK BEATS SCISSORS');
            playerScore++;
      
        } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
            console.log('YOU WIN! PAPER BEATS ROCK');
            playerScore++;
      
        } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
            console.log('YOU LOOSE! SCISSORS BEATS PAPER');
            computerScore++;
      
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
            console.log('YOU WIN! SCISSORS BEATS PAPER');
            playerScore++;
      
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
            console.log('YOU LOOSE! ROCK BEAT SCISSORS');
            computerScore++;
      
        } else if (playerSelection === computerSelection) {
            console.log('DRAW, PLEASE PLAY AGAIN');
        }
    }
    if (playerScore > computerScore) {
      console.log(playerScore + "  PLAYER WINS!");
    } else if (computerScore > playerScore) {
      console.log(computerScore + "  COMPUTER WINS!");
    } else if(computerScore === playerScore) {
      console.log("It's a draw!");
    }
}

rockPaperScissor();
