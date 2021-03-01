
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
  


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup(){
createCanvas(600, 600);

  
  
  monkey = createSprite(50,280,20,50);
  monkey.addAnimation("running", monkey_running);
  
  bananaGroup=new Group()
  OGroup=new Group()

  monkey.scale = 0.2;
  
  ground = createSprite(200,350,800,20);
  
}


function draw(){
  background(255)
  ground.velocityX=-5
 
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space") ) {
        monkey.velocityY = -12;
       
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    
  if(OGroup.isTouching(monkey)){
        
        
        ground.velocityX = 0;
    monkey.velocityY = 0;
    
OGroup.setVelocityXEach(0); 
OGroup.setLifetimeEach(-1);
    
  }
  
  monkey.collide(ground)
  spawnBanana()     
  spawnObstacle()
 drawSprites()    
}
function spawnBanana() {
  //write code here to spawn the banana
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}
function spawnObstacle() {
  //write code here to spawn the O
  if (frameCount % 200 === 0) {
    var O = createSprite(600,300,40,10);
    O.addImage(obstacleImage);
    O.scale = 0.2;
    O.velocityX = -3;
    
     //assign lifetime to the variable
    O.lifetime = 200;
    
    //adjust the depth
    
    
    //add each O to the group
    OGroup.add(O);
  }
}






