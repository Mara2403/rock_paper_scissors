function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= 1/3) {
    return "rock"
  } else if (randomNumber >1/3 && randomNumber <= 2/3) {
    return "paper"
  } else {
    return "scissors"
  }
  }
  getComputerChoice();
  console.log("Computer made his choice.");
  
  const computerSelection = getComputerChoice(); /*am I calling a function here?*/
  console.log(computerSelection);
  /*later I don't want to see it be displayed*/


function winner(computerSelection, userSelection) {
  if (
    (userSelection === 'rock' && computerSelection === 'rock') 
    || (userSelection === 'paper' && computerSelection === 'paper') 
    || (userSelection === 'scissors' && computerSelection === 'scissors')
    ) {
    return ('It\'s a tie')}

  else if (userSelection === 'rock' && computerSelection === 'paper') {
    return ('You lose. Paper beats rock.');
  } else if (userSelection === 'rock' && computerSelection === 'scissors') {
    return ('You won! Rock beats scissors.');
  }

  else if (userSelection === 'paper' && computerSelection === 'rock') {
    return ('You won! Paper beats rock.');
  } else if (userSelection === 'paper' && computerSelection === 'scissors') {
    return ('You lose. Scissors beats paper.');
  }

  else if (userSelection === 'scissors' && computerSelection === 'paper') {
    return ('You won! Scissors beats paper.');
  } else (userSelection === 'scissors' && computerSelection === 'rock') 
    return ('You lose. Rock beats scissors.')
  
};






let userSelection = prompt('Choose one: rock, paper or scissors');
userSelection = userSelection.toLowerCase();

if ((userSelection == 'rock') || (userSelection == 'paper') || (userSelection == 'scissors')) {
  console.log("You've chosen - " + userSelection)
} else {
  console.log('Try again.')
}

console.log(winner(computerSelection, userSelection));

let userPoints = 0;

if (winner(computerSelection, userSelection) == 'You won! Rock beats scissors' 
|| winner(computerSelection, userSelection) == 'You won! Paper beats rock.'
|| winner(computerSelection, userSelection) == 'You won! Scissors beats paper.') {
  userPoints = userPoints + 1;
  console.log('User points: ' + userPoints);}
  else {
    console.log('User points: ' + userPoints);
  };


   /* console.log(computerSelection);
    userSelection = prompt('Choose one: rock, paper or scissors');
    userSelection = userSelection.toLowerCase();
    console.log(userSelection);
    winner(computerSelection,userSelection);
    console.log(userPoints);

*/