var fixedRect, movingRect, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect3 = createSprite(100, 200, 50, 80);
  rect3.shapeColor = "yellow";
  rect3.debug = true;
  rect4 = createSprite(600, 200,80,30);
  rect4.shapeColor = "yellow";
  rect4.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect3.velocityX = 5;
  rect4.velocityX = -5;
  
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect, fixedRect);
  bounceoff(rect3, rect4);

  drawSprites();
}

