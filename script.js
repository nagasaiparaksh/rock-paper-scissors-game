const choices = ['ROCK','PAPER','SCISSORS'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "ROCK":
                result = (computerChoice === "SCISSORS") ? "YOU WIN" : "YOU LOSE";
                break;
            case "PAPER":
                result = (computerChoice === "ROCK") ? "YOU WIN" : "YOU LOSE";
                break;
            case "SCISSORS":
                result = (computerChoice === "PAPER") ? "YOU WIN" : "YOU LOSE";
                break;

        }
    }
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "orangeText");

    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            break;
        case "IT'S A TIE":
            resultDisplay.classList.add("orangeText");
            break;
        
    }

}
