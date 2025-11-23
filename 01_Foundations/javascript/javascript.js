const elementsArr = ["rock", "paper", "scissors"];
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    console.log(`Computer chose ${elementsArr.at(randomIndex)}`);
    return elementsArr.at(randomIndex);
};

function getHumanChoice() {
    let rawHumanChoice = prompt("Choose: rock, paper, scissors");
    let lowercaseHumanChoice = rawHumanChoice.toLocaleLowerCase();

    if (elementsArr.includes(lowercaseHumanChoice)) {
        console.log(`You chose ${lowercaseHumanChoice}.`);
        return lowercaseHumanChoice;
    } else {
        console.log("No! You must choose from rocks, paper, scissors only.");
        getHumanChoice();
    }
};

function playRound(human, computer) {
    if (human == computer) {
        console.log("Tie");
    } else if (human == "rock" && computer == "scissors" || 
               human == "paper" && computer == "rock" ||
               human == "scissors" && computer == "rock") {
        console.log("Human player wins!");
        humanScore += 1;
    } else {
        console.log("Computer wins");
        computerScore += 1;
    }
};

function playGame() {
    for(let round = 1; round <= 5; round++) {
        playRound();
    };

    if (humanScore == computerScore) {
        console.log("You are tie with the computer.")
    } else if (humanScore > computerScore) {
        console.log("The ultimate winner is Player Human!")
    } else {
        console.log("The ultimate winner is Player Computer!")
    }
};
