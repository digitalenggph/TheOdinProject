elementsArr = ["rock", "paper", "scissors"];

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * 3);
    return elementsArr.at(randomIndex);
}