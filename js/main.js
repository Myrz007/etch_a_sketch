const createGridButton = document.getElementById('create-grid');
const container = document.getElementById('container');

function createSquare(number) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black'
    });

    container.appendChild(square);
}

function createGrid(number) {
    const gridDimension = number ** 2;
    const gridTemplateSize = `repeat(${number}, 1fr)`;

    container.style.gridTemplateColumns = gridTemplateSize;
    container.style.gridTemplateRows = gridTemplateSize;

    for (let i = 0; i < gridDimension; i++) createSquare(number);
}

createGridButton.addEventListener('click', () => {
    const warningText = document.querySelector('h4');
    const gridSize = parseInt(document.getElementById('grid-size').value);
    const squares = document.querySelectorAll('.square');

    if (gridSize < 1 || gridSize > 100) warningText.style.color = 'red';
    else {
        warningText.style.color = 'black';
        
        if (squares.length) squares.forEach((square) => square.remove());

        createGrid(gridSize);
    }
});
