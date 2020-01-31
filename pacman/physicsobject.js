class PhysicsObject {
    constructor(x, y, w, h) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._physics = null;
    }

    SetPos(x, y) {
        this._x = x;
        this._y = y;
    }

    SetPhysicsEngine(physics) {
        this._physics = physics;
    }

    GetCollision() {
        let collision = this._physics.CheckCollisionForPhysicsObject(this);
        return collision;
    }

    Draw() {
        push();
        stroke(255, 0, 0);
        strokeWeight(1);
        rect(this._x - this._w / 2, this._y - this._h / 2, this._w, this._h);
        pop();
    }

    CheckCollision(physicsObject) {

        var x1 = this._x - (this._w / 2);
        var y1 = this._y - (this._h / 2);
        var w1 = this._w;
        var h1 = this._h;
        var x2 = physicsObject._x - (physicsObject._w / 2);
        var y2 = physicsObject._y - (physicsObject._h / 2);
        var w2 = physicsObject._w;
        var h2 = physicsObject._h;

        if (x1 + w1 >= x2 &&    // r1 right edge past r2 left
            x1 <= x2 + w2 &&    // r1 left edge past r2 right
            y1 + h1 >= y2 &&    // r1 top edge past r2 bottom
            y1 <= y2 + h2) {    // r1 bottom edge past r2 top
              return true;
        }
        return false;
    }

    OnCollision(physicsObject) {
        
    }
}