let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];

}

function playRound(playerSelection, computerSelection) {
    let results = "";
    // tie 
    if (playerSelection === computerSelection) {
        playerScore += 1;
        computerScore +=1;
        results = "It's a tie!";
    // playerSelection
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore += 1;
            results = "You Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            computerScore += 1;
            results = "You Lose! Paper beats Rock";
        }
    // playerSelection = paper
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore += 1;
            results = "You Win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            computerScore += 1;
            results = "You Lose! Scissors beats Paper";
        }
    // playerSelection = scissors
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore += 1;
            results = "You Win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            computerScore += 1;
            results =  "You Lose! Rock beats Scissors"
        }
    }
    return `<p><strong>${results}</strong></p>
    <br>Player Score: <strong>${playerScore}</strong>
    <br>Computer Score: <strong>${computerScore}</strong>`;
};



function game() {
    let computerSelection = getComputerChoice();
    let finalResults = playRound(playerSelection, computerSelection);
    
    // return finalResults;
    return finalResults;
    
}


const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", function() {
    playerSelection = "rock";
    document.getElementById("div1").innerHTML = game();
})


const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", function() {
    playerSelection = "paper";
    document.getElementById("div1").innerHTML = game();
})

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", function() {
    playerSelection = "scissors";
    document.getElementById("div1").innerHTML = game();
})

// disable buttons after 5 rounds;
const buttons = document.querySelectorAll("button");
let clickCount = 0;
const maxClicks = 5;

function clickHandler() {
    clickCount++;

    if (clickCount > maxClicks) {
        buttons.forEach(button => {
            button.disabled = true;
        });
        document.getElementById("div1").innerHTML = "Game Over! Reload to play again!"
    }
}
rockButton.addEventListener("click", clickHandler);
paperButton.addEventListener("click", clickHandler);
scissorsButton.addEventListener("click", clickHandler);

