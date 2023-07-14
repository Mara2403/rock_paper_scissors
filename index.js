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


function winner(computerSelection, userSelection) {
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

function singleRound() {

  //computer choice//
  const computerSelection = getComputerChoice(); /*am I calling a function here?*/
  console.log("Computer made its choice.");
  console.log(computerSelection); //to be removed later to not see what it chose//

  //user choice//
  /*let userSelection = prompt('Choose one: rock, paper or scissors');
  userSelection = userSelection.toLowerCase();*/


  function userMadeChoice() {
    let rockButton = document.getElementById('btnRock');
    let paperButton = document.getElementById('btnPaper');
    let scissorsButton = document.getElementById('btnScissors');
  
    rockButton.addEventListener('click', userChoice);
    paperButton.addEventListener('click', userChoice);
    scissorsButton.addEventListener('click', userChoice);
  
    function userChoice(e) {
    console.log(e.target.value.toLowerCase());
  }
  }
  
  
  let userSelection = userMadeChoice();
  console.log(userSelection);

  //winner of this round is://
  if ((userSelection == 'rock') || (userSelection == 'paper') || (userSelection == 'scissors')) {
  console.log("You've chosen - " + userSelection);
  console.log(winner(computerSelection, userSelection));


    if (winner(computerSelection, userSelection) == 'You won! Rock beats scissors.' 
    || winner(computerSelection, userSelection) == 'You won! Paper beats rock.'
    || winner(computerSelection, userSelection) == 'You won! Scissors beats paper.') {
    userPoints = userPoints + 1;
    console.log('User points: ' + userPoints);
    return userPoints;
  }
  else {
    console.log('User points: ' + userPoints);
  };
  } else {
     console.log('Try again.')
  }

};


function game() {
  
singleRound();
console.log(userPoints);
singleRound();
console.log(userPoints);
singleRound();
console.log(userPoints);
if (userPoints == 3) {
    console.log('You WON! Congratulations!');
    return;
  } 
singleRound();
console.log(userPoints);
if (userPoints == 3) {
  console.log('You WON! Congratulations!');
  return;
} 
singleRound();
console.log(userPoints);
if (userPoints == 3) {
  console.log('You WON! Congratulations!');
  return;
} 

}


game();
let userChoiceText = document.getElementById('user-choice');



/* Comment out - trying something else

let rockButton = document.getElementById('btnRock');
let paperButton = document.getElementById('btnPaper');
let scissorsButton = document.getElementById('btnScissors');

rockButton.addEventListener('click', userChoice);
paperButton.addEventListener('click', userChoice);
scissorsButton.addEventListener('click', userChoice);



function userChoice(e) {
  //console.log(e.target.value);
  userChoiceText.textContent = "You chose " + e.target.value;
  let userChose = e.target.value;
  console.log(userChose);
  return userChose;
}

*/
/* Putting it in the singleRound()
function userMadeChoice() {
  let rockButton = document.getElementById('btnRock');
  let paperButton = document.getElementById('btnPaper');
  let scissorsButton = document.getElementById('btnScissors');

  rockButton.addEventListener('click', userChoice);
  paperButton.addEventListener('click', userChoice);
  scissorsButton.addEventListener('click', userChoice);

  function userChoice(e) {
  console.log(e.target.value.toLowerCase());
}
}


let userSelection = userMadeChoice();
console.log(userSelection);
*/