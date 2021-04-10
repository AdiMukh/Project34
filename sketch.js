const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulum1, pendulum2, pendulum3, pendulum4;
var ball1, ball2, ball3, ball4;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ball1 = new Ball(200, 300, 70, 70);
    ball2 = new Class(270, 300, 70, 70);
    ball3 = new Class(340, 300, 70, 70);
    ball4 = new Ball(410, 300, 70, 70);
    pendulum1 = new Pendulum(ball1.body, {x:200, y:50});
    pendulum2 = new Pendulum(ball2.body, {x:270, y:50});
    pendulum3 = new Pendulum(ball3.body, {x:340, y:50});
    pendulum4 = new Pendulum(ball4.body, {x:410, y:50});

}

function draw() {
    background(180);
    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(ball4.body, {x: mouseX , y: mouseY});
}

