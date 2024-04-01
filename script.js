// 3 stages of problem solving: (1. Understanding) Understand the problem, (2. Planning) make a plan to solve the problem, (3. Pseudocode) write out the logic of each step of the plan.

// 1. Understanding: create a page where a user can play the rock, paper, scissors game with computer.
// How to play? The user input his choice by clicking one of three Rock, Paper, and Scissors buttons. Then compare the user's choice to the computer's choice. Return the comparison's result.

// 2. Planning: create a web page where a user can play the rock-paper-scissors game with computer
// Create a script.js to write the program to:
// generate the computer's choice,
// collect the user's choice by listening to the click event on the buttons,
// the game continues until one player win 5 rounds in total,
// display the winner at the bottom of the page.

// 3. Pseudocode: 

// Add event listeners to the buttons
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === 'Player wins!') {
            playerScore += 1;
        } else if (result === 'Computer wins!') {
            computerScore += 1;
        }
        const resultDiv = document.createElement('div');
        resultDiv.textContent = `${result}, player score: ${playerScore}, computer score: ${computerScore}`;
        document.body.appendChild(resultDiv);
        const theWinner = document.createElement('div');
        if (playerScore === 5) {
            theWinner.textContent = 'The winner is player!';
        } else if (computerScore === 5) {
            theWinner.textContent = 'The winner is computer';
        }
        document.body.appendChild(theWinner);
    });
});

const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return 'Player wins!';
    } else {
        return 'Computer wins!';
    }
}