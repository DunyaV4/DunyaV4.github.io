
var x = -25

function setup() {
 // put setup code here
  createCanvas(displayWidth,displayHeight);
  background('#000000')


}

function draw() {
  // put drawing code here
  
  ellipse(50, 50, 80, 80);
   fill('black')
   stroke('black')

  
    ellipse(x, 50, 80, 80);
    fill('#white')
    stroke('white')

    x = x+ 0.1;
    
      rect(0, 300, displayWidth, displayHeight);


  triangle(200,400,520,253,900,400);

  triangle(-100, 400, 150, 200, 400, 400);

   triangle(200, 400, 450, 250, 800, 400);



}

