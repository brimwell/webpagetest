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

function calculator (a, b, op) {
    switch(op) {
        case 'add':
            return add(a,b);
            break;
        case 'subtract':
            return subtract(a,b);
            break;
        case 'multiply':
            return multiply(a,b);
            break;
        case 'divide':
            return divide(a,b);
            break;
    }
};

let numOne;
let numTwo;
let operator;
let clearDisplayToggle = false;

const calcDisplay = document.querySelector('#calcdisplay');
function displayNum(num) {
    if (num.toString().length > 15) {
        calcDisplay.textContent = 'too large';
        numOne = undefined;
        numTwo = undefined;
        operator = undefined;
        clearDisplayToggle = true;
        return;
    }
    if (+calcDisplay.textContent === 0 || clearDisplayToggle ) {
        calcDisplay.textContent = num;
        clearDisplayToggle = false;
    } else if (calcDisplay.textContent.length >= 15) {
        console.log('Too many numbers');
        return;
    } else {
        calcDisplay.textContent = calcDisplay.textContent + num;
    }
}

const numberBtns = document.querySelectorAll('.numberbtn');
numberBtns.forEach(item => {
    item.addEventListener('click', function(){
        displayNum(+item.id);
    })
});

const operatorBtns = document.querySelectorAll('.operatorbtn');
operatorBtns.forEach(item => {
    item.addEventListener('click', function() {
        if (calcDisplay.textContent === 'too large') {
            displayNum(0);
            return;
        }
        if (!numOne) {
            numOne = +calcDisplay.textContent;
            operator = item.id;
            clearDisplayToggle = true;
        }  else {
            numTwo = +calcDisplay.textContent;
            let result = calculator(numOne, numTwo, operator);
            displayNum(result);
            // calcDisplay.textContent = calculator(numOne, numTwo, operator);
            numOne = +calcDisplay.textContent;
            numTwo = undefined;
            operator = item.id;
            clearDisplayToggle = true;
        }
    })
});

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', function() {
    numTwo = +calcDisplay.textContent;
    let result = calculator(numOne, numTwo, operator);
    displayNum(result);
    // calcDisplay.textContent = calculator(numOne, numTwo, operator);
    numOne = undefined;
    numTwo = undefined;
    operator = undefined;
    clearDisplayToggle = true;
});

const clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', function() {
    calcDisplay.textContent = 0;
    numOne = undefined;
    numTwo = undefined;
    operator = undefined;
})

/*


Further On:
Display number current:
    If you try to put in a number over 15 digits it just won't add
        Ideally, I would show that with the border getting red briefly
    If a calculation goes over 15 digits, it will show "too large". 

    Issue: when a zero, odd things happen when you press an operator and a number and equal

Limit on display number
    I have numbers coming up through displayNum function but ALSO through just some calculates, so I should probably clean that up    


Some indication of a button press
    Some indication of what operator was pressed?
    
    Rules for decimals and display number
    Clean up visuals
    Is there an issue with getting nums from display number?

*/
