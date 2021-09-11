let container = document.querySelector(".container");
let blackButton = document.getElementById('blackColor');
let redButton = document.getElementById('redColor');
let greenButton = document.getElementById('greenColor');
let blueButton = document.getElementById('blueColor');
let randomButton = document.getElementById('randomColor');
let eraseButton = document.getElementById('eraseColor');
let resetButton = document.getElementById('resetColor');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        var cell = document.createElement("div");
        container.appendChild(cell).className = "gridCell";
    };
};

makeRows(16, 16);

function buttonClicked() {
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

    blackButton.onclick = function() {
        blackColor();
    };
    
    redButton.onclick = function() {
        redColor();
    };
    
    greenButton.onclick = function() {
        greenColor();
    };
    
    blueButton.onclick = function() {
        blueColor();
    };
    
    randomButton.onclick = function() {
        randomColor();
    };
    
    eraseButton.onclick = function() {
        eraseColor();
    };
    
    resetButton.onclick = function() {
        location.reload(true);
    };
};

buttonClicked();