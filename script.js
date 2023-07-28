
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];

}

function playRound(playerSelection, computerSelection) {
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

function game() {
    let computerSelection = getComputerChoice();
    let results = playRound(playerSelection, computerSelection);
    
    return `<p>You chose: <strong>${playerSelection}</strong>
    <br>Computer chose: <strong>${computerSelection}</strong>
    <br><strong>${results}</strong></p>`;
    
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

// disable buttons after 5 clicks;
const buttons = document.querySelectorAll("button");
let clickCount = 0;
const maxClicks = 5;

function clickHandler() {
    clickCount++;

    if (clickCount > maxClicks) {
        buttons.forEach(button => {
            button.disabled = true;
        });
        document.getElementById("div1").innerHTML = "5 clicks! Game Over!"
    }
}
rockButton.addEventListener("click", clickHandler);
paperButton.addEventListener("click", clickHandler);
scissorsButton.addEventListener("click", clickHandler);

