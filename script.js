

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
//  Don't need if I have buttons in DOM
// function getHumanChoice() {
//     let humChoice = (prompt('Choose rock, paper, or scissors')).toLowerCase();
    
//     return humChoice;
// }

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsBox = document.querySelector('#resultsbox');
const resultsText = document.querySelector('#resultstext');
const humanScoreDisplay = document.querySelector('#humanscore');
const computerScoreDisplay = document.querySelector('#computerscore');
const declareWinner = document.createElement('p');

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

let humanScore = 0;
let computerScore = 0;

humanScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;



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
        } else {
            resultsText.textContent = `Hmmm, there seems to be something wrong.`;
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
        } else {
            resultsText.textContent = `Hmmm, there seems to be something wrong.`;
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
        } else {
            resultsText.textContent = `Hmmm, there seems to be something wrong.`;
        }
    } else {
        resultsText.textContent = `Hmmm, there seems to be an issue with your choice.`;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (humanScore === 5) {
        declareWinner.textContent = `You win the game with a score of ${humanScore} over the computer's score of ${computerScore}. Congratulations!`;
        resultsBox.appendChild(declareWinner);
    } else if (computerScore === 5) {
         declareWinner.textContent = `The computer wins the game with a score of ${computerScore} over your score of ${humanScore}. Better luck next time!`;
        resultsBox.appendChild(declareWinner);
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundWinner;

    // Loop to Play 5 Rounds
    for (let i = 1; i < 6; i++) {
        roundWinner = playRound(getHumanChoice(), getComputerChoice());
        if (roundWinner === 'human') {
            humanScore++;
        } else if (roundWinner === 'computer') {
            computerScore++;
        }
    }


    // Declare Winner
    if (humanScore > computerScore) {
        console.log(`You win! Your score was ${humanScore} and the computer scored only ${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`You lose... The computer scored ${computerScore} and you only scored ${humanScore}`);
    } else {
        console.log(`It looks like a tie after 5 rounds - you and the computer both scored ${humanScore}.`);
    }

}