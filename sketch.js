var canvas;
var gameState,contestantCount;
var database;
var quiz, question, contestant;
var gameState=0;
function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");

  drawSprites();
}
