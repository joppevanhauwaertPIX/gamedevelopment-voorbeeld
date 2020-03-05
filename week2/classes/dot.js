  class Dot {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
    }

    Update() {
      var t = millis() / 1000;
      t -= floor(millis() / 1000);
      t-=0.5;
      t*=2;
      t = abs(t);
      this.DrawDot(t);
    }
  
    DrawDot(amt) {
      var x = this._x;
      var y = this._y;
      var size = this._size;
  
      fill(255);
      noStroke();
    
      circle(x, y, size / 5);
    
      noFill();
    }
  }