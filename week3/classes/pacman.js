
class Pacman {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
    }
    
    DrawPacman(amt) {
      push();
  
      noStroke();
      fill(241, 195, 50);
      
      var mouthMinAngle = 20;
      var mouthMaxAngle = 120;
      var mouthAngle = lerp(mouthMinAngle, mouthMaxAngle, amt);
      mouthAngle /= 2;
  
      var mouthStartAngle = mouthAngle;
      var mouthEndAngle = 360 - mouthAngle;
  
      translate(this._x, this._y);
      
      arc(0, 0, this._size, this._size, mouthStartAngle, mouthEndAngle, PIE);
  
      fill(0);
  
      circle(0, 0 - (this._size / 4), this._size / 10);
      
      pop();
    }
  }
  