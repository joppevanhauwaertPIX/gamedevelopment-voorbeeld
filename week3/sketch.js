let dot1 = null;
let fruit1 = null;
let ghost1 = null;
let hallway1 = null;
let pacman1 = null;
let pill1 = null;
let wall1 = null;

let dot2 = null;
let fruit2 = null;
let ghost2 = null;
let hallway2 = null;
let pacman2 = null;
let pill2 = null;
let wall2 = null;


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  ghost1 = new Ghost(100, 300, 50, color(250, 0, 2));
  dot1 = new Dot(100, 100, 50);
  fruit1 = new Fruit(100, 200, 50);
  ghost1 = new Ghost(100, 300, 50, color(250, 0, 2));
  hallway1 = new Hallway(200, 100, 50);
  pacman1 = new Pacman(300, 100, 50);
  pill1 = new Pill(200, 200, 50);
  wall1 = new Wall(300, 300, 50, true, true, true, true);
  
  ghost2 = new Ghost(150, 350, 50, color(250, 0, 2));
  dot2 = new Dot(150, 150, 50);
  fruit2 = new Fruit(150, 250, 50);
  ghost2 = new Ghost(150, 350, 50, color(250, 0, 250));
  hallway2 = new Hallway(250, 150, 50);
  pacman2 = new Pacman(350, 150, 50);
  pill2 = new Pill(250, 250, 50);
  wall2 = new Wall(350, 350, 50, true, true, true, true);
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
  wall1.DrawWall();
  
  dot2.DrawDot();
  fruit2.DrawFruit();
  ghost2.DrawGhost(t);
  pacman2.DrawPacman(t);
  pill2.DrawPill(t);
  wall2.DrawWall();
} 