// Rock, paper, and scissor game demo no GUI using javascript for odin project
// Name : Muhammad Iqbal

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let choice = (randomNum === 1) ? "scissor" : (randomNum === 2) ? "paper" : "rock";
    return choice;

}

function getHumanChoice() {
    let userInput = String(prompt("Enter your choice: (scissor/ paper/ rock)"));
    return userInput;

}

let humanScore = 0;
let computerScore = 0;
let message = '';

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if (humanChoice === 'scissor' && computerChoice === 'paper') {
        message = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        message = `You win! ${humanChoice} beats ${computerChoice}`
        humanScore++ ;
    } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        message = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++ ;
    } else if (humanChoice === computerChoice) {
        message = "Draw!";
    } else {
        message = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    return humanScore && computerScore && message;
}


function playGame() {
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const game = playRound(humanSelection, computerSelection);
        game;
        alert(message);
        console.log(message);
        alert(`Your score: ${humanScore} \nComputer Score: ${computerScore}`);
        console.log(`Your score: ${humanScore} \nComputer Score: ${computerScore}`);

    }   if (humanScore > computerScore) {
            alert("Congrats! You win!");
            console.log("Congrats! you win!");
        } else if (humanScore < computerScore) {
            alert("You lose!");
            console.log("You lose!");
        } else {
            alert("Its a tie!");
            console.log("It's a tie!");
        }   alert(`------ FINAL SCORE ------ \nYour score: ${humanScore} \nComputer score: ${computerScore}`);
}

playGame();