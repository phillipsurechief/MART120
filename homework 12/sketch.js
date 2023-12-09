
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
   function setup()
   {
    createCanvas(500,600);

     shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     createCharacter(200,350);
    }

function draw()
{
     background(120,45,78);
     stroke(0);
     fill(0);


     createBorders(10)


     textSize(16);
     text("EXIT", width-50,height-50)
    

     drawCharacter();
     CharacterMovement();



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


   fill(23,40,123);
   circle(characterX,characterY,25);

} 
  function CharacterMovement()
{
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
    console.log("movement: " + characterX);
  }
  if(keyIsDown(D))
  {
    characterX += 10;
  }

}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);



}

  function drawCharacter()
{
      fill(23,40,123);
      circle(characterX,characterY,25);
}
  function createBorders(thickness)
{
    rect(0,0,width,thickness);
   
    rect(0,0,thickness,height);
    
    rect(0, height-thickness,width, thickness);
    
    rect(width-thickness,0,thickness,height-50);
} 

  function mouseClicked()
{
  mouseshapeX = mouseX;
  mouseshapeY = mouseY;
}

