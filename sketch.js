var fixed_Rectangle,moving_Rectangle;



function setup() {
  createCanvas(1200,800);
 fixed_Rectangle= createSprite(600,300, 50, 80);
 fixed_Rectangle.shapeColor="green";

 moving_Rectangle=createSprite(200,200,80,50);
 moving_Rectangle.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  moving_Rectangle.x=World.mouseX;
  moving_Rectangle.y=World.mouseY;

  if (moving_Rectangle.x-fixed_Rectangle.x<moving_Rectangle.width/2+fixed_Rectangle.width/2&&
    fixed_Rectangle.x-moving_Rectangle.x<moving_Rectangle.width/2+fixed_Rectangle.width/2&&
    moving_Rectangle.y-fixed_Rectangle.y<moving_Rectangle.height/2+fixed_Rectangle.height/2&&
    fixed_Rectangle.y-moving_Rectangle.y<moving_Rectangle.height/2+fixed_Rectangle.height/2){
     moving_Rectangle.shapeColor="red";
     fixed_Rectangle.shapeColor="red";

  }

  else {
     moving_Rectangle.shapeColor="green";
     fixed_Rectangle.shapeColor="green";

  }
  drawSprites();
}