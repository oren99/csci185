const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let currentX = 500;
let currentY = 500; 
let isFollowing = false; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // message
    drawCreature(currentX, currentY, 100, 'pink', 'white', 'blue');
}

function mouseClicked() {
    // circle(mouseX, mouseY, Math.random()* 50 + 50);
    // drawCreature(mouseX, mouseY, 100, 'pink', 'white', 'blue');
    if (isFollowing == false) {  isFollowing = true;
    }   else { isFollowing = false;
        
    }
}

function mouseMoved() {
    // circle(mouseX, mouseY, Math.random()* 50 + 50);
    if (isFollowing == true) {
        clear ();
        drawCreature(mouseX, mouseY, 100, 'pink', 'white', 'blue');
    }
}

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