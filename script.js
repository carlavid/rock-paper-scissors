// rock paper scissors Game 
// begin with a function called getComputerChoice
// that will randomly return rock, paper or scissors

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];

}
