


// I.1
// Walker with various forms
/////////////////////////////////

var walker;

function Walker() {
  // width and height become globals after the canvas is initialized
  this.x = width / 2;
  this.y = height / 2;

  this.render = function() {
    stroke(0);
    point(this.x, this.y);
  };

  // // Random walk
  // this.step = function() {
  //   var stepX = Math.floor(Math.random() * 3) - 1;  //  -1, 0, 1
  //   var stepY = Math.floor(Math.random() * 3) - 1;
  //   this.x += stepX;
  //   this.y += stepY;
  // };

  // // Tends toward bottom right
  // this.step = function() {
  //   var stepX = Math.floor(Math.random() * 3) - 1;  // -1, 0, 1, 2
  //   var stepY = Math.floor(Math.random() * 3) - 1;  
    
  //   stepX = stepX > 0 ? 1 : stepX;
  //   stepY = stepY > 0 ? 1 : stepY;

  //   this.x += stepX;
  //   this.y += stepY;
  // };

  // // 50% chance of tending toward mouse
  // this.step = function() {
  //   var tendencyX;
  //   var tendencyY;

  //   var diffX = this.x - mouseX;
  //   var diffY = this.y - mouseY;

  //   tendencyX = diffX < 0 ? 1 : -1;
  //   tendencyY = diffY < 0 ? 1 : -1;

  //   // find a better way to do this in p5
  //   var stepsX = [-1, 0, 1, tendencyX];
  //   var stepsY = [-1, 0, 1, tendencyY];

  //   var stepX = int(random(4));
  //   var stepY = int(random(4));

  //   this.x += stepsX[stepX];
  //   this.y += stepsY[stepY];
  // };

  // // Monte Carlo step sizing
  // this.step = function() {

  //   function monteCarloStep() {
  //     var randomA = random(0,20);  // random number
  //     var randomB = random(0,20);  // random number qualifier
  //     var probabilityToUseB = randomA;

  //     if (randomB < probabilityToUseB) {
  //       return randomA;
  //     }
  //     return monteCarloStep();
  //   };

  //   function genPossibleStep() {
  //     var stepSize = monteCarloStep();
  //     var stepX = random(-stepSize, stepSize);
  //     var stepY = random(-stepSize, stepSize);
  //     return { x: stepX, y: stepY };
  //   };

  //   function xIsInBounds(step) {
  //     var nextStepX = walker.x + step;
  //     return nextStepX > 0 && nextStepX < width;
  //   };

  //   function yIsInBounds(step) {
  //     var nextStepY = walker.y + step;
  //     return nextStepY > 0 && nextStepY < height;
  //   };

  //   function genNextStep() {
  //     var possibleStep = genPossibleStep();
  //     if (xIsInBounds(possibleStep.x) && yIsInBounds(possibleStep.y)) {
  //       return possibleStep;
  //     }
  //     return genNextStep();
  //   };

  //   var step = genNextStep();
  //   this.x += step.x;
  //   this.y += step.y;
  // };

  // Perlin noise steps
  // var starterNoise = 0;
  
  // this.step = function() {
  //   var noisePoint = noise(starterNoise);
  //   var posX = map(noisePoint, 0, 1, 0, width);
  //   var posY = map(noisePoint, 0, 1, 0, height);

  //   this.x = posX;
  //   this.y = posY;
  //   starterNoise += 0.001;
  // }

};

// function setup() {
//   createCanvas(700, 300);
//   background(220);
//   walker = new Walker();
// }

// function draw() {
//   walker.step();
//   walker.render();
// }




// I.2
// Bars showing random distribution
/////////////////////////////////

var total = 20
var counts = [];

// function setup() {
//   createCanvas(700, 225);
//   for (var idx = 0; idx < total; idx++) {
//     counts[idx] = 0;
//   }
// }

// function draw() {
//   background(200);
//   stroke(0);
//   fill(175);

//   var barWidth = width / counts.length;
//   var idx = floor(random(total));
//   console.log(idx)

//   counts[idx]++;
  
//   for (var int = 0; int < total; int++) {
//     rect(int*barWidth, height-counts[int], barWidth-1, counts[int]);  // x, y, width, height
//   }
// }




// I.3
// Dots showing a random distribution
/////////////////////////////////

// function setup() {
//   createCanvas(700, 300);
//   background(100);
// }

// function draw() {
//   var stdDev = 50;
//   var mean = 350;
//   var pos = randomGaussian(mean, stdDev);

//   noStroke();
//   fill(255, 10);
//   ellipse(pos, 180, 20, 20);
// }




// I.4
// Gaussian paint splatters
/////////////////////////////////

// function setup() {
//   createCanvas(700, 300);
//   background(100);
// };

// function draw() {  
//   var stdDevX = width/6;
//   var meanX = width/2;

//   var stdDevY = height/6;
//   var meanY = height/2;
  
//   var posX = randomGaussian(meanX, stdDevX);
//   var posY = randomGaussian(meanY, stdDevY);

//   noStroke();
//   fill(255, 25);
//   ellipse(posX, posY, 6, 6);
// };




// I.5
// Perlin noise hackiness
/////////////////////////////////

function setup() {
  createCanvas(700, 300);
  background(160);
};

var starterPointX = 0;
var starterPointY = 0;

function draw() {  
  var startNoiseX = noise(starterPointX);
  var startNoiseY = noise(starterPointY);
  var posX = map(startNoiseX, 0, 1, 0, width);
  var posY = map(startNoiseY, 0, 1, 0, height);

  fill(225);
  ellipse(posX, posY, 30, 30);

  starterPointX += 0.005;
  starterPointY += 0.02;
};





