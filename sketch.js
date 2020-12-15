var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1Body,box2Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,30);
	groundSprite.shapeColor=color(255)

	box1=createSprite(width-280, height-120, 30,100);
	box1.shapeColor=color("red")

	box2=createSprite(width-470, height-120, 30,100);
	box2.shapeColor=color("red")




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0,density:1.0,isStatic:true,friction:0.3
});

	box2Body = Bodies.rectangle(width-470 , height-120 , 30 ,100, {density:1.0,isStatic:true,friction:0.3
});
	box1Body = Bodies.rectangle(width-280 , height-120 , 30 ,100, {restitution:1.0,density:1.0,isStatic:true,friction:0.1
});
	World.add(world, packageBody);
	World.add(world, box1Body);
	World.add(world, box2Body);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 30 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
 
	Engine.update(engine);
	rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.x=box1Body.position.x
  box1.y=box1Body.position.y

  groundSprite.x=ground.position.x
  groundSprite.y=ground.position.y



  


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:random(0.7,1.3),density:1.0,isStatic:true,friction:0.3, isStatic:false});
	World.add(world, packageBody);
	
	
	
  }
}



