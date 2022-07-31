let stars = [];
function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  fill(255);
  for(let i = 0; i < 800; ++i){
    stars.push(new Star());
  }
  strokeWeight(1);
}


function draw() {
  clear();
  translate(width/2, height/2);
  for(let i = 0; i < stars.length; ++i){
    stars[i].update();
    stars[i].show();
  }
} 

class Star{
  constructor(){
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = random(width);
    this.pz = this.z;
  }
  update(){
    this.z -= 5;
    if(this.z < 1){
      this.z = width;
      this.x = random(-width/2, width/2);
      this.y = random(-height/2, height/2);
      this.pz = this.z;
    }
  }
  show(){
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width, 10, 0);

    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);
    
    ellipse(sx, sy, r/2, r/2);
    line(px, py, sx, sy);

    this.pz = this.z; 
  }
};