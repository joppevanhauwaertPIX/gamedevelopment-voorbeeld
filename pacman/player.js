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