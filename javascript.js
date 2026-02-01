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
        console.log((computerScore + 1) + " " + humanScore);
        winner = 'computer';
        return 'computer';
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats rock!');
        console.log(computerScore + " " + (humanScore + 1));
        winner = 'user';
        return 'user';
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors!');
        console.log(computerScore + " " + (humanScore + 1));
        winner = 'user';
        return 'user';
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! Rock beats scissors!');
        console.log((computerScore + 1) + " " + humanScore);
        winner = 'computer';
        return 'computer';
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win! Scissors beats paper!');
        console.log(computerScore + " " + (humanScore + 1));
        winner = 'user';
        return 'user';
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! Scissors beats paper!');
        console.log((computerScore + 1) + " " + humanScore);
        winner = 'computer';
        return 'computer';
    } else if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log('It is a tie!');
        console.log(computerScore + " " + humanScore);
        winner = 'noWinner';
        return 'noWinner';
    } else if (humanChoice == 'paper' && computerChoice == 'paper'){
        console.log('It is a tie!');
        console.log(computerScore + " " + humanScore);
        winner = 'noWinner';
        return 'noWinner';
    } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        console.log('It is a tie!');
        console.log(computerScore + " " + humanScore);
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
}
    /*
    playRound(getHumanChoice(), getComputerChoice());
        if (winner == 'computer') {
        computerScore++;
    } else humanScore++;
    playRound(getHumanChoice(), getComputerChoice());
        if (winner == 'computer') {
        computerScore++;
    } else humanScore++;
    playRound(getHumanChoice(), getComputerChoice());
        if (winner == 'computer') {
        computerScore++;
    } else humanScore++;
    /*
    playRound(getHumanChoice(), getComputerChoice());
       if (winner == 'computer') {
        computerScore++;
    } else humanScore++; 
}
*/

 
console.log(playGame());




/* Right now, the game works, but the rounds don't add up. The function
play game is just calling the playRound each time and the same thing is happening.
We want each round to be different. The score isn't implementing properly
and the user only gets to make one choice. 
So here, our ++ playRound IS adding to the score, but it is not recognizing winner = computer,
so the human score is going up no matter what. So right now our problems are:

2. Score not being incremented properly -- only for human right now

First, let's look into what is happening here. 
We have playRound(humanChoice, computerChoice);
So every time we run playRound, we should get 
getHumanChoice, and getComputerChoice to run,

*/

/*
Computer Score:
Human Score:

0 1
0 1
1 1


*/