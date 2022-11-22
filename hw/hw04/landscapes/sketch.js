const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    drawStars();
    drawBubbles();
}

function drawStars() {
    strokeWeight(0);
    fill('yellow');
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 3 + 0.5;
        circle(x, y, width);
    }
}

function drawBubbles() {
    strokeWeight(1);
    stroke('pink');
    noFill()
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 20 + 5;
        circle(x, y, width);
    }
}
