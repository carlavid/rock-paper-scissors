// rock paper scissors Game 
// begin with a function called getComputerChoice
// that will randomly return rock, paper or scissors

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];

}

// write function that plays a single round of rps
// two parameters - playerSelection & computerSelection 
// return string that declares winner of the round "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    // make function's parameter case-insensitive 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // tie 
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    // playerSelection
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        }
    // playerSelection = paper
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        }
    // playerSelection = scissors
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors"
        }
    }
}



