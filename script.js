humanScore = 0;
computerScore = 0;

function getComputerChoice(){
    let number = (Math.floor(Math.random() * 3+1));
    if (number === 1) {
        return "Rock"
    } else if (number === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice(){
    let playerChoice = prompt("Rock/Paper/Scissors?");
    return playerChoice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("Draw, roll again");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose");
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("Draw, roll again");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose");
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose");
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("Draw, roll again");
    } else {
        console.log("Invalid choice, please try again");
    }
}

function playGame() {

    
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i+1}:`);
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a draw.");
    }
}

playGame();
