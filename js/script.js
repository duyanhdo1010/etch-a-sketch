const contentGrid = document.querySelector('.content-grid');


// jobs to do: 
// 1. create webpage with a 16x16 grid of square divs.


function getGridValue() {
    const gridValue = document.querySelector('.grid-value').value;
    document.querySelector('.display-grid-value').textContent = gridValue;
    return gridValue;
}

function createGrid(gridValue = getGridValue()) {
    resetGridValue();
    for (let i = 0; i < gridValue; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item-row');
        div.style.cssText = 'border: 1px rgba(0, 0, 0, 0.041) solid; display: flex; flex-grow: 1;';
        contentGrid.appendChild(div);
        for (let j = 0; j < gridValue; j++) {
            const divColumn = document.createElement('div');
            divColumn.classList.add('grid-item-column');
            divColumn.style.cssText = 'border: 1px rgba(0, 0, 0, 0.041) solid; display: flex; flex: 1;';
            div.appendChild(divColumn);
        }
    }
}

function resetGridValue() {
    const gridItems = document.querySelectorAll('.grid-item-row', '.grid-item-column');
    gridItems.forEach(gridItem => {
        gridItem.remove();
    });
}
// 2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function hoverEffect() {
    const items = document.querySelectorAll('.grid-item-column');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = getRandomColor();
        });
    });
}

function resetGrid() {
    const items = document.querySelectorAll('.grid-item-column');
    items.forEach(item => {
        item.style.backgroundColor = 'white';
    });
}
