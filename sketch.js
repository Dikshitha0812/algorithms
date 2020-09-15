var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "white";
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 100, 50);
  movingRect.shapeColor = "white";
  movingRect.debug = true;

}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(movingRect.x - fixedRect.x <= 75
    && fixedRect.x - movingRect.x <=75
    && movingRect.y-fixedRect.y<=50
    && fixedRect.y-movingRect.y<=50 ){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }  else{
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
  }
  
  drawSprites();
}