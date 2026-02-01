function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3 + 1);
    if (choice == 1) {
        return 'rock';
    } else if (choice == 2) {
        return 'paper';
    } else if (choice == 3) {
        return 'scissors';
    }
}


function getHumanChoice() {
   let uChoice = prompt('What\'s your choice?');
    if (uChoice == 'rock') {
        return 'rock';
    } else if (uChoice == 'paper') {
        return 'paper';
    } else if (uChoice == 'scissors') {
        return 'scissors';
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! Paper beats rock!');
        console.log((computerScore + 1) + " " + humanScore);
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats rock!');
        console.log(computerScore + " " + (humanScore + 1));
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors!');
        console.log(computerScore + " " + (humanScore + 1));
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! Rock beats scissors!');
        console.log((computerScore + 1) + " " + humanScore);
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win! Scissors beats paper!');
        console.log(computerScore + " " + (humanScore + 1));
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! Scissors beats paper!');
        console.log((computerScore + 1) + " " + humanScore);
    } else if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log('It is a tie!');
        console.log(computerScore + " " + humanScore);
    } else if (humanChoice == 'paper' && computerChoice == 'paper'){
        console.log('It is a tie!');
        console.log(computerScore + " " + humanScore);
    } else if (humanChoice = 'scissors' && computerChoice == 'scissors') {
        console.log('It is a tie!');
        console.log(computerScore + " " + humanScore);
    }
}

function playGame() {
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
}

console.log(humanChoice);
console.log(computerChoice);
console.log(playGame());

/* Right now, the game works, but the rounds don't add up. The function
play game is just calling the playRound each time and the same thing is happening.
We want each round to be different. 
*/