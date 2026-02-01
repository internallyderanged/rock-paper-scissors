function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3 + 1);
    if (choice == 1) {
        console.log('Computer Choice: rock');
        return 'rock';
    } else if (choice == 2) {
        console.log('Computer Choice: paper');
        return 'paper';
    } else if (choice == 3) {
        console.log('Computer Choice: scissors');
        return 'scissors';
    }
}

function getHumanChoice() {
   let uChoice = window.prompt('What\'s your choice?');
    if (uChoice == 'rock') {
        console.log('User Choice: rock');
        return 'rock';
    } else if (uChoice == 'paper') {
        console.log('User Choice: paper');
        return 'paper';
    } else if (uChoice == 'scissors') {
        console.log('User Choice: scissors');
        return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;
let winner;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! Paper beats rock!');
        console.log("User: " + humanScore + " Comp: " + (computerScore + 1));
        winner = 'computer';
        return 'computer';
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats rock!');
        console.log("User: " + (humanScore + 1) + " Comp: " + computerScore);
        winner = 'user';
        return 'user';
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors!');
        console.log("User: " + (humanScore + 1) + " Comp: " + computerScore);
        winner = 'user';
        return 'user';
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! Rock beats scissors!');
        console.log("User: " + humanScore + " Comp: " + (computerScore + 1));
        winner = 'computer';
        return 'computer';
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win! Scissors beats paper!');
        console.log("User: " + (humanScore + 1) + " Comp: " + computerScore);
        winner = 'user';
        return 'user';
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! Scissors beats paper!');
        console.log("User: " + humanScore + " Comp: " + (computerScore + 1));
        winner = 'computer';
        return 'computer';
    } else if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log('It is a tie!');
        console.log("User: " + humanScore + " Comp: " + computerScore);
        winner = 'noWinner';
        return 'noWinner';
    } else if (humanChoice == 'paper' && computerChoice == 'paper'){
        console.log('It is a tie!');
        console.log("User: " + humanScore + " Comp: " + computerScore);
        winner = 'noWinner';
        return 'noWinner';
    } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        console.log('It is a tie!');
        console.log("User: " + humanScore + " Comp: " + computerScore);
        winner = 'noWinner';
        return 'noWinner';
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    if (winner == 'computer') {
        computerScore++, humanScore;
    } else if (winner == 'user') {
        computerScore, humanScore++;
    } else if (winner == 'noWinner') {
       computerScore, humanScore;
    } 
    }
    if (humanScore > computerScore) {
        console.log(`Final Score: ${humanScore} ${computerScore}; User wins!`);
    } else if (humanScore < computerScore) {
        console.log(`Final Score: ${humanScore} ${computerScore}; Computer wins!`);
    }
}
    
 
console.log(playGame());