  class Fruit {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
    }
  
    Draw() {
      var x = this._x;
      var y = this._y;
      var size = this._size;
  
      var cherrySize = size / 2;
      var cherryX = x + size / 5;
      var cherryY = y + cherrySize / 2;
    
      stroke(180, 80, 30);
      strokeWeight(5);
      line(cherryX, cherryY, x, y - size / 2);
      noStroke();
      fill(255, 0, 0);
      circle(cherryX, cherryY, cherrySize);
      
      var cherryX = x - size / 5;
    
      stroke(180, 80, 30);
      strokeWeight(5);
      line(cherryX, cherryY, x, y - size / 2);
      noStroke();
      fill(255, 0, 0);
      circle(cherryX, cherryY, cherrySize);
      
      noFill();
    }
  }

