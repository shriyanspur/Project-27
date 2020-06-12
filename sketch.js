const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var b1, b2, b3, b4, b5;
var rod;
var sling;


function preload() {
	
}

function setup() {
	createCanvas(700, 500);

	engine = Engine.create();
	world = engine.world;

  rod = new Ground(350,130,400,30);

	b1 = new Ball(100,180,10,10);
	b2 = new Ball(200,180,10,10);
	b3 = new Ball(300,180,30,30);
	b4 = new Ball(400,180,30,30);
	b5 = new Ball(300,180,30,30);

  
  sling1 = new Rope(b1.body, rod.body, -100, 0);
  /*sling1 = new Rope(b1.body, {x: 170, y:130});
  sling2 = new Rope(b2.body, {x: 260, y:130});
  sling3 = new Rope(b3.body, {x: 350, y:130});
  sling4 = new Rope(b4.body, {x: 440, y:130});
  sling5 = new Rope(b5.body, {x: 530, y:130});*/
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  Engine.update(engine);

  rod.display();

  sling1.display();
  //sling2.display();
  //sling3.display();
  //sling4.display();
  //sling5.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
}



