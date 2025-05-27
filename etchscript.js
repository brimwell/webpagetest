const etchGrid = document.querySelector('#etchgrid');
for (let i = 1; i < 257; i++) {
    let gridBox = document.createElement('div');
    gridBox.classList.add('etchgridbox');
    etchGrid.appendChild(gridBox);
}