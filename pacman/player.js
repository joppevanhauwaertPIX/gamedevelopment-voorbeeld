class Player {
    constructor(x, y, size) {
      this._pacman = new Pacman(x, y, size);
      this._keyCode = null;
    }
  
    Update() {
      //var oldKeyCode = this._keyCode;
      //this._keyCode = keyCode;
      switch (true) {
        case keyIsDown(LEFT_ARROW): this._pacman.ChangeDirection(-1, 0); break;
        case keyIsDown(RIGHT_ARROW): this._pacman.ChangeDirection(1, 0); break;
        case keyIsDown(UP_ARROW): this._pacman.ChangeDirection(0, -1); break;
        case keyIsDown(DOWN_ARROW): this._pacman.ChangeDirection(0, 1); break;
      }
      
      var t = millis() / 1000;
      t -= floor(millis() / 1000);
      t-=0.5;
      t*=2;
      t = abs(t);
  
      this._pacman.Update();
      this._pacman.DrawPacman(t);
    }
  }