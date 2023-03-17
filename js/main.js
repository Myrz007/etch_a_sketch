const createGridButton = document.getElementById('create-grid');
const container = document.getElementById('container');

function createSquare(number) {
    const squareDimension = `${Math.floor(960 / number)}px`;
    let square = document.createElement('div');

    square.classList.add('square');
    square.style.height = squareDimension;
    square.style.width = squareDimension;
    
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black'
    });

    container.appendChild(square);
}

function createGrid(number) {
    const gridDimension = number ** 2;

    for (let i = 0; i < gridDimension; i++) createSquare(number);
}

createGridButton.addEventListener('click', () => {
    const gridSize = Math.abs(parseInt(document.getElementById('grid-size').value) % 101) || 1;

    createGrid(gridSize);
});
