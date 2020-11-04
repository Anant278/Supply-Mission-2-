var helicopterIMG, helicopterSprite, packageSprite, packageIMG, containerWall_1, containerWall_2, containerBase;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//Package
	packageSprite = createSprite(width/2, 200, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	//Helicopter
	helicopterSprite=createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	//Ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	//Container
	containerWall_1 = createSprite(width/1.6, 625, 30, 70);
	containerBase = createSprite(width/2, 650, 200, 20);
	containerWall_2 = createSprite(width/2.8, 625, 30, 70);

	containerWall_1.shapeColor = "red";
	containerWall_2.shapeColor = "red";
	containerBase.shapeColor = "red";
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}