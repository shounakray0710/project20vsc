const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var gym;
var brush;
var eat;
var sleep;
var bath
var move;
var astronaut;

function preload(){
bg = loadImage("iss.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
brush = loadAnimation("brush.png");
sleep = loadAnimation("sleep.png");
eat = loadAnimation("eat1.png","eat2.png");
bath = loadAnimation("bath1.png","bath2.png");
move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(800,400);
 bg.addImage("background",bg);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255); 

  edges= createEdgeSprites();

  astronaut.bounceOff(topEdge);
  astronaut.bounceOff(bottomEdge);
  astronaut.bounceOff(leftEdge);
  astronaut.bounceOff(rightEdge);

  if(keydown("LEFT_ARROW")){
astronaut.addAnimation("bathing",bath)
astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }
else if(keydown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
else if(keydown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
else if(keydown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym)
  astronaut.changeAnimation("gyming");
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
else if(keydown("m")){
  astronaut.addAnimation("moving",move)
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.velocityX=1;
  astronaut.velocityY=1;
}

  drawSprites();
  textSize(15);
textAlign(LEFT,TOP);
fill("WHITE");
text("instrucions:UP ARROW =BRUSHING DOWN ARROW = GYM LEFT ARROW = EAT RIGHT ARROW = BATH ", 0, 0, 400, 400);
}