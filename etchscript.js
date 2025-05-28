// Could do either challenge: randomize squarees RGB values with each mod OR implement a progressive darkening effect where each interaction darkens the square by 10%, so you will have a fully black square in 10 interactions


const etchHeader = document.querySelector('#etchheader');
const etchGrid = document.querySelector('#etchgrid');
const gridNumber = document.querySelector('#gridnumber');
const gridBtn = document.querySelector('#getgridnumber');
let currentOpacity = 0;

for (let i = 1; i < 257; i++) {
    let gridBox = document.createElement('div');
    gridBox.classList.add('etchgridbox');
    let dimensions = 800 / 16; 
    gridBox.style.height = `${dimensions}px`;
    gridBox.style.width = `${dimensions}px`;
    
    etchGrid.appendChild(gridBox);

    currentOpacity += 0.1;
    console.log(currentOpacity);
   
    gridBox.addEventListener('mouseover', () => {
    gridBox.style.backgroundColor = 'black';
    gridBox.style.opacity = currentOpacity;
    })
}

let warning = document.createElement('p');
warning.style.color = 'red';
etchHeader.appendChild(warning);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};


gridBtn.addEventListener('click', () => {
    if (+gridNumber.value < 1 || +gridNumber.value > 100) {
        warning.textContent = '';
        warning.textContent = 'Please enter in a number between 1 and 100';
        etchHeader.appendChild(warning);
        gridNumber.value = '';
        return;
    }
    
    warning.textContent = '';
    let numOfSide = +gridNumber.value;
    let totalSquares = numOfSide * numOfSide;
    removeAllChildNodes(etchGrid);
    
    for (let i = 1; i <= totalSquares; i++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('etchgridbox');
        let dimensions = 800 / numOfSide; 
        console.log(`${dimensions}px`);
        gridBox.style.height = `${dimensions}px`;
        gridBox.style.width = `${dimensions}px`;
        
        etchGrid.appendChild(gridBox);
        gridNumber.value = '';

        gridBox.addEventListener('mouseover', () => {
        gridBox.style.backgroundColor = 'black';
        })
    }
})

// To add a random color for each square
// This code will create a random RGB color in the for loop
    // let numOne = Math.floor((Math.random() * 255) + 1);
    // let numTwo = Math.floor((Math.random() * 255) + 1);
    // let numThree = Math.floor((Math.random() * 255) + 1);
    // let rgb = `rgb(${numOne}, ${numTwo}, ${numThree})`;
    // console.log(rgb);
// Then change the backgroundColor at end of loop to rgb from the color

