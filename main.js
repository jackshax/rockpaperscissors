let playerSelection; 
    playerSelection = prompt("Rock, paper, or scissors?", "Paper");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);

let computerSelection = ["rock", "paper", "scissors"]

function computerPlay(){;
    let randInt = Math.round( Math.random() * 3 );
    console.log(randInt, computerSelection[randInt]);
    computerSelection = computerSelection[randInt];
}

computerPlay();

console.log("Player " + playerSelection);   

//Game
function playRound(playerSelection, computerSelection) {
        //Draw
    if (playerSelection === computerSelection){
        console.log("Draw, " + playerSelection + " and " + computerSelection + ".");
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

/*const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
return ("You lose! " + computerSelection + " beats " + playerSelection + "!")*/
