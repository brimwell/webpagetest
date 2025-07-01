
// Create Core Components of Gameboard and Player

let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const playerOne = {
    name: 'Player One',
    marker: 'X',
};

const playerTwo = {
    name: 'Player Two',
    marker: 'O',
};

let currentPlayer = playerOne;
let winresult = 'tbd';

let gameMessage = 'Welcome to Tic Tac Toe.';
let gameTurnMessage = 'Press start to begin a match';

// Start and Reset The Game

function startNewGame() {
    resetGame();
    gameMessage = 'Welcome to a new game!';
    gameTurnMessage = `It's ${currentPlayer.name}'s turn to place an ${currentPlayer.marker}.`;
    displayCurrentState();
    addStartButton('hidden');
    makeSquaresActive();
}

function resetGame() {
    gameBoard = [1,2,3,4,5,6,7,8,9];
    currentPlayer = playerOne;
    winresult = 'tbd';
}

function resetNames() {
    playerOne.name = 'Player One';
    playerTwo.name = 'Player Two';
}

// Switch Player and Message
function changeCurrentPlayer() {
    (currentPlayer === playerOne) ? currentPlayer = playerTwo : currentPlayer = playerOne;
    gameTurnMessage = `It's ${currentPlayer.name}'s turn to place an ${currentPlayer.marker}.`;
}

// Make Squares Active
function makeSquaresActive() {
    const allSquares = document.querySelectorAll('.gamesquare');
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].addEventListener('click', function() {
            takeTurn(allSquares[i].id - 1);
        });
    }
}


// Take a Turn, switching current player after each turn

function takeTurn(square) {
    if (typeof(gameBoard[square]) === 'number') {
        gameBoard[square] = currentPlayer.marker;
    } else {
        gameMessage = 'That square is taken. Please try again.'
        displayCurrentState();
        addStartButton('hidden');
        makeSquaresActive();
        return;
    }

    // Check For Win Before switching player(?)
    checkForWin();

    if (winresult === 'tbd') {
        // Switch Player
        changeCurrentPlayer();
        gameMessage = 'The game continues!';
        displayCurrentState();
        addStartButton('hidden');
        makeSquaresActive();
    } else if (winresult === 'draw') {
        gameMessage = 'The game is tied, no more moves left.';
        gameTurnMessage = 'Press start to play a new game.';
        displayCurrentState();
        addStartButton();
    } else {
        gameMessage = `Congratulations ${currentPlayer.name}! You have won this game!`;
        gameTurnMessage = 'Press start to play a new game.';
        displayCurrentState();
        addStartButton();        
    }
}

// Check For Winner

function checkForWin() {
    if ((gameBoard[0] === gameBoard[1])
        && (gameBoard[0] === gameBoard[2])) {
        winresult = currentPlayer;
    } else if ((gameBoard[0] === gameBoard[3]) 
        && (gameBoard[0] === gameBoard[6])) {
            winresult = currentPlayer;
    } else if ((gameBoard[0] === gameBoard[4])
        && (gameBoard[0] === gameBoard[8])) {
            winresult = currentPlayer;
    } else if ((gameBoard[1] === gameBoard[4])
        && (gameBoard[1] === gameBoard[7])) {
            winresult = currentPlayer;
    } else if ((gameBoard[2] === gameBoard[5]) 
        && (gameBoard[2] === gameBoard[8])) {
            winresult = currentPlayer;
    } else if ((gameBoard[2] === gameBoard[4]) 
        && (gameBoard[2] === gameBoard[6]) ) {
            winresult = currentPlayer;
    } else if ((gameBoard[3] === gameBoard[4])
        && (gameBoard[3] === gameBoard[5])) {
            winresult = currentPlayer;
    } else if ((gameBoard[6] === gameBoard[7]) 
        && (gameBoard[6] === gameBoard[8])) {
            winresult = currentPlayer;
    } else {
        for (let i = 0; i < gameBoard.length; i++) {
                if (typeof(gameBoard[i]) === 'number') {
                    gameMessage = 'The game continues!';
                    return;
                } 
        }
        winresult = 'draw';
    } 
}




// Display DOM

function displayCurrentState() {
    displayGameBoard();
    displayGameInfo();
} 

// On Window Load
displayCurrentState();
addStartButton();

function displayGameBoard() {
    const domGameBoard = document.querySelector('.gameboard');
    domGameBoard.textContent = '';

    for (let i = 0; i < gameBoard.length; i++) {
        const gameSquare = document.createElement('div');
        gameSquare.classList.add('gamesquare');
        gameSquare.id = gameBoard[i];

        if (i === 0 || i === 1 || i === 3 || i === 4 || i === 6 || i === 7) {
            gameSquare.classList.add('borderright');
        }
        if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5) {
            gameSquare.classList.add('borderbottom');
        }

        if (typeof(gameBoard[i]) !== 'number') {
            gameSquare.textContent = gameBoard[i];
        } 

        domGameBoard.appendChild(gameSquare);
    }
}

function displayGameInfo() {
    const gameInfoBox = document.querySelector('.gameinfo');
    gameInfoBox.textContent = '';

    const gameMessageBox = document.createElement('h2');
    const gameTurnBox = document.createElement('p');

    gameMessageBox.textContent = gameMessage;
    gameTurnBox.textContent = gameTurnMessage;

    gameInfoBox.appendChild(gameMessageBox);
    gameInfoBox.appendChild(gameTurnBox);
    
}

function addStartButton(displayOption) {
    const gameInfoBox = document.querySelector('.gameinfo');
    const startGameBtn = document.createElement('button');
    startGameBtn.classList.add('startgamebtn');

    if (displayOption === 'hidden') {
        startGameBtn.style.visibility = 'hidden' 
    };

    startGameBtn.textContent = 'Start Game';
    gameInfoBox.appendChild(startGameBtn);

    startGameBtn.addEventListener('click', activateModal);
}

// Gathering Names Addition


function activateModal() {
    // reset names , probably a better place for this but I'm not sure yet
    resetNames();

    const namesModal = document.querySelector('.modal');
    namesModal.style.display = 'inline-block';

    const namesBtn = document.querySelector('#gatherNamesBtn');
    const playerOneName = document.querySelector('#playerOne');
    const playerTwoName = document.querySelector('#playerTwo');
    namesBtn.addEventListener('click', function() {
        event.preventDefault();

        if (playerOneName.value !== '') {
            playerOne.name = playerOneName.value;
        }
        if (playerTwoName.value !== '') {
            playerTwo.name = playerTwoName.value
        }

        // Clear Modal
        playerOneName.value = '';
        playerTwoName.value = '';
        namesModal.style.display = 'none';

        startNewGame();

    })
}
