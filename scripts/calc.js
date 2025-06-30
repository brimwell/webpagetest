function add (a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};


let result;
function calculate (a, b, op) {
    switch(op) {
        case 'add':
            result = add(a,b);
            numOne = result;
            numTwo = undefined;
            displayNum(+result);
            break;
        case 'subtract':
            result = subtract(a,b);
            numOne = result;
            numTwo = undefined;
            displayNum(+result);
            break;
        case 'multiply':
            result = multiply(a,b);
            numOne = result;
            numTwo = undefined;
            displayNum(+result);
            break;
        case 'divide':
            if (b === 0) {
                displayWarning();
                calcDisplay.textContent = `Can't divide by 0`;
                return;
            }
            result = divide(a,b);
            numOne = result;
            numTwo = undefined;
            displayNum(+result);
            break;
    }
};


function displayNum(item) {
    if(item.toString().includes('.')) {
        let newItem = parseFloat(item.toFixed(8));
        calcDisplay.textContent = +newItem;
    } else {
        calcDisplay.textContent = +item;
    }
}

let numOne;
let numTwo;
let operator;
let lastButtonPressed;

const calcDisplay = document.querySelector('#calcdisplay');
const numberBtns = document.querySelectorAll('.numberbtn');
const operatorBtns = document.querySelectorAll('.operatorbtn');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clearbtn');
const decimalBtn = document.querySelector('.decimalbtn');
const backSpaceBtn = document.querySelector('.backspacebtn');

document.addEventListener('keydown', function (event) {
    switch(event.key) {
        case 'Backspace':
            backSpaceAction();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            numberBtnAction(event);
            break;
        case '.':
            decimalBtnAction();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            operatorBtnAction(event);
            break;
        case 'Enter':
        case '=':
            equalsBtnAction();
            break;
        case 'Escape':
            clearBtnAction();
            break;
        default: 
            break;
    }
});

function backSpaceAction () {
    if (calcDisplay.textContent === '0') {
        return;
    } else if (lastButtonPressed === 'number') {
        calcDisplay.textContent = calcDisplay.textContent.substring(0, calcDisplay.textContent.length - 1);

        if (calcDisplay.textContent === '') {
            calcDisplay.textContent = 0;
        }
    } else {
        return;
    }
};

function numberBtnAction (event) {
    let potentialContent;
    if (event.type === 'click') {
        potentialContent = event.target.id;
    } else {
        potentialContent = event.key;
    }

    if (calcDisplay.textContent === '0.') {
            calcDisplay.textContent = calcDisplay.textContent + +potentialContent;
        } else if (+calcDisplay.textContent === 0 || lastButtonPressed === 'operator') {
            calcDisplay.textContent = +potentialContent;
        } else if (lastButtonPressed === 'number' && +calcDisplay.textContent !== 0 && calcDisplay.textContent.length < 11) {
            calcDisplay.textContent = calcDisplay.textContent + +potentialContent;
        } else if (lastButtonPressed === 'number' && +calcDisplay.textContent !== 0 && calcDisplay.textContent.length > 10) {
            displayWarning();
        } else if (lastButtonPressed === 'equals') {
            displayWarning();
            return;
        } 
        lastButtonPressed = 'number';
}

function decimalBtnAction() {
    if (lastButtonPressed === 'equals' || (lastButtonPressed === 'number' && calcDisplay.textContent.toString().includes('.'))) {
        return;
    } else if (+calcDisplay.textContent === 0 || lastButtonPressed === 'operator') {
        calcDisplay.textContent = 0 + '.';
     } else {
        calcDisplay.textContent = calcDisplay.textContent + '.';
     }
     lastButtonPressed = 'number';
};

function operatorBtnAction(event) {
    let newOperator;
    if (event.type === 'click') {
        newOperator = event.target.id;
    } else if (event.key === '+') {
        newOperator = 'add';        
    } else if (event.key === '-') {
        newOperator = 'subtract';
    } else if (event.key === '*') {
        newOperator = 'multiply';
    } else if (event.key === '/') {
        newOperator = 'divide';
    }

    if (lastButtonPressed === 'number' && !numOne && !operator ||
            lastButtonPressed === 'equals') {
                numOne = +calcDisplay.textContent;
                operator = newOperator;
        } else if (lastButtonPressed === 'number' && numOne && operator) {
            numTwo = +calcDisplay.textContent;
            calculate(numOne, numTwo, operator);
            operator = newOperator;
        } else if (lastButtonPressed === 'operator') {
            operator = newOperator;
        } else if (!lastButtonPressed) {
            displayWarning();
            return;
        }

        lastButtonPressed = 'operator';
}

function equalsBtnAction() {
    if (lastButtonPressed === 'operator' || (!numOne && !operator)) {
        displayWarning();
        return;
    } else if (lastButtonPressed === 'number' && numOne && operator) {
        numTwo = +calcDisplay.textContent;
        calculate(numOne, numTwo, operator);
        operator = undefined;
    } else if (lastButtonPressed === 'equals') {
        displayWarning();
    } 

    lastButtonPressed = 'equals';
}

function clearBtnAction() {
    calcDisplay.textContent = 0;
    numOne = undefined;
    numTwo = undefined;
    operator = undefined;
    lastButtonPressed = undefined;
}

backSpaceBtn.addEventListener('click', backSpaceAction);
numberBtns.forEach(item => {
    item.addEventListener('click', numberBtnAction);
});
decimalBtn.addEventListener('click', decimalBtnAction);
operatorBtns.forEach(item => {
    item.addEventListener('click', operatorBtnAction);
});
equalsBtn.addEventListener('click', equalsBtnAction);

clearBtn.addEventListener('click', clearBtnAction);

function displayWarning() {
    calcDisplay.style.border = '3px solid red';
    function backToOriginal() {
        calcDisplay.style.border = '1px solid black';
    }
    setTimeout(backToOriginal, 3000);
};



// TESTING PLAYGROUND

