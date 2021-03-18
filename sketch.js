var fixedRect, movingRect;
var rect1,rect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(100,50,50,40);
  rect2=createSprite(500,550,50,40);

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(rect1,movingRect)){
    rect1.shapeColor="blue"
    movingRect.shapeColor="pink"
  }
  else{
rect1.shapeColor="yellow"
movingRect.shapeColor="orange"
  }

  drawSprites();
}
