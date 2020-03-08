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
    

    CheckCollision(x, y, w, h) {

      var x1 = this._x - (this._w / 2);
      var y1 = this._y - (this._h / 2);
      var w1 = this._size;
      var h1 = this._size;
      var x2 = x - (w / 2);
      var y2 = y - (h / 2);
      var w2 = w;
      var h2 = h;

      if (x1 + w1 >= x2 &&    // r1 right edge past r2 left
          x1 <= x2 + w2 &&    // r1 left edge past r2 right
          y1 + h1 >= y2 &&    // r1 top edge past r2 bottom
          y1 <= y2 + h2) {    // r1 bottom edge past r2 top
            return true;
      }
      return false;
  }
  
    Draw() {
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
  