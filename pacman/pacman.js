
class Pacman {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
      this._angle = 0;
      this._scaleX = 1;
    }
  
    Move(x, y) {
      this._x += x;
      this._y += y;
  
      if (x > 0) {
        this._angle = 0;
        this._scaleX = 1;
      }
      else if (x < 0) {
        this._angle = 0;
        this._scaleX = -1;
      }
      else if (y > 0) {
        this._angle = 90;
        this._scaleX = 1;
      }
      else if (y < 0) {
        this._angle = 270;
        this._scaleX = 1;
      }
    }
    
    DrawPacman(amt) {
      var x = this._x;
      var y = this._y;
      var size = this._size;
  
      noStroke();
      fill(241, 195, 50);
      
      var mouthMinAngle = 20;
      var mouthMaxAngle = 120;
      var mouthAngle = lerp(mouthMinAngle, mouthMaxAngle, amt);
      mouthAngle /= 2;
  
      var mouthStartAngle = mouthAngle;
      var mouthEndAngle = 360 - mouthAngle;
  
      var angle = this._angle;
      var scaleX = this._scaleX;
      translate(x, y);
      scale(scaleX, 1);
      rotate(angle);
      
      arc(0, 0, size, size, mouthStartAngle, mouthEndAngle, PIE);
  
      fill(0);
  
      circle(0, 0 - (size / 4), size / 10);
      
      rotate(-angle);
      scale(scaleX, 1);
      translate(-x, -y);
  
      noFill();
    }
  }
  