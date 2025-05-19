const test = document.querySelector(".testdiv");

const par = document.createElement('p');
par.textContent = `Hey, I'm red!`;
par.style.color = 'red';

const heading = document.createElement('h3');
heading.textContent = `I'm a blue h3!`;
heading.style.color = 'blue';

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const headingLrg = document.createElement('h1');
headingLrg.textContent = `I'm in a div`;

const divPar = document.createElement('p');
divPar.textContent = `ME TOO!`;

div.appendChild(headingLrg);
div.appendChild(divPar);

test.appendChild(par);
test.appendChild(heading);
test.appendChild(div);

console.log(test);

// The Hidden Console Game of Rock, Paper, Scissors

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

function getHumanChoice() {
    let humChoice = (prompt('Choose rock, paper, or scissors')).toLowerCase();
    
    return humChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
            return 'tie';
        } else if (computerChoice === 'paper') {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
            return 'computer';
        } else if (computerChoice === 'scissors') {
            console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
            return 'human';
        } else {
            console.log(`Hmmm, there seems to be something wrong.`);
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
            return 'human';
        } else if (computerChoice === 'paper') {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
            return 'tie';
        } else if (computerChoice === 'scissors') {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
            return 'computer';
        } else {
            console.log(`Hmmm, there seems to be something wrong.`);
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
            return 'computer';
        } else if (computerChoice === 'paper') {
            console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
            return 'human';
        } else if (computerChoice === 'scissors') {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
            return 'tie';
        } else {
            console.log(`Hmmm, there seems to be something wrong.`);
        }
    } else {
        console.log(`Hmmm, there seems to be an issue with your choice.`);
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