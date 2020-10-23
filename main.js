function playRound() {
let playerSelection;
    playerSelection = prompt("Rock, paper, or scissors?", "Rock");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);

let computerSelection = ["rock", "paper", "scissors"]

function computerPlay(){;
    let randInt = Math.round( Math.random() * 2 );
    console.log(randInt, computerSelection[randInt]);
    computerSelection = computerSelection[randInt];
}

computerPlay();

console.log("Player " + playerSelection);   

//Game
    //Draw
if (playerSelection === computerSelection){
    console.log(`Draw, ${playerSelection} and ${computerSelection}.`);
    //User wins
} else if (playerSelection === "rock" && computerSelection === "scissors"){
    console.log("Rock beats scissors, you win!");
} else if (playerSelection === "scissors" && computerSelection === "paper"){
    console.log("Scissors beats paper, you win!");
} else if (playerSelection === "paper" && computerSelection === "rock"){
    console.log("Paper beats rock, you win!");
}
    //Opponent wins
else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("Rock beats paper, you lose!");
} else if (playerSelection === "scissors" && computerSelection === "rock"){
    console.log("Rock beats scissors, you lose!");
} else if (playerSelection === "paper" && computerSelection === "scissors"){
    console.log("Scissors beats paper, you lose!");
} 
    //Broken D:
else {
    console.log("Wow you broke it.");
}
}

function game() {
playRound();
}