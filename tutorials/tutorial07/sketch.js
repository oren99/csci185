function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    // drawCircle(300, 300, 50, 'yellow');
    drawCircle(100, 100, 100, 'hotpink');
    drawCircle(300, 100, 100, 'teal');
    drawCircle(200, 100, 50, 'purple');
    drawCircle(400, 100, 50, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 70, 45, 'teal');
    drawOval(200, 200, 70, 45, 'hotpink');
    drawOval(300, 200, 70, 45, 'navy');
    drawOval(400, 200, 70, 45, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100, 'red', 'yellow');
    drawBullseye(200, 300, 50, 'red', 'yellow');
    drawBullseye(300, 300, 100, 'red', 'yellow');
    drawBullseye(400, 300, 50, 'red', 'yellow');

    // Exercise 4:
    drawFace();

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, color1, color2) {
    fill(color1);
    circle(centerX, centerY, size);
    fill(color2);
    circle(centerX, centerY, size * .75);
    fill(color1);
    circle(centerX, centerY, size * .5);
    fill(color2);
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace() {
    fill('white');
    circle(100, 400, 50);
    fill('black');
    circle(92, 392, 8);
    circle(108, 392, 8);
}
