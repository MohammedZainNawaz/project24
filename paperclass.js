class Paper {
    constructor(x, y, width, height, angle) {
      var options = {
          
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
    
      }
      
    }
    display(){
      
      push();
      translate();
      rotate();
      rectMode(CENTER);
      ellipse(100,600,50,50)
      fill("red");
      pop();
    }
  }