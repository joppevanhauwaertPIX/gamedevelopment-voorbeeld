class Physics {
    constructor() {
        this._physicsObjects = [];
    }

    Register(physicsObjects) {
        if (Array.isArray(physicsObjects)) {
            physicsObjects.forEach(po => {
                if (po instanceof PhysicsObject) {
                    this._physicsObjects.push(po);
                    po.SetPhysicsEngine(this);
                }
            });
        } 
        else {
            if (physicsObjects instanceof PhysicsObject) {
                this._physicsObjects.push(physicsObjects);
                physicsObjects.SetPhysicsEngine(this);
            }
        }
    }

    CheckCollisionForPhysicsObject(physicsObject) {
        let result = false;
        this._physicsObjects.forEach(po => {
            if (po != physicsObject && physicsObject.CheckCollision(po) === true) {
                result = po;
                return;
            }
        });
        return result;
    }

    Update() {
        this._physicsObjects.forEach(po1 => {
            this._physicsObjects.forEach(po2 => {
                
                if (po1 != po2 && 
                    po1 instanceof PhysicsObject && 
                    po2 instanceof PhysicsObject && 
                    po1.CheckCollision(po2) == true) {
                    po1.OnCollision(po2);
                }
            });
        });
    }
}