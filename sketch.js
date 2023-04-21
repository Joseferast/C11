
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(525,200,10,10);
  sea.addImage(seaImg);
  ship = createSprite(100,225,10,10);
  ship.addAnimation("Running",shipImg);
  sea.scale = 0.25;
  sea.width = 550;
  ship.scale = 0.2;
  sea.velocityX = -1;
}

function draw() {
  background("blue");
    drawSprites();
  if (sea.x < -110) {
    sea.x = sea.width/2;
  }
 
}
