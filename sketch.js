var bgColor = 'black';

function setup() {
  createCanvas(windowWidth,windowHeight);
  //angleMode(DEGREES);
  colorMode(HSB);
  background(bgColor);
}

function draw() {

 //var rotZ = map(rotationZ, 0 ,360, 1, width);
  var rotY = map(rotationX, -180 , 180, -width * 4, width * 4);
  var rotX = map(rotationY, -90 , 90, -height/2, height/2);
  if(rotationX > -45 && rotationX < 45 && rotationY > -45 && rotationY < 45 ){
  noStroke();
  //fill(0,0,0,50);
  //posX = width/2 + rotX;
  //posY = height/2 + rotY;
  var customHue = 2 * (rotY / width + 1/8) * 255 ;
  var customSaturation = 2 * ( rotX / height + 1/4) * 255;
  fill(customHue, customSaturation, 255);
  ellipse(width/2 + rotX, height/2 + rotY, 40);
  ellipse(width/2 - rotX, height/2 - rotY, 40);
  } 
  fill(0,0,0,10);
  ellipse(width/2, height/2, 400);
  fill(255);  
  if(abs(rotX) < 10 || abs(rotY) < 10){
  textAlign(CENTER);    
  textSize(50);
  text("shake to restart",width/2, height/2-5);
  }

    //if(rotationX < -45 || rotationX > 45 || rotationY < -45 || rotationY > 45 ){
  //fill(0,0,0,50);
  //quad(0,0,width,0,width,rotX + tan(rotationZ) * width/2 - height/4, 0,rotX - tan(rotationZ) * width/2 - height/4);
}

function deviceShaken(){
    fill(bgColor);
    rect(0,0,width,height);
    }