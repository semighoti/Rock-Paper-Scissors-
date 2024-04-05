// const startGame = document.getElementById(`start`);
let playerScore = 0;
let botScore = 0;
document.getElementById(`start`).addEventListener(`click`, () => {
  // const timeToPlay = prompt (`how many time you want to play?`,``);
  // for (let i = 0; i < timeToPlay; i++){
  const playerChoice = prompt(`Read the rule and pick you move`,``);

  const result = playRound(playerChoice, botChoice());
    if (result === `The player win!`) {
      playerScore += 1;
      // console.log (result);
    } else if (result === `The computer win!`) {
      botScore +=1;
      // console.log (result);
    }
  const showResult = document.createElement(`ul`);
  showResult.textContent = `${result}. Player score: ${playerScore}; Computer score: ${botScore}.`;
  document.body.appendChild(showResult);
  const scoreResult = document.createElement(`h3`);
  if (playerScore === 5) {
    scoreResult.textContent = `The winner is the player!!!`;
  } else if ( botScore === 5) {
    scoreResult.textContent = `The winner is the Computer!!!`;
  }
  document.body.appendChild(scoreResult);

});


const botChoice = () => [`rock`, `paper`, `scissors`][Math.floor(Math.random() * 3)];


function playRound(playerChoice, botChoice){
  if (playerChoice === botChoice){
    return `Tie!`
  } else if (
    (playerChoice === `rock` && botChoice === `scissors`) ||
    (playerChoice === `scissors` && botChoice === `paper`) ||
    (playerChoice === `paper` && botChoice === `rock`)
  ) {
    return `The player win!`;
  } else {
    return `The computer win!`;
  };
};