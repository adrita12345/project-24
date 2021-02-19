
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(0, 0, PI*10);
	ground = new Ground(325, 700);
	box1 = new Stone(350,325,100,100);
	//rubber = new Rubber();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  hammer.display();
  ground.display();
  box1.display();
  drawSprites();
 
}



