let dot1 = null;
let fruit1 = null;
let ghost1 = null;
let pacman1 = null;
let pill1 = null;
let level = null;

let levelValues = [[1,1,1,1,1,1,1,1,1,1],
                   [1,0,0,0,0,0,0,0,0,1],
                   [1,0,1,1,0,1,1,1,0,1],
                   [1,0,1,1,0,1,1,1,0,1],
                   [1,0,0,0,0,0,0,0,0,1],
                   [1,1,1,0,1,1,0,1,1,1],
                   [1,1,1,0,1,1,0,1,1,1],
                   [0,0,0,0,1,1,0,0,0,0],
                   [1,1,1,0,0,0,0,1,1,1],
                   [1,1,1,1,1,1,1,1,1,1]];


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  ghost1 = new Ghost(100, 300, 50, color(250, 0, 2));
  dot1 = new Dot(100, 100, 50);
  fruit1 = new Fruit(100, 200, 50);
  ghost1 = new Ghost(100, 300, 50, color(250, 0, 2));
  pacman1 = new Pacman(300, 100, 50);
  pill1 = new Pill(200, 200, 50);

  level = new Level(50, levelValues);
}

function draw() {
  background(0);
  
  var t = millis() / 1000;
  t -= floor(millis() / 1000);
  t-=0.5;
  t*=2;
  t = abs(t);
  
  dot1.DrawDot();
  fruit1.DrawFruit();
  ghost1.DrawGhost(t);
  pacman1.DrawPacman(t);
  pill1.DrawPill(t);

  level.DrawLevel();
} 
