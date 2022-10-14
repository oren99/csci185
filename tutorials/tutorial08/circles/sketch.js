function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let counter = 0;
    while (counter < 200) {
        circle(500, 0 + counter*18, counter*12);
        if (counter % 3 == 0) {
            fill('teal');
        }
        else if (counter % 2 == 0) { 
            fill('darkblue');
    
        }
        else {
            fill('lightblue')
        }
        counter += 1;
    }
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
