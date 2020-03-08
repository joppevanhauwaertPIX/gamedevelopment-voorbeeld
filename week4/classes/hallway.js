  class Hallway {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
      this._object = null;

      if (random(1) < 0.1) {
        this._object = new Fruit(this._x, this._y, this._size * 4/5);
      }
      else if (random(1) < 0.1) {
        this._object = new Pill(this._x, this._y, this._size * 4/5);
      }
      else if (random(1) <= 1) {
        this._object = new Dot(this._x, this._y, this._size * 4/5);
      }
    }

    Draw(amt) {
      if (this._object != null) {
        this._object.Draw(amt);
      }
    }
  }
  