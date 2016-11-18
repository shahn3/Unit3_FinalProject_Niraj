var backgroundImage;
var mySound;

function preload()
{
  mySound = loadSound('assets/Adele - Rumour has it (with lyrics).mp3');
  backgroundImage = loadImage("assets/codingProject_footballField.jpg");
}

function setup() 
{
  createCanvas(1000,600);
  musicVolume();
}

function draw() 
{
  background(backgroundImage);
}


function musicVolume()
{
  mySound.setVolume(0.5);
  mySound.play();
}