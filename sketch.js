
function preload(){
img=loadImage('post instagram partido futbol profesional negro.png')

}
function setup(){
    var canvas = createCanvas(500,500);
    img2=createSprite(250,200,700,500)
    img2.addImage(img)
    img2.scale=0.5

}
function draw(){
drawSprites()
}