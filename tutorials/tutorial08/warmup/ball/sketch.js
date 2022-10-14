const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
let width = 50;  
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;

function draw() {
    // frameRate(4);
    clear();

    if (x >= 475) {
        speed = -5;
        width = width + 2;
    } else if (x <= 175) {
        speed = +5;
        width = width + 2;
    }

    // if (x >= 475) {
    //     speed = (speed + 1) * -1;
    // } else if (x <= 175) {
    //     speed = -1 * speed +1 ;
    // }


    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill('black');
    circle(x, canvasHeight/2, width);
    x += speed;
    console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}