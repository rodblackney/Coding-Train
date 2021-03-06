var x;
var y;
var prev;

function setup() {
  createCanvas(400,400);
  x = 200;
  y = 200;
  background(51);
  pos = createVector(200,200);
  prev = pos.copy();
  console.log(pos);
}

function draw() {
  stroke(255);
  strokeWeight(2);
  // point(pos.x, pos.y);
  line(pos.x, pos.y, prev.x, prev.y);
  prev.set(pos);
  
  var r = random(100);
  
  var step = p5.Vector.random2D();
  
  var r = random(100);
  if (r < 5) {
      step.mult(25);  
  } else {
    step.setMag(2);
  }
  
  pos.add(step);
}