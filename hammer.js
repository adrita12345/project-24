
  class Hammer {
    constructor(x, y, angle) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':5.0
          
      }
      this.body = Bodies.rectangle(x, y, 30, 90, options);
      this.width = 30;
      this.height = 90;
      Matter.Body.setAngle(this.body, angle)
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };