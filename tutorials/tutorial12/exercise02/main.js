const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
 


function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:

    drawShape(100, 100, 150, 'red', 'blue');
    drawShape(250, 100, 60, 'blue', 'red');

    drawGrid(canvasWidth, canvasHeight);
    
}

function drawShape(x, y, size, color1, color2) {
fill(color1);
circle(x, y, size);
fill(color2);
circle(x, y, size * .5);
}

// function definition goes here:
