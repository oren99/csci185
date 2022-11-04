const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;
let doJump = false;
let counter = 0;
let initialY = y;

const c1 = {
    x: canvasWidth / 2,
    y: canvasHeight / 2 - 50,
    size: 60,
    speed: 8,
    color: 'black'
};


function setup() {
    createCanvas(canvasWidth, canvasHeight);
    circle(x, y, 50);
    displayMessage();
}


function draw() {
    clear();
    c1.x += c1.speed;

    if (doJump) {
        // animate for one Math.sin cycle, then 
        // turn doJump variable to false
        const jumpHeight = -15;
        const jumpSpeed = 5;
        y += jumpHeight * Math.sin(counter / jumpSpeed); 
        counter++;
        if (y > initialY) {
            doJump = false;
        }
    }

    drawCreature(x, y, 50, 'pink', 'white', 'blue')

    drawCreature(c1.x,c1.y,c1.size, 'black', 'black', 'red')

    

    // message:
    displayMessage();

}




function jump(ev) {
    console.log(ev.code);
    if (ev.code == 'Space') {
        doJump = true;
    }
    
    // message
   displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Press the spacebar to jump.", canvasWidth/2, canvasHeight/2);
}

// Add event listener on keydown
document.addEventListener('keydown', jump);

function drawCreature(centerX, centerY, size, color1, color2, color3) {
    fill(color1);
    circle(centerX, centerY, size);
    fill(color2);
    circle(centerX, centerY, size * .85);
    fill(color1); 
    circle(centerX + (size * .5), centerY - (size / 2.5), size / 3);
    fill(color1);
    circle(centerX - (size * .5), centerY - (size / 2.5), size / 3);
    fill(color3);
   circle(centerX + (size * .2), centerY - (size * .2), size / 10);
   fill(color3);
   circle(centerX - (size * .2), centerY - (size * .2), size / 10);
     
}


