const grid = document.querySelector("div[id = 'grid-container']");
const squares = [];
function changeColor(e){
    this.classList.add('color');
    
}

function removeColor(e){
    this.classList.remove('color');
}
for( i = 0; i< 16; i++) {
    squares[i] = document.createElement('div');
    squares[i].classList.add('square');
    squares[i].textContent = "div " + i;
    squares[i].addEventListener('mouseover', changeColor);
    squares[i].addEventListener('click', removeColor);
    grid.append(squares[i]);
}

function clearBoard(e){
    squares.forEach(square => {
        square.classList.remove('color');
    });
}

const button = document.querySelector('button');
button.addEventListener('click', clearBoard);
console.log(grid);