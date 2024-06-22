console.log('hi');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
    console.log("Invalid choice");
  } return userInput;
}

/*const choice = getUserChoice('rock');
console.log(choice);*/

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let choice = 0;

  if (random == 0) {
    choice = 'paper';
  } else if (random == 1) {
      choice = 'rock';
  } else {
      choice = 'scissors';
  }
  return choice;
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You won!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You won!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You won!';
  } else {
    return 'You lose!';
  }
}

let test1 = getUserChoice('PAPER');
let test2 = getComputerChoice();
console.log('Computer\'s choice is: ' + test2);
let result = determineWinner(test1, test2);
console.log(result);
