var dots = [];
var pill = null;
var ghosts = [];
var fruit = null;
var player = null;

var levelArr = [[1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1]];
var level = null;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  player = new Player(75, 75, 50);

  dots.push(new Dot(125, 75, 50),
            new Dot(175, 75, 50),
            new Dot(225, 75, 50));
  pill = new Pill(125, 175, 50);
  ghosts.push(new Ghost(375, 75, 50, color(252, 38, 2)),
              new Ghost(375, 125, 50, color(255, 162, 0)),
              new Ghost(375, 175, 50, color(255, 177, 177)),
              new Ghost(325, 175, 50, color(1, 221, 221)));
  fruit = new Fruit(275, 75, 50);

  level = new Level(50, levelArr);
}

function draw() {
  background(0);
  level.Update();

  player.Update();
  pill.Update();
  fruit.Update();

  dots.forEach(dot => {
    dot.Update();
  });

  ghosts.forEach(ghost => {
    ghost.Update();
  });
} 