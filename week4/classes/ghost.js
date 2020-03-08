  class Ghost {
    constructor(x, y, size, color) {
      this._x = x;
      this._y = y;
      this._size = size;
      this._color = color;
    }
  
    Draw(amt) {
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