let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const roundResults = document.getElementById("results");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const buttons = document.querySelectorAll("button");


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let results = "";
    // tie 
    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        results = "It's a tie!";
    // playerSelection
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            results = "You Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            computerScore++;
            results = "You Lose! Paper beats Rock";
        }
    // playerSelection = paper
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            results = "You Win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            computerScore++;
            results = "You Lose! Scissors beats Paper";
        }
    // playerSelection = scissors
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            results = "You Win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            computerScore++;
            results =  "You Lose! Rock beats Scissors"
        }
    }
    roundResults.innerHTML = `<p><strong>${results}</strong></p>`;
    playerScore_span.innerHTML = `Player Score: <span id="score-num">${playerScore}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    computerScore_span.innerHTML = `Computer Score: <span id="score-num">${computerScore}</span>`;
    return roundResults.innerHTML + playerScore_span.innerHTML + computerScore_span.innerHTML;
};

function game() {
    let computerSelection = getComputerChoice();
    let finalResults = playRound(playerSelection, computerSelection);
    
    return finalResults;
    
}

// add event listeners to each button
rockButton.addEventListener("click", function() {
    playerSelection = "rock";
    document.getElementById("div1").innerHTML = game();
})

paperButton.addEventListener("click", function() {
    playerSelection = "paper";
    document.getElementById("div1").innerHTML = game();
})

scissorsButton.addEventListener("click", function() {
    playerSelection = "scissors";
    document.getElementById("div1").innerHTML = game();
})

// disable buttons after player or computer reaches 5;
function clickHandler() {
    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach(button => {
            button.disabled = true;
        });
        if (playerScore > computerScore) {
            document.getElementById("final-winner").innerHTML = "You won the game!🥳 Reload to play again!";
        } else if (computerScore > playerScore) {
            document.getElementById("final-winner").innerHTML = "You lost the game!😞 Reload to play again!";
        } else if (computerScore === playerScore) {
            document.getElementById("final-winner").innerHTML = "It's a tie! Reload to play again!";
        }
        
    }
}

rockButton.addEventListener("click", clickHandler);
paperButton.addEventListener("click", clickHandler);
scissorsButton.addEventListener("click", clickHandler);

