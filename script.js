let container = document.querySelector(".container");

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < rows; i++) {
        for (let i = 0; i < cols; i++) {
            var cell = document.createElement("div");
            container.appendChild(cell).className = "gridCell";
        }
    }
}

makeGrid(16, 16);

let gridCell = document.querySelectorAll(".gridCell"); 
let coloredGridCell;

function blackColor() {
    for (let i = 0; i < gridCell.length; i++) {
        coloredGridCell = gridCell[i];
        coloredGridCell.addEventListener("mouseover", function() {
            this.style.backgroundColor = 'black';
        });
    }
}

function redColor() {
    for (let i = 0; i < gridCell.length; i++) {
        coloredGridCell = gridCell[i];
        coloredGridCell.addEventListener("mouseover", function() {
            this.style.backgroundColor = 'red';
        });
    }
}

function greenColor() {
    for (let i = 0; i < gridCell.length; i++) {
        coloredGridCell = gridCell[i];
        coloredGridCell.addEventListener("mouseover", function() {
            this.style.backgroundColor = 'green';
        });
    }
}

function blueColor() {
    for (let i = 0; i < gridCell.length; i++) {
        coloredGridCell = gridCell[i];
        coloredGridCell.addEventListener("mouseover", function() {
            this.style.backgroundColor = 'blue';
        });
    }
}

function randomColor() {
    var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    var rgbString = r + ", " + g + ", " + b;

    for (let i = 0; i < gridCell.length; i++) {
        coloredGridCell = gridCell[i];
        coloredGridCell.addEventListener("mouseover", function() {
            this.style.backgroundColor = 'rgb(' + rgbString + ')';
        });
    };
};

function eraseColor() {
    for (let i = 0; i < gridCell.length; i++) {
        coloredGridCell = gridCell[i];
        coloredGridCell.addEventListener("mouseover", function() {
            this.style.backgroundColor = 'white';
        });
    }
}

function resize () {
    newSize = parseInt(prompt('Enter new size'));
    makeGrid(newSize, newSize);
}