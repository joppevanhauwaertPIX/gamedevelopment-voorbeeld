  class Wall {
    constructor(x, y, size, drawTop, drawRight, drawBottom, drawLeft) {
      this._x = x;
      this._y = y;
      this._size = size;
      
      this._drawTop = drawTop;
      this._drawLeft = drawLeft;
      this._drawRight = drawRight;
      this._drawBottom = drawBottom;
    }
  
    DrawWall() {
      var x = this._x;
      var y = this._y;
      var size = this._size;
  
      fill(0, 0, 255, 64);
      rect(this._x - size / 2, this._y - size / 2, this._size, this._size);
      stroke(0, 0, 255);
      strokeWeight(4);

    
      //rect(x - size / 2, y - size / 2, size, size);
      if (this._drawTop == true) {
        line(x - size / 2, y - size / 2, x + size / 2, y - size / 2);
      }

      if (this._drawLeft == true) {
        line(x - size / 2, y - size / 2, x - size / 2, y + size / 2);
      }

      if (this._drawRight == true) {
        line(x + size / 2, y - size / 2, x + size / 2, y + size / 2);
      }

      if (this._drawBottom == true) {
        line(x - size / 2, y + size / 2, x + size / 2, y + size / 2);
      }
    
      noStroke();
    }
  }
  