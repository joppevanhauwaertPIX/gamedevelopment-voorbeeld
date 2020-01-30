  class Wall {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
    }

    Update() {
      this.DrawWall();
    }
  
    DrawWall() {
      var x = this._x;
      var y = this._y;
      var size = this._size;
  
      noFill();
      stroke(0, 0, 255);
      strokeWeight(4);
    
      rect(x - size / 2, y - size / 2, size, size);
      size *= 0.7;
      rect(x - size / 2, y - size / 2, size, size);
    
      noStroke();
    }
  }
  