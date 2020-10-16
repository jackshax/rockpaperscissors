let computerSelection = ["rock", "paper", "scissors"];

function computerPlay(){
    let randInt = Math.floor(Math.random() * computerSelection.length);
    console.log(randInt, computerSelection[randInt]);
    computerSelection = computerSelection[randInt];
}

computerPlay()

let playerSelection = prompt("Rock, paper, or scissors?", "Paper");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);

if (playerSelection === computerSelection){
    console.log("Draw, " + playerSelection + " and " + computerSelection + ".");
} else if (playerSelection === "rock" && computerSelection === "scissors"){
    console.log("Rock beats scissors, you win!");
} else if (playerSelection === "scissors" && computerSelection === "paper"){
    console.log("Scissors beats paper, you win!");
} else if (playerSelection === "paper" && computerSelection === "rock"){
    console.log("Paper beats rock, you win!");
}

else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("Rock beats paper, you lose!");
} else if (playerSelection === "scissors" && computerSelection === "rock"){
    console.log("Rock beats scissors, you lose!");
} else if (playerSelection === "paper" && computerSelection === "scissors"){
    console.log("Scissors beats paper, you lose!");
} else {
    console.log("Wow, you broke it.");
}


/*function playRound(playerSelection, computerSelection) {

    }
}*/

/*const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
return ("You lose! " + computerSelection + " beats " + playerSelection + "!")*/
