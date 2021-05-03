var bgImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    bgImg=loadImage("garden.png");
    catImg1=loadImage("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3=loadImage("cat4.png");
    mouseImg1=loadImage("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(700,600);
    cat.addImage(catImg1);
    cat.addAnimation(catImg2);

    mouse=createSprite(400,800);
    mouse.addImage(mouseImg1);
    mouse.addAnimation(mouseImg2);

}

function draw() {

    background(bgImg);

if(cat.x-mouse.x<(cat.width-mouse.width)/2)
{

}
    drawSprites();
}


function keyPressed(){
    if(keyCode===RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay=25;
    }
    if(keyCode===LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;
    }




}
