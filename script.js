

// The Game of Rock, Paper, Scissors

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 9);
    let compChoice;

    if (choice >= 0 && choice <3) {
        compChoice = 'rock';
    } else if (choice > 2 && choice < 6) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }

    return compChoice;
}

const startGameBtn = document.querySelector('#startgame');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsBox = document.querySelector('#resultsbox');
const resultsText = document.querySelector('#resultstext');
const humanScoreDisplay = document.querySelector('#humanscore');
const computerScoreDisplay = document.querySelector('#computerscore');
const declareWinner = document.createElement('p');


let humanScore = 0;
let computerScore = 0;

humanScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;

let rockCall = function() {
    playRound('rock', getComputerChoice());
};
let paperCall = function() {
    playRound('paper', getComputerChoice());
};
let scissorsCall = function() {
    playRound('scissors', getComputerChoice());
};

let enabled = true;

startGameBtn.addEventListener('click', () => {
    if (enabled) {
        // Reset all scoring and text
        humanScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        declareWinner.textContent = '';
        resultsText.textContent = '';

        //Activate Selection Buttons
        rock.addEventListener('click', rockCall);
        paper.addEventListener('click', paperCall);
        scissors.addEventListener('click', scissorsCall);

        //Change styling of buttons to indicate active
        startGameBtn.removeAttribute('class', 'activebutton');
        startGameBtn.classList.add('inactivebutton');
        rock.removeAttribute('class', 'inactivebutton');
        rock.classList.add('activebutton');
        paper.removeAttribute('class', 'inactivebutton');
        paper.classList.add('activebutton');
        scissors.removeAttribute('class', 'inactivebutton');
        scissors.classList.add('activebutton');
        enabled = false;
    }
})



function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            resultsText.textContent = `It's a tie! You both chose ${humanChoice}.`;
        } else if (computerChoice === 'paper') {
            resultsText.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        } else if (computerChoice === 'scissors') {
            resultsText.textContent = `You win, ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        } 
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            resultsText.textContent = `You win, ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        } else if (computerChoice === 'paper') {
            resultsText.textContent = `It's a tie! You both chose ${humanChoice}.`;
        } else if (computerChoice === 'scissors') {
            resultsText.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        } 
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            resultsText.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        } else if (computerChoice === 'paper') {
            resultsText.textContent = `You win, ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        } else if (computerChoice === 'scissors') {
            resultsText.textContent = `It's a tie! You both chose ${humanChoice}.`;
        }
    } 

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;


    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            declareWinner.textContent = `You win the game with a score of ${humanScore} over the computer's score of ${computerScore}. Congratulations!`;
        } else if (computerScore === 5) {
            declareWinner.textContent = `The computer wins the game with a score of ${computerScore} over your score of ${humanScore}. Better luck next time!`;
        }

        resultsBox.appendChild(declareWinner);
        rock.removeEventListener('click', rockCall);
        paper.removeEventListener('click', paperCall);
        scissors.removeEventListener('click', scissorsCall);

        //Change styling of buttons to indicate active
        startGameBtn.removeAttribute('class', 'inactivebutton');
        startGameBtn.classList.add('activebutton');
        rock.removeAttribute('class', 'activebutton');
        rock.classList.add('inactivebutton');
        paper.removeAttribute('class', 'activebutton');
        paper.classList.add('inactivebutton');
        scissors.removeAttribute('class', 'activebutton');
        scissors.classList.add('inactivebutton');
        enabled = true;

    }

}



