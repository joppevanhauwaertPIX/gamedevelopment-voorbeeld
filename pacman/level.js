class Level {
  constructor(size, levelValuesArray) {
    this._size = size;
    this._components = this.CreateWalls(levelValuesArray);
  }

  CreateWalls(levelValuesArray) {
    let result = [];
    for (let y = 0; y < levelValuesArray.length; y++) {
      for (let x = 0; x < levelValuesArray[y].length; x++) {
        let value = levelValuesArray[y][x];
        
        switch(value) {
          case 1: result.push(new Wall((this._size / 2) + (x * this._size), (this._size / 2) + (y * this._size), this._size)); break;
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
