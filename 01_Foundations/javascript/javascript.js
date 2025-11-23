const elementsArr = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return elementsArr.at(randomIndex);
};

function getHumanChoice() {
    let rawHumanChoice = prompt("Choose: rock, paper, scissors");
    let lowercaseHumanChoice = rawHumanChoice.toLocaleLowerCase();

    if (elementsArr.includes(lowercaseHumanChoice)) {
        return lowercaseHumanChoice;
    } else {
        console.log("No! You must choose from rocks, paper, scissors only.");
        getHumanChoice();
    }
};

function playRound(human, computer) {
    if (human == computer) {
        console.log("Tie")
    } else if (human == "rock" && computer == "scissors" || 
               human == "paper" && computer == "rock" ||
               human == "scissors" && computer == "rock"){
        console.log("Human player wins!")
    } else {
        console.log("Computer wins")
    }
}

