// the Bot choise
const getBotChoice = () => ["rock", "paper", `scissors`][Math.floor(Math.random() * 3)];

function playingRound(playerPlaying,botPlaying) {
  if (playerPlaying === botPlaying) {
    return "Tie!"
  } else if (
    (playerPlaying === "rock" && botPlaying === `scissors`) ||
    (playerPlaying === "scissors" && botPlaying === `paper`) ||
    (playerPlaying === "paper" && botPlaying === `rock`) ||
  ) {
    return "the Player wins!";
  } else {
    return "the Bot win!";
  }
}

// the player choice
const buttons = document.querySelectorAll("button");
let playerScore = 0;
let botScore = 0;
buttons.forEach(button => {
  button.addEventListener(`click`, () => {
    const playerPlaying = button.textContent;
    const botPlaying = getBotChoice;
    const result = playingRound(playerPlaying,botPlaying);
    if (result === "the Player wins!" ) {
      playerScore += 1;
    } else if (result === "the Bot win!" ){
      botScore +=1;
    }
    const resultDev = document.createElement(`div`);
    resultDev.textContent = `${result}, player score: ${playerScore}, computer score: ${botScore}.`
  })

});

