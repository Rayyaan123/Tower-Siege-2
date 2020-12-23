const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {

}

function setup() {
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(600,250,200,10);

    //level one
    box1 = new Box(600,230,50,50);
    box2 = new Box(550,230,50,50);
    box3 = new Box(650,230,50,50);
    //level two 
    box4 = new Box(575,180,50,50);
    box5 = new Box(625,180,50,50);
    //level three
    box6 = new Box(600,130,50,50);

    gem = new Gem(300,150);

    slingshot = new SlingShot(gem.body,{x:200, y:220});
}


function draw() {
    background("cyan");
    Engine.update(engine);
        
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    gem.display();
    slingshot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(gem.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode == 32){
        
        slingshot.attach(gem.body);
        console.log("wehfuawpfhawpfhp9awo");
    }
}