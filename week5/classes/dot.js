  class Dot {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
    }
  
    Draw() {
      var x = this._x;
      var y = this._y;
      var size = this._size;
  
      fill(255);
      noStroke();
    
      circle(x, y, size / 5);
    
      noFill();
    }
  }