// Could do either challenge: randomize squarees RGB values with each mod OR implement a progressive darkening effect where each interaction darkens the square by 10%, so you will have a fully black square in 10 interactions


const etchHeader = document.querySelector('#etchheader');
const etchGrid = document.querySelector('#etchgrid');
const gridNumber = document.querySelector('#gridnumber');
const gridBtn = document.querySelector('#getgridnumber');

for (let i = 1; i < 257; i++) {
    let gridBox = document.createElement('div');
    gridBox.classList.add('etchgridbox');
    let dimensions = 800 / 16; 
    gridBox.style.height = `${dimensions}px`;
    gridBox.style.width = `${dimensions}px`;
    
    etchGrid.appendChild(gridBox);
   
    gridBox.addEventListener('mouseover', () => {
    gridBox.style.backgroundColor = 'red';
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
        gridBox.style.backgroundColor = 'red';
        })
    }
})

