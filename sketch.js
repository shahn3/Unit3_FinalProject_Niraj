var backgroundImage;
var mySound;
var qbThrowing
var wrReady;
var wrSuccess;
var rand;
var touchdown = false; 


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
  timer();
  QuarterBack();
  touchdownFail();
  Ready();
  keyPressed();
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
  
  if (rand === 0)
  {
    image(wrReady, 800, 50, 100, 100);
  }
  
  if (rand == 1)
  {
  image(wrReady, 800, 250, 100, 100);
  }
  
  if (rand == 2)
  {
    image(wrReady, 800, 450, 100, 100);
  }
}


function keyPressed()
{
    
   if (rand === 0 && keyCode === UP_ARROW)
   {
     touchdown = true;
     image(wrSuccess, 780, 50, 100, 100);
     textSize(96);
     textFont("Georgia");
     text("TOUCHDOWN", 200, 300);
   }
   
   if (rand == 1 && keyCode === RIGHT_ARROW)
   {
     touchdown = true;
     image(wrSuccess, 780, 250, 100, 100);
     textSize(96);
     textFont("Georgia");
     text("TOUCHDOWN", 200, 300);
   }
   
   if (rand == 2 && keyCode === DOWN_ARROW)
   {
     touchdown =  true;
     image(wrSuccess, 780, 450, 100, 100);
     textSize(96);
     textFont("Georgia");
     text("TOUCHDOWN", 200, 300);
   }
}

function touchdownFail()
{
  if (touchdown === false && millisecond >= 10)
  {
    image(qbSad, 150, 250, 100, 100);
    textSize(96);
    textFont("Georgia");
    text("FAIL", 400, 300);
  }
}

function timer()
{
  millisecond = int(millis()/1000);
  textSize(20);
  textFont("Georgia");
  text(millisecond, 200, 100);
}

