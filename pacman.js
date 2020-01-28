class Level {
  constructor(size, levelValuesArray) {
    this._size = size;
    this._components = this.CreateWalls(levelValuesArray);
  }

  CreateWalls(levelValuesArray) {
    let result = [];
    for (let y = 0; y < levelValuesArray.length; y++) {
      for (let x = 0; x < levelValuesArray[y].length; x++) {
        let value = levelValuesArray[y][x];
        
        switch(value) {
          case 1: result.push(new Wall((this._size / 2) + (x * this._size), (this._size / 2) + (y * this._size), this._size)); break;
          default: result.push(new Hallway((this._size / 2) + (x * this._size), (this._size / 2) + (y * this._size), this._size)); break;
        }
      }
    }
    return result;
  }

  Update() {
    this._components.forEach(comp => {
      comp.Update();
    });
  }
}

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
      var mouthAngle = lerp(mouthMinAngle, mouthMaxAngle, amt)
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
  
class Player {
    constructor(x, y, size) {
      this._pacman = new Pacman(x, y, size);
      this._keyCode = null;
    }
  
    Update() {
      var oldKeyCode = this._keyCode;
      this._keyCode = keyCode;
      switch(keyCode) {
        case LEFT_ARROW: this._pacman.Move(-1, 0); break;
        case RIGHT_ARROW: this._pacman.Move(1, 0); break;
        case UP_ARROW: this._pacman.Move(0, -1); break;
        case DOWN_ARROW: this._pacman.Move(0, 1); break;
        default: keyCode = oldKeyCode; break;
      }
      
      var t = millis() / 1000;
      t -= floor(millis() / 1000);
      t-=0.5;
      t*=2;
      t = abs(t);
  
      this._pacman.DrawPacman(t);
    }
  }
  
  class Ghost {
    constructor(x, y, size, color) {
      this._x = x;
      this._y = y;
      this._size = size;
      this._color = color;
    }
  
    Move(x, y) {
      this._x += x;
      this._y += y;
    }

    Update() {
      var t = millis() / 1000;
      t -= floor(millis() / 1000);
      t-=0.5;
      t*=2;
      t = abs(t);
      this.DrawGhost(t);
    }
  
    DrawGhost(amt) {
      var x = this._x;
      var y = this._y;
      var size = this._size;
      var color = this._color;
  
      noStroke();
      fill(color);
    
      // make sure the ghost is drawn around the center
      // so subtract half the size for both x and y
      x -= size / 2;
      y -= size / 2;
    
      // the height of the little triangles at the bottom
      var ghostTriangleHeight = size / 5;
      
      // the size of the rect should be the given size, minus
      // the height of the triangles
      size -= ghostTriangleHeight;
    
      // because we reduced the size, the ghost is no longer centered on
      // the x axis. So we need to add half a triangle to the x position
      x += ghostTriangleHeight / 2;
      
      // draw the ghost main body with rounded corners on top
      rect(x, y, size, size, size, size, 0, 0);
      
      // a ghost has 2 half-triangles and 2 full-size triangles,
      // which is a total of 3 triangles. So the width of a triangle
      // is equal to a third of the size
      var ghostTriangleWidth = size / 3;
    
      // I use two helper variables:
      // the triangle TopLeft X (TLX) value and the triangle TopLeft Y value (TLY)
      var triangleTLX = x;
      var triangleTLY = y + size;
    
      // draw the first triangle
      // this is actually half a triangle
      // point 1 (topleft point): uses both helper variabels
      // point 2 (bottom point): uses helper X, and adds the height to the Y helper
      // point 3 (topright point): helper X + half of the width, uses helper Y
      // left triangle
      triangle(triangleTLX, triangleTLY, 
               triangleTLX, triangleTLY + ghostTriangleHeight,
               triangleTLX + (ghostTriangleWidth / 2), triangleTLY);
      
      // draw the second triangle
      // first move the helper X value to the right (half a triangle width)
      triangleTLX += ghostTriangleWidth / 2;
      // point 1 (topleft point): uses both helper variables
      // point 2 (bottom point): x helper + helf the width, y helper + triangle height
      // point 3 (topright point): x helper + width, uses y helper
      // second triangle
      triangle(triangleTLX, triangleTLY, 
                triangleTLX + (ghostTriangleWidth / 2), triangleTLY + ghostTriangleHeight,
                triangleTLX + ghostTriangleWidth, triangleTLY);
    
      // draw the third triangle
      // first move the helper X value to the right (by one triangle width)
      triangleTLX += ghostTriangleWidth;
      // point 1 (topleft point): uses both helper variables
      // point 2 (bottom point): x helper + helf the width, y helper + triangle height
      // point 3 (topright point): x helper + width, uses y helper
      // second triangle
      triangle(triangleTLX, triangleTLY, 
                triangleTLX + (ghostTriangleWidth / 2), triangleTLY + ghostTriangleHeight,
                triangleTLX + ghostTriangleWidth, triangleTLY);
    
      // last triangle
      // this is actually half a triangle
      // first move the helper X value to the right (by one triangle width)
      triangleTLX += ghostTriangleWidth;
      // point 1 (topleft point): uses both helper variables
      // point 2 (bottom point): x helper + helf the width, y helper + triangle height
      // point 3 (topright point): x helper +  half the width, uses y helper
      triangle(triangleTLX, triangleTLY, 
                triangleTLX + (ghostTriangleWidth / 2), triangleTLY + ghostTriangleHeight,
                triangleTLX + (ghostTriangleWidth / 2), triangleTLY);
    
      // draw the eyes
      fill(255);
      var eyeSize = size / 3;
      var irisSize = eyeSize / 3;
      var irisXOffset = eyeSize / 5;
      var irisYOffset = eyeSize / 8;
      
      var eyePosX = x + (size / 3.5);
      var eyePosY = y + (size / 2.5);
      var irisPosX = lerp(eyePosX - irisXOffset, eyePosX + irisXOffset, amt);
      var irisPosY = eyePosY + irisYOffset;
      // draw left eye
      circle(eyePosX, eyePosY, eyeSize);
      fill(0);
      // draw left iris
      circle(irisPosX, irisPosY, irisSize);
      
      fill(255);
      var eyePosX = x + size - (size / 3.5);
      var irisPosX = lerp(eyePosX - irisXOffset, eyePosX + irisXOffset, amt);
      // draw right eye
      circle(eyePosX, eyePosY, eyeSize);
      fill(0);
      // draw right iris
      circle(irisPosX, irisPosY, irisSize);
      
      noFill();
    }
  }
  
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
  
  class Fruit {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
    }

    Update() {
      this.DrawFruit();
    }
  
    DrawFruit() {
      var x = this._x;
      var y = this._y;
      var size = this._size;
  
      var cherrySize = size / 2;
      var cherryX = x + size / 5;
      var cherryY = y + cherrySize / 2;
    
      stroke(180, 80, 30);
      strokeWeight(5);
      line(cherryX, cherryY, x, y - size / 2);
      noStroke();
      fill(255, 0, 0);
      circle(cherryX, cherryY, cherrySize);
      
      var cherryX = x - size / 5;
    
      stroke(180, 80, 30);
      strokeWeight(5);
      line(cherryX, cherryY, x, y - size / 2);
      noStroke();
      fill(255, 0, 0);
      circle(cherryX, cherryY, cherrySize);
      
      noFill();
    }
  }

