class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xoff = 0; // Random step: -1, 0, or 1
    this.yoff = 1000;
  }

  move() {
    
    this.x = noise(this.xoff)*width;
    //console.log(this.x);
    this.y = noise(this.yoff)*height;
    
    this.xoff += 0.005;
    this.yoff += 0.005;
  }

  show() {
    noFill(0);
    stroke(0, 25);
    ellipse(this.x, this.y, 8, 8);
  }
}

let walker;

function setup() {
  createCanvas(width, height);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.move();
  //background(255)
  walker.show();
}
