const buttonChoices = document.querySelector('#button-choices');
const buttons = document.querySelectorAll('#button-choices button')
const humanScoreText = document.querySelector("#human-score")
const computerScoreText = document.querySelector("#computer-score")

let elementsArr = ["rock", "paper", "scissors"]
let computerScore = 0;
let humanScore = 0;

buttonChoices.addEventListener('click', (e) => {
    let target = e.target;
    let humanChoice = target.id.replace("btn-", "");
    let computerChoice = getComputerChoice();

    if (humanScore !== 5 && computerScore !==5) {
        playRound(humanChoice, computerChoice);
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
    } else {
        for (const button of buttons) {
            button.disabled = true;
        }
    };
});

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    console.log(`Computer chose ${elementsArr.at(randomIndex)}`);
    return elementsArr.at(randomIndex);
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

// function playGame() {


//     while (humanScore !== 5 && computerScore !==5) {
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);




//         console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
//     }

// };

function announceWinner(humanScore, computerScore) {
    if (humanScore == computerScore) {
        console.log("You are tie with the computer.");
    } else if (humanScore > computerScore) {
        console.log("The ultimate winner is Player Human!");
    } else {
        console.log("The ultimate winner is Player Computer!");
    };

    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
}
