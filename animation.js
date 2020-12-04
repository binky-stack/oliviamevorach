var x, r, y;

function setup() {
  createCanvas(1600, 1350);
  
noFill();
colorMode(RGB, 9, 20, 255, 10);
strokeWeight(105);
stroke(30, 500, 100, 0.3);
ellipse(10,10,30,30);
ellipse(70,70,90,90);
    
  y = 0;
} 

function draw() {
  
  x = random(210,5);

  if(random() > 4000) {
    r = random(300, 10);
  } else {
    r = random(200, 4000);
  }

  ellipse(x, y, r, r);
  y = y + 300;

  if(y > 60) {
    y = 10;
  }
}
