var headX = 400; 
var headY = 100;
var headDirection = 1;

var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var x = 100;
var y = 200;
var diameter = 50;

var movement = 13;
var squareY = 150;
var squareY2 = 150;
var rectX = 340;
var rectY = 180;
var ellipseX = 390;
var size = 32
var movement = 10
var movement2 = 5
var movement3 = 15
var movment4 = 20
var movement5 = 30
var movement6 = 5
var counter = 0
function setup() {
    createCanvas(800,700);}
  function draw() {
    background(redColor,greenColor,blueColor);
    ellipse(x,y,diameter);
    background(220);
    ellipse(headX,300,400,470);
    headX+= movement;
    if(headX >= 800)
    {
      movement = -10
    }
    if(headX <= 0)
    {
       movement = 10
    }
    square(400,squareY,90);
    squareY+= movement;
    if(squareY >= 700)
    {
      movement2 = -5
    }
    if(squareY >= 0)
    {
       movement2 = 5
    }
 square(250,squareY2,90);
    squareY2+= movement; 
    if(squareY2 >= 700)
    {
      movement3 = -15
    }
    if(squareY2 <= 0)
    {
       movement3 = 15
    }
    rect(rectX, rectY,60,20);
    rectX+= movement5;
    rectY+= movement5;
    if(rectX >= 800||rectY >= 700)
    {
      movement5 = -30
    }
    if(rectY <= 0||rectX <= 0)
    {
       movement5 = 30
    }
    rect(490,180,90,20);
    rect(200,180,50,20);
    triangle(300, 290, 370, 200, 400, 290);
    line(300, 450, 450, 450);
    line(300, 450, 270,400);
    line(270, 400, 500, 400);
    line(450, 450, 500,400);
    ellipse(ellipseX,100,210,70);
    ellipseX+= 3
    ellipseX+= movement;
    if(ellipseX >= 800)
    {
      movement4 = -20
    }
    if(ellipseX <= 0)
    {
       movement4 = 20
    }
    textSize(32);
    text('Self Portrait', 300, 30);
    textSize(50);
    fill(120);
    size += movement6 
    counter ++ 
    textSize(size);
    text('Phillip Surechief', 250, 600)
    if(counter >= 5)
    {
      movement6 *= -1
      counter = 0
    }
    strokeWeight(30)
    point(400, 500)
  }