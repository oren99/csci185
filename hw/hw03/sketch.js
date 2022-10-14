function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(300, 300, 200, 'black', 'pink', 'white');
    drawCreature(100, 160, 80, 'yellow', 'white', 'blue');
    drawCreature(450, 500, 100, 'pink', 'white', 'black');
    drawCreature(700, 250, 70, 'green', 'lightblue', 'white');
    
    
    
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

   
    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    // drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    // drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

