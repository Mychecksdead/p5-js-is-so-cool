let time = 0, average_ball = 0;
var s1 = (s) => {
    let circles = [];
    s.setup = () => {
        let canvas1 = s.createCanvas(s.windowWidth, s.windowHeight/2);
        canvas1.position(0, 0);
        s.stroke(255);
        s.fill(255);
        s.background(0); 
        circles = [];
        time = 0;
    }
    s.draw = () => {
        s.clear();
        s.background(0);
        average_ball = 0;
        for(let i = 0; i < circles.length; ++i){
            circles[i].checkCollision();
            circles[i].applyGravity();
            circles[i].render();
            average_ball += circles[i].y;
        }
        average_ball = average_ball / Math.max(1, circles.length);
        time += 0.5;
    }
    s.mouseClicked = () => {
        circles.push(
            new Circle(50, 50, s.mouseX, s.mouseY, s)
        );
    }
}


var s2 = (s) => {
    s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth, s.windowHeight/2);
        canvas2.position(0, s.windowHeight/2);
        s.stroke(255);
        s.fill(255);
        s.background(0); 
        s.strokeWeight(5);
    }
    s.draw = () => {
        s.point(time, average_ball);
    }
}


class Circle{
    constructor(w, h, x, y, s){
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.v = 0; // speed
        this.frameSpeed = 100;
        this.a = 10 / this.frameSpeed; // acceleration
        this.s = s;
    }

    applyGravity(){
        this.y += this.v;
        this.v += this.a;
    }

    checkCollision(){
        if(this.y + this.h / 2 >= this.s.height){
            this.v = -this.v + this.a;
        }
    }

    render(){
        this.s.ellipse(this.x, this.y, this.w, this.h);
    }
}

new p5(s1);
new p5(s2);