var wall,car;
var speed,weight;

function setup() {
  speed=random(59,90)
  weight=random(400,1500)


  createCanvas(1600,400);
    wall=createSprite(1300, 200, 30, height/2);
    wall.shapeColor=color(80,80,80);
    car=createSprite(50,200,50,50);    
  
  }

function draw() {
  background(0,0,0);  
  car.velocityX = speed;
  if(car.isTouching(wall)){
    car.velocityX=0;
    car.shapeColor="yellow";
    wall.shapeColor="green";
  }
if( wall.x - car.x <(car.weight)/2) {
  car.velocityX=0;
  var deformation=0.5 * width * speed *speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100){
        car.shapeColor=car(230,230,0);
  }
  if(deformation<100){
          car.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}