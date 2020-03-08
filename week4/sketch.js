let ghost1 = null;
let pacman1 = null;
let level = null;

let levelValues = [[1,1,1,1,1,1,1,1,1,1],
                   [1,0,0,0,2,0,0,0,0,1],
                   [1,0,1,1,0,1,1,1,0,1],
                   [1,0,1,1,0,1,1,1,0,1],
                   [1,0,0,0,0,0,0,0,0,1],
                   [1,1,1,0,1,1,0,1,1,1],
                   [1,1,1,0,1,1,0,1,1,1],
                   [0,0,0,0,1,1,0,0,0,0],
                   [1,1,1,0,0,3,0,1,1,1],
                   [1,1,1,1,1,1,1,1,1,1]];


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  level = new Level(50, levelValues);
  
  let ghostStartPos = level.GetGhostStartPosition();
  ghost1 = new Ghost(ghostStartPos.x, ghostStartPos.y, 50, color(250, 0, 2));

  let pacmanStartPos = level.GetPacmanStartPosition();
  pacman1 = new Pacman(pacmanStartPos.x, pacmanStartPos.y, 50);
}

function draw() {
  background(0);
  
  var t = millis() / 1000;
  t -= floor(millis() / 1000);
  t-=0.5;
  t*=2;
  t = abs(t);
  
  ghost1.Draw(t);
  pacman1.Draw(t);

  level.Draw(t);

  if (keyIsDown(UP_ARROW)) {
    pacman1.Move(0,-1);
  }
  else if (keyIsDown(DOWN_ARROW)) {
    pacman1.Move(0,1);
  }
  else if (keyIsDown(LEFT_ARROW)) {
    pacman1.Move(-1,0);
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    pacman1.Move(1,0);
  }
} 
