
class Pacman extends Character {
    constructor(x, y, size) {
      super(x, y, size);
      this._angle = 0;
      this._scaleX = 1;
      this.wallHit = false;
    }
    
    DrawPacman(amt) {
      var x = this._loc.x;
      var y = this._loc.y;
      var size = this._size;
  
      noStroke();
      fill(241, 195, 50);
      
      var mouthMinAngle = 20;
      var mouthMaxAngle = 120;
      var mouthAngle = lerp(mouthMinAngle, mouthMaxAngle, amt);
      mouthAngle /= 2;
  
      var mouthStartAngle = mouthAngle;
      var mouthEndAngle = 360 - mouthAngle;
  
      var angle = this._direction.heading();
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
  