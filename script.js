// Add event listeners to the buttons
// const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === 'Player wins!') {
            playerScore += 1;
        } else if (result === 'Computer wins!') {
            computerScore += 1;
        }
        const resultDiv = document.createElement('ul');
        resultDiv.textContent = `${result}, player score: ${playerScore}, computer score: ${computerScore}`;
        document.body.appendChild(resultDiv);
        const theWinner = document.createElement('h3');
        if (playerScore === 5) {
            theWinner.textContent = 'The winner is player!';
        } else if (computerScore === 5) {
            theWinner.textContent = 'The winner is computer';
        }
        document.body.appendChild(theWinner);
    });
});

// the Bot Choice 
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