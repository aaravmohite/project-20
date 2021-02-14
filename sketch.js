var canvas
var cat1
var cat2
var cat3
var cat
var garden
var mouse1
var mouse2
var mouse3
var mouse
function preload() {
    //load the images here
    garden=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadAnimation("images/cat3.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadAnimation("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addAnimation("sleeping",cat1)
cat.scale=0.2
mouse=createSprite(200,600)
mouse.addAnimation("standing",mouse1)
mouse.scale=0.15
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2+mouse.width/2){
        cat.velocityX=0
        cat.addAnimation("lastImage",cat3)
        cat.x=300
        cat.scale=0.2
        cat.changeAnimation("lastImage",cat3)
        mouse.addAnimation("mouseLastImage",mouse3)
        mouse.scale=0.15
        mouse.changeAnimation("mouseLastImage",mouse3)
    }

    drawSprites();
}


function keyPressed(){ 
    if(keyCode === LEFT_ARROW){ 
    cat.velocityX = -5; 
    cat.addAnimation("tomRunning", cat2);
    cat.changeAnimation("tomRunning");
    mouse.addAnimation("jerryTeasing", mouse2); 
    mouse.frameDelay = 25;
    mouse.changeAnimation("jerryTeasing"); }


  //For moving and changing animation write code here


}
