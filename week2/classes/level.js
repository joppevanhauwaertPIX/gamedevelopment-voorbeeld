class Level {
  constructor(size, levelValuesArray) {
    this._size = size;
    this._components = this.CreateWalls(levelValuesArray);

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
        let drawRight = x == numCols - 1 || levelValuesArray[y][x+1] != value;;
        let drawBottom = y == numRows - 1 || levelValuesArray[y+1][x] != value;
        
        switch(value) {
          case 1: result.push(new Wall((this._size / 2) + (x * this._size), 
                                       (this._size / 2) + (y * this._size), 
                                       this._size,
                                       drawTop,
                                       drawRight,
                                       drawBottom,
                                       drawLeft)); break;
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
