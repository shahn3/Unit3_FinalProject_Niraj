var backgroundImage;
var mySound;
var qbThrowing

function preload()
{
  mySound = loadSound('assets/Adele - Rumour has it (with lyrics).mp3');
  backgroundImage = loadImage("assets/codingProject_footballField.jpg");
  qbThrowing = loadImage("assets/QB_Throwing.png");
  
}

function setup() 
{
  createCanvas(1000,600);
  musicVolume();
}

function draw() 
{
  background(backgroundImage);
  QuarterBack();
}


function musicVolume()
{
  mySound.setVolume(0.5);
  mySound.play();
}

function QuarterBack()
{
  image(qbThrowing, 150, 250, 100, 100);
}