const gridContainer = document.getElementById('grid-container');

function createGrid(size) {
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

createGrid(16);