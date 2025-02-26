const prompt = require("prompt-sync")();

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playerPlay() {
    let playerChoice = prompt("Choose rock, paper, or scissors: ");
    if (!["rock", "paper", "scissors"].includes(playerChoice.toLowerCase())) {
        console.log("Invalid choice. Please try again.");
        return playerPlay();
    }
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie")
        return 2;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log("You win")
        return 1;
    } else {
        console.log("You lose")
        return 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 3; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result ===1) {
            playerScore++;
        } else if (result ===0) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game");
    } else if (playerScore < computerScore) {
        console.log("You lose the game");
    } else {
        console.log("Tie Game");
    }
}

game();