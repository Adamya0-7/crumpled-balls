
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

	//Create the Bodies Here.
ground1 = new Ground(200,380,1000,20);

box3 = new Box(450,200,20,100);
ball1 = new Ball(100,100,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

ground1.display(); 

box3.display(); 
ball1.display();
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:20,y:-40})
	}
}



