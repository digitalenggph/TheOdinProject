const elementsArr = ["rock", "paper", "scissors"];

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * 3);
    return elementsArr.at(randomIndex);
};

function getHumanChoice() {
    let rawHumanChoice = prompt("Choose: rock, paper, scissors", getComputerChoice());
    let humanChoice = rawHumanChoice.toLocaleLowerCase();
    
    if (elementsArr.includes(rawHumanChoice.toLowerCase())) {
        return humanChoice;
    } else {
        console.log("No! You must choose from rocks, paper, scissors only.");
        getHumanChoice();
    }
}