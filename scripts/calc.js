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

// (result = numOne, numTwo cleared, display shows result)
let result;
function calculate (a, b, op) {
    switch(op) {
        case 'add':
            result = add(a,b);
            numOne = result;
            numTwo = undefined;
            calcDisplay.textContent = +result;
            break;
        case 'subtract':
            result = subtract(a,b);
            numOne = result;
            numTwo = undefined;
            calcDisplay.textContent = +result;
            break;
        case 'multiply':
            result = multiply(a,b);
            numOne = result;
            numTwo = undefined;
            calcDisplay.textContent = +result;
            break;
        case 'divide':
            result = divide(a,b);
            numOne = result;
            numTwo = undefined;
            calcDisplay.textContent = +result;
            break;
    }
};

let numOne;
let numTwo;
let operator;
let lastButtonPressed;

const calcDisplay = document.querySelector('#calcdisplay');
const numberBtns = document.querySelectorAll('.numberbtn');
const operatorBtns = document.querySelectorAll('.operatorbtn');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clearbtn');

function displayNum(num) {
    if (clearDisplayToggle) {
        calcDisplay.textContent = num;
        clearDisplayToggle = false;
    } else {
        calcDisplay.textContent = calcDisplay.textContent + num;
    }
}

numberBtns.forEach(item => {
    item.addEventListener('click', function(){
        if (+calcDisplay.textContent === 0 || lastButtonPressed === 'operator') {
            calcDisplay.textContent = +item.id;
            console.log('display is 0 or lbp is operator')
        } else if (lastButtonPressed === 'number' && +calcDisplay.textContent !== 0) {
            calcDisplay.textContent = calcDisplay.textContent + +item.id;
            console.log('lbp is number and display is not 0')
        } else if (lastButtonPressed === 'equals') {
            console.log('Warning');
            return;
        } else {
            console.log(`I didn't plan for this`)
        }
        lastButtonPressed = 'number';
    })
});

operatorBtns.forEach(item => {
    item.addEventListener('click', function() {
        if (lastButtonPressed === 'number' && !numOne && !operator ||
            lastButtonPressed === 'equals') {
                numOne = +calcDisplay.textContent;
                operator = item.id;
                console.log(`either lbp is number and numOne and operator are undefined OR lbp is equals`);
        } else if (lastButtonPressed === 'number' && numOne && operator) {
            numTwo = +calcDisplay.textContent;
            calculate(numOne, numTwo, operator);
            operator = item.id;
            console.log(`lbp is number and numOne and op are filled`);
        } else if (lastButtonPressed === 'operator') {
            operator = item.id;
            console.log(`lbp was operator`)
        } else if (!lastButtonPressed) {
            console.log('Warning');
            return;
        }

        lastButtonPressed = 'operator';
    })
});

equalsBtn.addEventListener('click', function() {
    if (lastButtonPressed === 'operator' || (!numOne && !operator)) {
        console.log(`Warning`)
        return;
    } else if (lastButtonPressed === 'number' && numOne && operator) {
        numTwo = +calcDisplay.textContent;
        calculate(numOne, numTwo, operator);
        operator = undefined;
        console.log(`normal equal press`);
    } else if (lastButtonPressed === 'equals') {
        console.log(`Warning same equal pressed`);
    } else {
        console.log(`Something I haven't planned for `);
    }

    lastButtonPressed = 'equals';
});

clearBtn.addEventListener('click', function() {
    calcDisplay.textContent = 0;
    numOne = undefined;
    numTwo = undefined;
    operator = undefined;
    lastButtonPressed = undefined;
})

/*4

TO DO: 
OK, I think the logic is good now.  the addition of lbp is probably a good one
So next:

Limit on Display Number? - 
    including decimals and rounding
Some indication of a button press
Warning symbol?
Clean up calculate function? Or with simplifying numbers?
Clean up Visuals a bit? 
Am I using all class and ids that i need to?

*/
