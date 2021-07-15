const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
background(backgroundImg)
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    
}
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/kolkata")
    
    //change the data in JSON format
    var responseJSON = await response.json();

    // write code slice the datetime
    var datetime=responseJSON.datetime;
    var hour=datetime.slice (11,13)
    
    // add conditions to change the background images from sunrise to sunset
if (hour<=03 && hour<04){
    bg="sunrise1.png"
}
else if(hour>=04 && hour<05){
    bg="sunrise2.png"
}
else if(hour>=05 && hour<06){
    bg="sunrise3.png"
}
else if(hour>=07 && hour<11){
    bg="sunrise4.png"
}
else if(hour>=11 && hour<14){
    bg="sunrise5.png"
}
else if(hour>=14 && hour<16){
    bg="sunrise6.png"
}
else if(hour>=16 && hour<18){
    bg="sunset7.png"
}
else if(hour>=18 && hour<20){
    bg="sunset8.png"
}
else if(hour>=20 && hour<22){
    bg="sunset9.png"
}
else if(hour>=22 && hour<23){
    bg="sunset10.png"
}
else if(hour>=23 && hour<24){
    bg="sunset11.png"
}
else if(hour>=24 && hour<3){
    bg="sunset12.png"
}
    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg)
}
