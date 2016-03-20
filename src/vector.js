
function Pvector(x, y) {
  this.x = x;
  this.y = y;

  this.add = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
  };

  this.sub = function(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  };

  this.mult = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  };
};



// 1.3
// Vector Subtraction
/////////////////////////////////

function setup() {
  createCanvas(700, 700);
};

function draw() {
  background(210);
  
  var mouse = new Pvector(mouseX, mouseY);
  var center = new Pvector(width/2, height/2);


  
  mouse.sub(center);
  mouse.mult(.5);


  translate(width/2, height/2);
  line(0, 0, mouse.x, mouse.y);
};