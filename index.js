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

let rockButton = document.getElementById('btnRock');
let paperButton = document.getElementById('btnPaper');
let scissorsButton = document.getElementById('btnScissors');
  
rockButton.addEventListener('click', singleRound);
paperButton.addEventListener('click', singleRound);
scissorsButton.addEventListener('click', singleRound);
    

function singleRound(e) {

  //user choice//
  const userSelection = e.target.value.toLowerCase();

  //computer choice//
  const computerSelection = getComputerChoice();
  console.log("Computer chose - " + computerSelection);
  

  //user choice, no UI version//
  /*const userSelection = prompt('Choose one: rock, paper or scissors');
  userSelection = userSelection.toLowerCase();*/

  
  //winner of this round is://
  if ((userSelection == 'rock') || (userSelection == 'paper') || (userSelection == 'scissors')) {
  console.log("You chose - " + userSelection);
  console.log(winner(computerSelection, userSelection));}

  if (winner(computerSelection, userSelection) == 'You won! Rock beats scissors.' 
  || winner(computerSelection, userSelection) == 'You won! Paper beats rock.'
  || winner(computerSelection, userSelection) == 'You won! Scissors beats paper.') {
  userPoints = userPoints + 1;
  console.log('User points: ' + userPoints);
  }
  else {
    console.log('User points: ' + userPoints);
  };

  if (userPoints >= 3) {
      console.log("YOU WON!")
    return
    };
  


let userChoiceText = document.getElementById('players-choice');
userChoiceText.textContent = "You chose - " + userSelection + ", " + "computer chose - " + computerSelection + ".";
let winnerOfTheRound = document.querySelector("h2");
winnerOfTheRound.textContent = winner(computerSelection, userSelection);

  
};


/* discord comment: In my opinion you have too many functions. If you read assignments more carefully and plan what you do on a paper, you can see you handle just with `getComputerChoice() {//Write your code for computer choise}` function, `playRound(computerSelection, userSelection) {//Write your conditions how to know who wins}` function and `game() {//Write your code to see who wins the game(5 rounds)}` and maybe `addEventListener()` if you need it.*/