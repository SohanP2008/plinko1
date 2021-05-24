const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function setup() {
  createCanvas(600,500);
  createSprite(400, 200, 50, 50);

  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  if(frameCount % 60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  ground = Bodies.rectangle(580, 480, width, 10);

}

var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function draw() {
  background("black");  
  drawSprites();
}