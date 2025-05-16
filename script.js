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

    // Round 1
    roundWinner = playRound(getHumanChoice(), getComputerChoice());
    if (roundWinner === 'human') {
        humanScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
    }

    // Round 2
    roundWinner = playRound(getHumanChoice(), getComputerChoice());
    if (roundWinner === 'human') {
        humanScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
    }

    // Round 3
    roundWinner = playRound(getHumanChoice(), getComputerChoice());
    if (roundWinner === 'human') {
        humanScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
    }

    // Round 4
    roundWinner = playRound(getHumanChoice(), getComputerChoice());
    if (roundWinner === 'human') {
        humanScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
    }

    // Round 5
    roundWinner = playRound(getHumanChoice(), getComputerChoice());
    if (roundWinner === 'human') {
        humanScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
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