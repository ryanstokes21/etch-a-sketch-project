const gridContainer = document.getElementById('grid-container');
const gridSizeBtn = document.getElementById('grid-size-btn');

function createGrid(size = 16) {
  for(let i = 0; i < (size * size); i++) {
    const gridItem = document.createElement('div');
    gridContainer.style.border = '1px solid black';
    let gridItemSize = 100 / size;

    gridItem.classList.add('grid-item');

    gridItem.style.width = `${gridItemSize}%`;
    gridItem.style.height = `${gridItemSize}%`;
    gridItem.style.border = '1px solid black';

    gridContainer.appendChild(gridItem);
    colorGrid(gridItem);
  }
}

function colorGrid(item) {
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = 'black';
  })
}

function changeGridSize() {
  let minSize = 1;
  let maxSize = 100;
  let userInput;

  do {
    userInput = prompt('Enter a number between 1 - 100 to change the grid size.');

    if (userInput === null || userInput === '') {
      createGrid(userInput = 16);
      break;
    }

    userInput = Number(userInput);

  } while(isNaN(userInput) || userInput < minSize || userInput > maxSize);


  gridContainer.innerHTML = '';
  createGrid(userInput);
}

gridSizeBtn.addEventListener('click', changeGridSize);

createGrid();