var teste;




function setup() {
  createCanvas(400,400);
  teste=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
  teste.position.x=teste.position.x+5;
}
if(keyIsDown(LEFT_ARROW)){
  teste.position.x=teste.position.x-5;
}if(keyIsDown(UP_ARROW)){
  teste.position.y=teste.position.y-5;
}if(keyIsDown(DOWN_ARROW)){
  teste.position.y=teste.position.y+5;
}


drawSprites();
}




