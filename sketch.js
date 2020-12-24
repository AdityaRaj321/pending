
var car,wall,c1,c,l1,l2,w1,w2,speed,random;

function setup() {
  createCanvas(1600,1200);
  speed=random(55,90)
	weight=random(400,1500)
	car=createSprite(50, 200, 60,40);   
	car.velocityX = speed;
	car.shapeColor=color(255);
  
  	wall=createSprite(1400,200, 50, 200);
    wall.shapeColor=color(80,80,80);
    
    speed=random(110,170)
	weight=random(400,1500)
	c1=createSprite(50, 200, 50,50);   
	c1.velocityX = speed;
	c1.shapeColor=color(255);
  
  	w1=createSprite(1400,200, 50, 200);
    w1.shapeColor=color(80,80,80);
    
    speed=random(55,90)
	weight=random(400,1500)
	c2=createSprite(50, 200, 50,50);   
	c2.velocityX = speed;
	c2.shapeColor=color(255);
  
  	w2=createSprite(1400,200, 50, 200);
    w2.shapeColor=color(80,80,80);
    
 car = createSprite(100, 200, 60, 40);
 wall = createSprite(1400, 200, 50, 200);
 c1 = createSprite(100, 600, 60, 40);
 c2 = createSprite(100, 1000, 60, 40);
 l1 = createSprite(800, 400, 1600, 20);
 l2 = createSprite(800, 800, 1600, 20);
 w1 = createSprite(1400, 600, 50, 200);
 w2 = createSprite(1400, 1000, 50, 200);
}

function draw() {

  background(0,0,0); 
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }

  if(w1.x-car.x < (c1.width+w1.width)/2)
  {
  	c1.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		c1.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
		c1.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
		c1.shapeColor=color(0,255,0);
	}
  }

  if(w2.x-c2.x < (c2.width+w1.width)/2)
  {
  	c2.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		c2.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
		c2.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
		c2.shapeColor=color(0,255,0);
	}
  }


  car.velocityX=80;
  c1.velocityX=160;
  c2.velocityX=240;

  

  car.collide(wall);
  c1.collide(w1);
  c2.collide(w2);


  drawSprites();
}