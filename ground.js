class Ground {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2.0,
          isStatic: true          
      }
      this.body = Bodies.rectangle(x, y, 800, height, options);
      this.width = 1100;
      this.height = 30;
           
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };