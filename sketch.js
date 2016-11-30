var backgroundImage;
var mySound;
var qbThrowing
var wrReady;
var wrSuccess;
var rand;

function preload()
{
  mySound = loadSound('assets/Adele - Rumour has it (with lyrics).mp3');
  backgroundImage = loadImage("assets/codingProject_footballField.jpg");
  qbThrowing = loadImage("assets/QB_Throwing.png");
  qbSad = loadImage("assets/QB_Sad.png")
  wrReady = loadImage("assets/wr_Ready.png")
  wrSuccess = loadImage("assets/wr_Success.png")
}

function setup() 
{
  createCanvas(1000,600);
  rand = int(random(3));
}


function draw() 
{
  background(backgroundImage);
  QuarterBack();
  Ready();
}


function musicVolume()
{
  mySound.setVolume(1);
  mySound.play();
}

function QuarterBack()
{
  image(qbThrowing, 150, 250, 100, 100);
}

function Ready()
{
  print(rand);
  
  if (rand == 0)
  {
    image(wrReady, 250, 250, 100, 100);
  }
  
  if (rand == 1)
  {
  image(wrReady, 350, 350, 100, 100);
  }
  
  if (rand == 2)
  {
    image(wrReady, 450, 450, 100, 100);
  }
}

function wrCatch()
{
  
}

function keyPressed()
{
    
   if (rand == 0 && keyCode === UP_ARROW)
   {
     image(wrSuccess, 250, 100, 100, 100);
     //and text that you succeeded 
   }
   
   if (rand == 1 && keyCode === DOWN_ARROW)
   {
     image(wrSuccess, 150, 300, 100, 100);
     //and text that you succeeded 
   }
   
   if (rand == 2 && keyCode === RIGHT_ARROW)
   {
     image(wrSuccess, 250, 250, 100, 100);
     //and text that you succeeded 
   }
   
   else
   {
     image(qbSad, 150, 250, 100, 100)
     //and text that you failed 
   }
}
