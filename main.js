let computerSelection = ["rock", "paper", "scissors"];
let playerSelection;
// let playerSelection = ["rock", "paper", "scissors"];
// let userButton;

function computerPlay(){
    let randInt = Math.round( Math.random() * (computerSelection.length - 1) );
    console.log(randInt, computerSelection[randInt]);
    computerSelection = computerSelection[randInt];
}

computerPlay()

/*let playerSelection = prompt("Rock, paper, or scissors?", "Paper");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);*/

function userButton(choice){
    // alert(buttonElement.id);

    playerSelection = choice;
/*
    if( userButton = 0 ){
        playerSelection[1];
    }
    else if( userButton = 1 ){
        playerSelection[2];
    }
    else if( userButton = 2 ){
        playerSelection[3];
    } else {
        console.log("Still broken")
        playerSelection = "gun";
    } */
}

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

    //Game
/*function playRound(playerSelection, computerSelection) {

    }
*/

/*const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
return ("You lose! " + computerSelection + " beats " + playerSelection + "!")*/
