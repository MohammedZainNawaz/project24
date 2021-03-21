
var paper1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1495, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	paper1 = new Paper(700,320,70,70)
	box1 = new Dustbin(200,200,20,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  box1.display();
  drawSprites();
 
}





