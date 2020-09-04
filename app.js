let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userHand_div = document.getElementById("userImg");
const computerHand_div = document.getElementById("computerImg");
const winPercentage_span = document.getElementById("win-percentage");

function winPercentage (userScore, computerScore) {
    winPercentage_span.innerHTML = Math.floor(userScore / (userScore + computerScore) * 100);
}

function getComputerChoice() {
    const choices = ['r', 'p' , 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    else return "Scissors";
}

function displayHands(userChoice, computerChoice) {
    console.log(`user choice: ${userChoice}, computer choice: ${computerChoice}`)

    switch (userChoice) {
        case "r":
            userHand_div.src = "images/rock.png";
            break;
        case "p":
            userHand_div.src = "images/paper.png";
            break;
        case "s":
            userHand_div.src = "images/scissors.png";
            break;
    }
    
    switch (computerChoice) {
        case "r":
            computerHand_div.src = "images/rock.png";
            break;
        case "p":
            computerHand_div.src = "images/paper.png";
            break;
        case "s":
            computerHand_div.src = "images/scissors.png";
            break;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    winPercentage (userScore, computerScore)
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice).toLowerCase()}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    winPercentage (userScore, computerScore)
    result_div.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice).toLowerCase()}. Computer wins!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `${convertToWord(computerChoice)} equals ${convertToWord(userChoice).toLowerCase()}. It's a draw.`;
    winPercentage (userScore, computerScore)
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    displayHands(userChoice, computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    
    paper_div.addEventListener('click', () => game("p"));
    
    scissors_div.addEventListener('click', () => game("s"));
}

main();