
   var characterX = 100;
   var characterY = 100; 

   var W = 87;
   var S = 83;
   var A = 65; 
   var D = 68; 

   var shapeX = 30;
   var shapeY = 50;
   var shapeXspeed;
   var shapeYspeed;


   var mouseshapeX;
   var mouseshapeY;
   var mouseClicked;
   function setup()
   {
     createCanvas(500,600);

     shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   }

function draw()
{
     background(100);
     stroke(0);
     fill(0);

   rect (0,0,width,10);

   rect (0,0,10,height);

   rect (0,height-10, width, 10);

   rect (width-10,0,10,height-50);


   textSize(16);
   text("EXIT", width-50,height-50)

   
   fill(23,40,123);
   circle(characterX,characterY,25);

   
   if(keyIsDown(W))
  {
      characterY -= 10;
  }
   if(keyIsDown(S))
  {
    characterY += 10;
  }
  if(keyIsDown(A))
  {
    characterX -= 10;
  }
  if(keyIsDown(D))
  {
    characterX += 10;
  }

  
  fill(13,145,14);

  circle(shapeX, shapeY, 10);
  
  shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  
  
  shapeX += shapeXspeed;
  shapeY += shapeYspeed;

  if(shapeX > width)
  {
    shapeX = 0;
  }
  if(shapeX  < 0)
  {
    shapeX = width;
  }
  if(shapeY > height)
  {
    shapeY = 0;
  }
  if(shapeY < 0)
  {
    shapeY = height;
  }

  
  if(characterX > width && characterY > width-50)
  {
    fill(0);
    stroke(5);
    textSize(26);
    text("You win!", width/2-50, height/2-50);
  }

  
  fill(120,130,140);
  circle(mouseshapeX,mouseshapeY,25);
}   
  function mouseClicked()
{
  mouseshapeX = mouseX;
  mouseshapeY = mouseY;
}

