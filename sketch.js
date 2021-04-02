const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.update(engine);

	//Create the Bodies Here.
	roof = new Roof(400,200,400,30);
	bob1 = new Bob(300,400);
	bob2 = new Bob(350,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(450,400);
	bob5 = new Bob(500,400);
	chain1 = new Chain(bob1.body,roof.body,-50*2,0)
	chain2 = new Chain(bob2.body,roof.body,-25*2,0)
	chain3 = new Chain(bob3.body,roof.body,-0*2,0);
	chain4 = new Chain(bob4.body,roof.body,25*2,0);
	chain5 = new Chain(bob5.body,roof.body,50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  keyPressed()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
	  Matter.Body.applyForce(bob1.body, bob1.body.position,{x:75,y:-75});
	 }
   }