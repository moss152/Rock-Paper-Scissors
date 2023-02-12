const button = document.querySelector('.btn');
const buttons = document.querySelectorAll('.btns');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');
const winningScore = 3;


const playingGame = function (e){
    
    const playGround2 = document.querySelector('.playGround');

    playGround2.style.background = "black";
    
    button.remove();

    buttons.forEach(function(button) {
        button.style.visibility = "visible";
    });
}


button.addEventListener('click', playingGame);
buttons.forEach(button => button.addEventListener('click', rockPaperScissor))


const getComputerChoice = function() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * choices.length);

    return choices[random];
};

let playerScore = 0;
let computerScore = 0;

function rockPaperScissor(e) {

    const playerChoice = e.target.innerHTML;
    const computerSelection = getComputerChoice();

   
       
        let winner = [playerScore, computerScore];
        
           
      
        if(playerChoice === 'ROCK' && computerSelection === 'PAPER'){
            computerScore++;
            score.innerHTML = "YOU LOOSE! PAPER BEATS ROCK";
            
      
        } else if (playerChoice === 'ROCK' && computerSelection === 'SCISSORS'){
            playerScore++;
            score.innerHTML = 'YOU WIN! ROCK BEATS SCISSORS';
      
        } else if (playerChoice === 'PAPER' && computerSelection === 'ROCK'){
            playerScore++;
            score.innerHTML = 'YOU WIN! PAPER BEATS ROCK';

      
        } else if (playerChoice === 'PAPER' && computerSelection === 'SCISSORS'){
            computerScore++;
            score.innerHTML = 'YOU LOOSE! SCISSORS BEATS PAPER';

              
        } else if (playerChoice === 'SCISSORS' && computerSelection === 'PAPER'){
            playerScore++;
            score.innerHTML = 'YOU WIN! SCISSORS BEATS PAPER';
      
        } else if (playerChoice === 'SCISSORS' && computerSelection === 'ROCK'){
            computerScore++;
            score.innerHTML = 'YOU LOOSE! ROCK BEAT SCISSORS';
      
        } else if (playerChoice === computerSelection) {
            score.innerHTML = 'DRAW, PLEASE PLAY AGAIN';
        }

        if (playerScore === winningScore) {
            score.innerHTML = "You Are The Winner!";
            buttons.forEach(button => button.removeEventListener('click', rockPaperScissor));
            setTimeout(function() {
                window.location.reload();
            }, 500)
          } else if (computerScore === winningScore) {
            score.innerHTML = "Computer Wins!";
            buttons.forEach(button => button.removeEventListener('click', rockPaperScissor));
            setTimeout(function() {
                window.location.reload();
            }, 2000)
            
          }
        }
       
        
        
        
        
        
   
    


