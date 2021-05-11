const grid = document.querySelector("div[id = 'grid-container']");

//sets mousedown to true, must hold and hover to color board
isMouseDown = false;
function MouseDown() {
    isMouseDown = true;
    this.classList.add('color');
}

//changes the color of tile
function changeColor(e) {
    if (isMouseDown)
        this.classList.add('color');
}

//removes the color from a tile
function removeColor(e) {
    this.classList.remove('color');
    console.log(e);
}

function removeAllNodes(parent, gridSize) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log(parent.firstChild);
}

function createGrid(gridSize) {
    removeAllNodes(grid);
    squares = [];
    grid.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
    grid.style['grid-template-rows'] = `repeat(${gridSize}, 1fr)`;
    for (i = 0; i < gridSize ** 2; i++) {
        squares[i] = document.createElement('div');
        squares[i].classList.add('square');
        squares[i].addEventListener('mouseover', changeColor);
        squares[i].addEventListener('mousedown', MouseDown);
        //squares[i].addEventListener('click', removeColor);
        grid.append(squares[i]);
    }
}

//start off with an 50x50 grid
createGrid(50);

//removes mousedown property
const body = document.querySelector('body');
body.addEventListener('mouseup', MouseUp);
function MouseUp() {
    isMouseDown = false;
}

//clearboard button
const button = document.querySelector('button');
button.addEventListener('click', clearBoard);
function clearBoard() {
    squares.forEach(square => {
        square.classList.remove('color');
    });
}

//change grid size
const slider = document.querySelector("input[type = 'range']");
slider.addEventListener('mouseup', changeGridSize);
function changeGridSize() {
    createGrid(slider.value);
}

document.querySelector('.grid')
console.log(grid);
