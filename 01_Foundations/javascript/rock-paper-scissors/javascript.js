const buttonChoices = document.querySelector('#button-choices');
const buttons = document.querySelectorAll('#button-choices button');
const buttonReset = document.querySelector('#reset');
const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");
const scoreboard = document.querySelector('h3');
const elementsArr = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

buttonChoices.addEventListener('click', playGame);
buttonReset.addEventListener('click', reset);


function playGame(e) {
    if (!e.target.matches('button')) return;   // do not proceed logic if item clicked is not button

    const target = e.target;
    const humanChoice = target.id.replace("btn-", "");
    const computerChoice = getComputerChoice();
    const winner = playRound(humanChoice, computerChoice);

    if (winner === "human") humanScore++;
    if (winner === "computer") computerScore++;
    updateScoreboard();

    if (humanScore === 5 || computerScore ===5) {
        disableButtons();
        announceWinner();
    };   
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return elementsArr[randomIndex];
};

function playRound(human, computer) {
    if (human === computer) {
        return "tie"
    } else if (
        (human === "rock" && computer === "scissors") || 
        (human === "paper" && computer === "rock" )||
        (human === "scissors" && computer === "paper") 
    ) {
        return "human";
    } else {
        return "computer";
    }
};

function updateScoreboard() {
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
};

function disableButtons(){
    buttons.forEach(button => button.disabled = true);
};

function enableButtons(){
    buttons.forEach(button => button.disabled = false);
};

function announceWinner() {
    const winner = (humanScore > computerScore)
        ? "Human wins!"
        : "Computer wins!"

    const winnerSpan = document.createElement("span");
    winnerSpan.textContent = winner;
    scoreboard.appendChild(winnerSpan);
};

function reset() {
    computerScore = 0;
    humanScore = 0;
    updateScoreboard();
    enableButtons();
    scoreboard.textContent = "Scoreboard "
};

