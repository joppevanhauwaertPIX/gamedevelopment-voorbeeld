class Character {
    constructor(x, y, size) {
        this._speed = 1;
        this._size = size;
        this._loc = createVector(x, y);
        this._direction = createVector(0, 0);
        let futureLoc = this._loc.add(this._direction);
        this._collider = new PhysicsObject(futureLoc.x, futureLoc.y, this._size, this._size);
    }

    ChangeDirection(x, y) {
        let newDirection = this._direction;
        if (abs(x) > 0) {
            newDirection = createVector(x, 0).mult(this._speed);
        }
        else {
            newDirection = createVector(0, y).mult(this._speed);
        }
        
        let futureLoc = p5.Vector.add(this._loc, newDirection);
        this._collider.SetPos(futureLoc.x, futureLoc.y);
        if (this._collider.GetCollision() === false) {
            this._direction = newDirection;
        }
        else {
            this._collider.SetPos(this._x, this._y);
        }
    }

    Update() {
        let futureLoc = p5.Vector.add(this._loc, this._direction);
        this._collider.SetPos(futureLoc.x, futureLoc.y);
        if (this._collider.GetCollision() === false) {
            this._loc.add(this._direction);
        }
        else {
            this._collider.SetPos(this._x, this._y);
        }
    }
}