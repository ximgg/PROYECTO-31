class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
           
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body, this.color);
    }


    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
   
        strokeWeight(10);
        fill("yellow")
      
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}