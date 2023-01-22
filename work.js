



function rockPaperScissor(getComputerChoice){

    function getComputerChoice(){
        const choices = ['ROCK', 'PAPER', 'SCISSORS'];
        const random = Math.floor(Math.random() * choices.length);
    
        return choices[random];
    
        }
    
    const playerSelection = prompt('Rock, Paper, Scissors?').toUpperCase();

    const computerSelection = getComputerChoice();

        if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
    return 'YOU LOOSE! PAPER BEATS ROCK' ;
    

} else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
    return  'YOU WIN! ROCK BEATS SCISSORS';

}else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
    return 'YOU WIN! PAPER BEATS ROCK';

}else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
    return 'YOU LOOSE! SCISSORS BEATS PAPER';
    
}else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
    return 'YOU WIN! SCISSORS BEATS PAPER';

} else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
    return 'YOU LOOSE! ROCK BEAT SCISSORS';

} else if (playerSelection === computerSelection) {
    return 'DRAW, PLEASE PLAY AGAIN'
}

}
console.log(rockPaperScissor());