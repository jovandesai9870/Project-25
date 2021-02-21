const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var dustbin;
var box1,box2,box3;


function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(0,height,3600,40)
	paper=new Paper(100,300,25);
  dustbin = new Dustbin(700,700,200,10);
  box1 = new Box(560,630,10,105);
  dustbin.depth = box1.depth;
  box1.depth = box1.depth+1;
  box2 = new Box(740,630,10,105);
  box3 = new Box(650,678,169,10);

  dustbin.depth = paper.depth;
  paper.depth  = paper.depth + 100;

	Engine.run(engine);
  
}


function draw() {

  background("white");

  Engine.update(engine);

  ground.display();
  paper.display();
  dustbin.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
}
function keyPressed(){
	 if(keyCode === UP_ARROW)
	 {
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95})
		 
	 }
}



