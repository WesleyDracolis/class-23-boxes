const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Box2;
var ground;
var box3;
var box4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    Box2 = new Box (240,100,50,100);
    ground =new Ground (200,390,400,20);
    box3 = new Box (160,360,20,200);
    box4 = new Box (200,299,100,150);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    Box2.display();
    ground.display();
    box3.display();
    box4.display(); 
}
    
// 