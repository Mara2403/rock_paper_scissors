
const computerSelection = Math.random();

function getComputerChoice(computerSelection) {
if (computerSelection <= 1/3) {
  return "rock"
} else if (computerSelection >1/3 && computerSelection <= 2/3) {
  return "paper"
} else {
  return "scissors"
}
}
console.log("Computer made his choice");

const userSelection = prompt('Choose one: rock, paper or scissors');
console.log("You've choosen - " + userSelection)
if ((userSelection.toLowerCase() == 'rock') || (userSelection.toLowerCase() == 'paper') || (userSelection.toLowerCase() == 'scissors')) {
} else {
  console.log('Try again.')
}


function playRound(computerSelection, userSelection){
  if (userSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
    return 'It\'s a tie';
  }
  
}
console.log(playRound(computerSelection, userSelection));




