const container = document.getElementById('container');

function createGrid(number) {
    const gridDimension = parseInt(number) ** 2;

    for (let i = 0; i < gridDimension; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        });
        
        container.appendChild(square);
    }
}

createGrid(prompt('Enter a dimension:'));