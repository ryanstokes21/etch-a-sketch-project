const container = document.getElementById('container');

function createGrid(size = 16) {
  const totalCells = size * size;

  const boxSize = 100 / size;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.style.flex = `0 0 ${boxSize}%`;
    cell.style.height = `${boxSize}%`;

    container.appendChild(cell);
  }
}

createGrid();
