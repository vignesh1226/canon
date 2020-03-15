class Tanker {
    constructor(x, y) {
        var options = {
        isStatic: true
       }
       this.body = Bodies.rectangle(x,y,80,80,options);
       this.width = 80;
       this.height = 80;
        
       World.add(world, this.body);
      };
  
      display(){
        // Draw the tanker the way you like.
        // You could also use an image if you want a specific look
        var pos = this.body.position;
        var angle = this.body.angle;
  
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("green");
        rect(0,0,this.radius);
        pop();
  
      };
  }