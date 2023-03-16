const createGridButton = document.getElementById('create-grid');
const container = document.getElementById('container');

function createGrid(number) {
    const gridDimension = number ** 2;

    for (let i = 0; i < gridDimension; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        });
        
        container.appendChild(square);
    }
}

createGridButton.addEventListener('click', () => {
    const gridSize = Math.abs(parseInt(document.getElementById('grid-size').value) % 101) || 1;

    createGrid(gridSize);
});
