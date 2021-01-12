
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg,boy;
var treeImg,tree;
var gameState = "onSling";

function preload()
{
	boyImg=loadImage("boy.png")
	treeImg=loadImage("tree.png")
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,490,1000,20)

	boy=createSprite(200,430, 5,10);
	boy.addImage(boyImg)
	boy.scale=0.08


	 
	stone = new Stone(140,370,40)

	//tree=createSprite(750,250, 5,10);
	//tree.addImage(treeImg)
	//tree.scale=0.4

	mango1 = new Mango(600,200,50)
	mango2 = new Mango(530,200,50)
	mango3 = new Mango(550,140,50)
	mango4 = new Mango(600,100,50)
	mango5 = new Mango(630,150,50)
	mango6 = new Mango(670,200,50)
	mango7 = new Mango(680,100,50)
	mango8 = new Mango(650,50,50)
	mango9 = new Mango(700,150,50)
	mango10 = new Mango(710,50,50)
	mango11 = new Mango(770,20,50)
	mango12= new Mango(750,90,50)
	mango13= new Mango(750,150,50)
	mango14= new Mango(790,180,50)
	mango15 = new Mango(800,100,50)
	mango16 = new Mango(840,130,50)
	mango17= new Mango(810,50,50)
	mango18= new Mango(850,200,50)
	mango19= new Mango(890,150,50)
	mango20 = new Mango(870,90,50)
	mango21= new Mango(940,140,50)
	mango22 = new Mango(920,200,50)

	rope1 = new Rope(stone.body,{x:140,y:350})
	//	tree = new Tree(10,1,0,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  

  ground.display();
  drawSprites();
  stone.display();
  imageMode (CENTER)
  image (treeImg,730,250,500,550)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  mango21.display();
  mango22.display();
  rope1.display();
  
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  detectCollision(stone,mango11)
  detectCollision(stone,mango12)
  detectCollision(stone,mango13)
  detectCollision(stone,mango14)
  detectCollision(stone,mango15)
  detectCollision(stone,mango16)
  detectCollision(stone,mango17)
  detectCollision(stone,mango18)
  detectCollision(stone,mango19)
  detectCollision(stone,mango20)
  detectCollision(stone,mango21)
  detectCollision(stone,mango22)
}
function mouseDragged(){
	if(gameState !== "launched"){
	 Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})  
	}
  }
  
  function mouseReleased(){
	rope1.fly()
	gameState = "launched"
  }
  
  function keyPressed(){
	if (keyCode === 32){
	rope1.attach(stone.body)
	gameState = "onSling"
  }
  }  
  function detectCollision(lstone,lmango){
	  mangoPosition=lmango.body.position
	  stonePosition=lstone.body.position

	  var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
        if(distance<=lmango.radius+lstone.radius){
			Matter.Body.setStatic(lmango.body,false)
		}
	}

	