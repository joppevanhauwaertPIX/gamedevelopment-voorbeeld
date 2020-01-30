  class Pill {
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
      this.DrawPill(t);
    }
  
    DrawPill(amt) {
      var x = this._x;
      var y = this._y;
      var size = this._size;
  
      fill(255);
      noStroke();
    
      var yMin = y - (size / 5);
      var yMax = y + (size / 5); 
      y = lerp(yMin, yMax, amt);
    
      var pillWidth = size / 2;
      var pillHeight = size / 4;
      var pillAngle = 135;
    
      translate(x, y);
      rotate(pillAngle);
    
      rect(0 - pillWidth/2, 0 - pillHeight/2, pillWidth, pillHeight, pillWidth, pillWidth, pillWidth, pillWidth);
    
      rotate(-pillAngle);
      translate(-x, -y);
      noFill();
    }
  }
  