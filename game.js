function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let choice = (randomNum === 1) ? "scissor" : (randomNum === 2) ? "paper" : "rock";
    return choice;

}

function getHumanChoice() {
    let userInput = String(prompt("Enter your choice: (1.scissor/ 2.paper/ 3.rock)"));
    userInput = '1' 
    return userInput;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if (humanChoice === 'scissor' && computerChoice === 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++ ;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++ ;
    } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++ ;
    } else if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } return humanScore && computerScore;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);