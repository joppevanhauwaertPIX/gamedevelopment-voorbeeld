  class Hallway {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
    }

    Update() {
      this.DrawHallway();
    }
  
    DrawHallway() {
      var x = this._x;
      var y = this._y;
      var size = this._size;
  
      noFill();
      stroke(255, 255, 255);
      strokeWeight(4);
    
      rect(x - size / 2, y - size / 2, size, size);
    
      noStroke();
    }
  }
  