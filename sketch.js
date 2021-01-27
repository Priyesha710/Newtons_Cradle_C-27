const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var userEngine, userWorld;

var bob1,bob2,bob3,bob4,bob5;

var rope1,rope2,rope3,rope4,rope5;

var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	userEngine = Engine.create();
	userWorld = userEngine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200);

	bob1 = new Bob(600,400);
	bob2 = new Bob(500,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(300,400);
	bob5 = new Bob(200,400);
    //console.log(bob1);
	rope1 = new Rope(bob1.body,roof.body,bob1.body.circleRadius/2*8,0);
	rope2 = new Rope(bob2.body,roof.body,bob1.body.circleRadius/2*4,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,-bob1.body.circleRadius/2*4,0);
	rope5 = new Rope(bob5.body,roof.body,-bob1.body.circleRadius/2*8,0);

	Engine.run(userEngine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  if(keyDown("left")){
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-5,y:0});
  }
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
}



