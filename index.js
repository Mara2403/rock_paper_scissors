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


function singleRound(computerSelection, userSelection) {
  if (
    (userSelection === 'rock' && computerSelection === 'rock') 
    || (userSelection === 'paper' && computerSelection === 'paper') 
    || (userSelection === 'scissors' && computerSelection === 'scissors')
    ) {
    return ('It\'s a tie.')}

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



let userPoints = 0;
let computerPoints = 0;

let buttons = document.querySelectorAll(".btn");
buttons.forEach((item) => {
  item.addEventListener("click", game)
});


function game(e) {

  if (userPoints === 5 || computerPoints === 5) {
  return
  };

  //user choice//
  const userSelection = e.currentTarget.value.toLowerCase();

  //computer choice//
  const computerSelection = getComputerChoice();
  console.log("Computer chose - " + computerSelection);
  

  //user choice, no UI version//
  /*const userSelection = prompt('Choose one: rock, paper or scissors');
  userSelection = userSelection.toLowerCase();*/

  let announcingWinner = document.getElementById('winner-of-the-game');
  
  if ((userSelection == 'rock') || (userSelection == 'paper') || (userSelection == 'scissors')) {
  console.log("You chose - " + userSelection);
  console.log(singleRound(computerSelection, userSelection));}

  if (singleRound(computerSelection, userSelection) == 'You won! Rock beats scissors.' 
  || singleRound(computerSelection, userSelection) == 'You won! Paper beats rock.'
  || singleRound(computerSelection, userSelection) == 'You won! Scissors beats paper.') {
  userPoints = userPoints + 1;
  console.log('User points: ' + userPoints);
  }
  else {
    console.log('User points: ' + userPoints);
  };

  if (userPoints === 5) {
    console.log("YOU WON!");
    announcingWinner.textContent = "YOU WON!";
  }
 
  if (singleRound(computerSelection, userSelection) == 'You lose. Paper beats rock.'
  || singleRound(computerSelection, userSelection) == 'You lose. Scissors beats paper.'
  || singleRound(computerSelection, userSelection) == 'You lose. Rock beats scissors.') {
  computerPoints = computerPoints + 1;
  console.log('Computer points: ' + computerPoints);
  }
  else {
    console.log('Computer points: ' + computerPoints);
  };

  if (computerPoints === 5) {
    console.log("COMPUTER WON!");
    announcingWinner.textContent = "COMPUTER WON!";
  }

let userChoiceText = document.getElementById('players-choice');
userChoiceText.textContent = "You chose - " + userSelection + ", " + "computer chose - " + computerSelection + ".";
let winnerOfTheRound = document.getElementById("winner-of-the-round");
winnerOfTheRound.textContent = singleRound(computerSelection, userSelection);
let score = document.getElementById("score");
score.textContent = "Your score: " + userPoints + ". Computer's score: " + computerPoints + ".";
  
};
