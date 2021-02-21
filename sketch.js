
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var time;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 300);
  ground = createSprite(250,270,500,10);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(50,240,20,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
   time = 0; 
  
}

function draw() {
  background(220);
  
  spawn_banana();
  spawn_obstacle();
  
  if(keyDown("space") && monkey.y>220) {
        monkey.velocityY = -13;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
 // console.log(monkey.y)

  
  time = time + Math.round(getFrameRate()/60);
  
  text("survival time :  "+time,160,50, fill("black"), textSize(20))


  drawSprites();
}

function spawn_banana(){
  if(World.frameCount%120===0){
    banana= createSprite(510,120,40,40)
    banana.y = Math.round(random(80,150))
    banana.velocityX=-3;
    banana.addImage(bananaImage);
    banana.scale =0.1;
    banana.lifetime = 175;
    FoodGroup.add(banana);
  }
}

function spawn_obstacle(){
  if(World.frameCount%120===0){
    obstacle= createSprite(510,247,40,40)
    obstacle.velocityX=-3;
    obstacle.addImage(obstaceImage);
    obstacle.scale =0.1;
    obstacle.lifetime = 175;
    obstacleGroup.add(obstacle);
  }
}


