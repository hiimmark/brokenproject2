
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,papers;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	papers = new paper(200,670,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
	papers.display()
  groundObject.display();
  dustbinObj.display();

  if(keyDown(UP_ARROW)){
	papers.Body.applyForce(paper,20,10)
  }

}

