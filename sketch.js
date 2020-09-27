//Create variables here
var dog, happyDog, database, food, foodStock, dog_img, happy_img;

function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png");
  happy_img= loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  
  createCanvas(500, 500);
  
   foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
  dog = createSprite(250,250,20,20);
dog.addImage(dog_img);
   dog.scale= 0.3;
  
}


function draw() {  
background(46, 139, 87);

if(keyDown === UP_ARROW){
  writeStock(food);
  dog.addImage(happy_img);
}

  imageMode(CENTER)
  image(dog_img ,dog.position.x,dog.position.y,60,60);

  drawSprites();
  //add styles here
  textSize(20);
  fill(118, 252, 250);
  text("Note: Press UP_ARROW key to feed the dog",400,370);
  
   text("Food remaining : "+foodS,170,200);

}
function readStock(data){
   food = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{
 x= x-1
  }
   database.ref('/').update({
    
     Food:x
   })
}


