class Bob  {
    constructor(x,y)   {
        var options = {
            isStatic: true,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }

        this.body = Bodies.circle(x,y,23,options);
        World.add(world,this.body);
  
    }
  
        display()   {
            
            var pos = this.body.position;

            push();
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            fill("cyan");
            ellipse(0, 0, this.width );
            pop();
        }
  
  }
  