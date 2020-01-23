function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  var t = millis() / 1000;
  t -= floor(millis() / 1000);
  t-=0.5;
  t*=2;
  t = abs(t);

  DrawPacman(50, 100, 50, t);
  DrawDot(75, 100, 50);
  DrawDot(100, 100, 50);
  DrawDot(125, 100, 50);
  DrawPill(50, 150, 50, t);

  DrawWall(300, 250, 50);

  DrawGhost(200, 50, 50, color(252, 38, 2), t);
  DrawGhost(200, 100, 50, color(255, 162, 0), t);
  DrawGhost(200, 150, 50, color(255, 177, 177), t);
  DrawGhost(200, 200, 50, color(1, 221, 221), t);

  DrawFruit(300, 100, 50);
} 

function DrawWall(x, y, size) {
  noFill();
  stroke(0, 0, 255);
  strokeWeight(4);

  rect(x - size / 2, y - size / 2, size, size);
  size *= 0.7;
  rect(x - size / 2, y - size / 2, size, size);

  noStroke();
}

function DrawDot(x, y, size) {
  fill(255);
  noStroke();

  circle(x, y, size / 5);

  noFill();
}

function DrawPacman(x, y, size, amt) {
  noStroke();
  fill(241, 195, 50);
  
  var mouthMinAngle = 20;
  var mouthMaxAngle = 120;
  var mouthAngle = lerp(mouthMinAngle, mouthMaxAngle, amt)
  mouthAngle /= 2;

  var mouthStartAngle = mouthAngle;
  var mouthEndAngle = 360 - mouthAngle;

  var angle = 0;
  translate(x, y);
  rotate(angle);
  
  arc(0, 0, size, size, mouthStartAngle, mouthEndAngle, PIE);

  fill(0);

  circle(0, 0 - (size / 4), size / 10);
  
  rotate(-angle);
  translate(-x, -y);

  noFill();
}

function DrawPill(x, y, size, amt) {
  fill(255);
  noStroke();

  var yMin = y - (size / 5);
  var yMax = y + (size / 5); 
  y = lerp(yMin, yMax, amt);

  pillWidth = size / 2;
  pillHeight = size / 4;
  pillAngle = 135;

  translate(x, y);
  rotate(pillAngle);

  rect(0 - pillWidth/2, 0 - pillHeight/2, pillWidth, pillHeight, pillWidth, pillWidth, pillWidth, pillWidth);

  rotate(-pillAngle);
  translate(-x, -y);
  noFill();
}

function DrawFruit(x, y, size) {
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

function DrawGhost(x, y, size, color, amt) {
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