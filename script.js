const container = document.getElementById('container');
const sizeBtn = document.getElementById('size');

function createGrid(size = 16) {
  container.innerHTML = '';
  const totalCells = size * size;

  const cellSize = 100 / size;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.style.flex = `0 0 ${cellSize}%`;
    cell.style.height = `${cellSize}%`;

    container.appendChild(cell);
  }
}

container.addEventListener('mouseover', (e) => {
  const colorCell = e.target.closest('.cell');
  if (colorCell !== null) {
    colorCell.style.backgroundColor = 'black';
  }
});

sizeBtn.addEventListener('click', () => {
  const changedSize = +prompt('Enter grid size 1 - 100');
  if (changedSize <= 100) {
    createGrid(changedSize);
  } else {
    createGrid();
  }
});

createGrid();
