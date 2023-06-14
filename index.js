
const randomNumber = Math.random();

function getComputerChoice(randomNumber) {
if (randomNumber <= 1/3) {
  return "rock"
} else if (randomNumber >1/3 && randomNumber <= 2/3) {
  return "paper"
} else {
  return "scissors"
}
}
//getComputerChoice(randomNumber);//
console.log("Computer made his choice.");

const computerSelection = getComputerChoice(randomNumber); /*am I calling a function here?*/
console.log(computerSelection);  
/*later I don't want to see it displayed*/

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
    return ('It\'s a tie')}

  else if (userSelection === 'rock' && computerSelection === 'paper') {
    return ('You lose. Paper beats rock.');
  } else if (userSelection === 'rock' && computerSelection === 'scissors') {
    return ('You won! Rock beats scissors');
  }

  else if (userSelection === 'paper' && computerSelection === 'rock') {
    return ('You win! Paper beats rock.');
  } else if (userSelection === 'paper' && computerSelection === 'scissors') {
    return ('You lose. Scissors beats paper');
  }

  else if (userSelection === 'scissors' && computerSelection === 'paper') {
    return ('You won! Scissors beats paper.');
  } else (userSelection === 'scissors' && computerSelection === 'rock') 
    return ('You lose. Rock beats scissors')
  
};

console.log(playRound(computerSelection, userSelection));