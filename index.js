
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
console.log("Computer made his choice.");

let userSelection = prompt('Choose one: rock, paper or scissors');
userSelection = userSelection.toLowerCase();

if ((userSelection == 'rock') || (userSelection == 'paper') || (userSelection == 'scissors')) {
  console.log("You've choosen - " + userSelection)
} else {
  console.log('Try again.')
}


function playRound(computerSelection, userSelection) {
  if (
    (userSelection === 'rock' && computerSelection === 'rock') 
    || (userSelection === 'paper' && computerSelection === 'paper') 
    || (userSelection === 'scissors' && computerSelection === 'scissors')
    ) {
    return ('It\'s a tie');

  } else if (userSelection === 'rock' && computerSelection === 'paper') {
    return ('You lose. Paper beats rock.');
  } else if (userSelection === 'rock' && computerSelection === 'scissors') {
    return ('You won! Rock beats scissors');
  }
};