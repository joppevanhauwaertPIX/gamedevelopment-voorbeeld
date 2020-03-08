class Level {
  constructor(tileSize, levelValuesArray) {
    this._size = tileSize;
    this._pacmanStartPos = createVector(0, 0);
    this._ghostStartPos = createVector(0, 0);
    this._tiles = this.CreateWalls(levelValuesArray);
  }

  CreateWalls(levelValuesArray) {
    let result = [];
    let numRows = levelValuesArray.length;
    for (let y = 0; y < numRows; y++) {
      let numCols = levelValuesArray[y].length;
      for (let x = 0; x < numCols; x++) {
        let value = levelValuesArray[y][x];
        
        let drawTop = y == 0 || levelValuesArray[y-1][x] != value;
        let drawLeft = x == 0 || levelValuesArray[y][x-1] != value;
        let drawRight = x == numCols - 1 || levelValuesArray[y][x+1] != value;
        let drawBottom = y == numRows - 1 || levelValuesArray[y+1][x] != value;
        
        switch(value) {
          case 1: result.push(new Wall((this._size / 2) + (x * this._size), 
                                       (this._size / 2) + (y * this._size), 
                                       this._size,
                                       drawTop,
                                       drawRight,
                                       drawBottom,
                                       drawLeft)); break;
          case 2: this._pacmanStartPos = createVector((this._size / 2) + (x * this._size), 
                                                (this._size / 2) + (y * this._size));
                  break;
          case 3: this._ghostStartPos = createVector((this._size / 2) + (x * this._size), 
                                                (this._size / 2) + (y * this._size));
                  break;
          default: result.push(new Hallway((this._size / 2) + (x * this._size), (this._size / 2) + (y * this._size), this._size)); break;
        }
      }
    }
    return result;
  }

  GetPacmanStartPosition() {
    return this._pacmanStartPos;
  }

  GetGhostStartPosition() {
    return this._ghostStartPos;
  }

  Draw(amt) {
    this._tiles.forEach(tile => {
      tile.Draw(amt);
    });
  }
}
