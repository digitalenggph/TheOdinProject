const elementsArr = ["rock", "paper", "scissors"];

const computerChoice = function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * 3);
    return elementsArr.at(randomIndex);
};

const humanChoice = function getHumanChoice() {
    let rawHumanChoice = prompt("Choose: rock, paper, scissors", getComputerChoice());
    let lowercaseHumanChoice = rawHumanChoice.toLocaleLowerCase();

    if (elementsArr.includes(lowercaseHumanChoice)) {
        return lowercaseHumanChoice;
    } else {
        console.log("No! You must choose from rocks, paper, scissors only.");
        getHumanChoice();
    }
};
