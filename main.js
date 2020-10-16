function computerPlay(){
    const computerSelection = ["Rock", "Paper", "Scissors"];
    let randInt = Math.floor(Math.random() * computerSelection.length);
    console.log(randInt, computerSelection[randInt]);
}

computerPlay();

function playerSelection(){
    const playerSelection = ["Rock", "Paper", "Scissors"];
    let pSelect = prompt("Rock, paper, or scissors?");

/*if (playerSelection === "Rock"){
    document.getElementById("rps").innerHTML =
    "Rock!";
} else if (playerSelection === "Paper"){
    document.getElementById("rps").innerHTML =
    "Paper!";
} else if (playerSelection === "Scissors"){
    document.getElementById("rps").innerHTML =
    "Scissors!";
} else {
    document.getElementById("rps").innerHTML =
    "What?";*/
}


function playRound(playerSelection, computerSelection) {
    //code here
}

/*const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/
//return ("You lose! " + computerSelection + " beats " + playerSelection + "!");
