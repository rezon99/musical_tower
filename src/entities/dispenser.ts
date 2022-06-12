import {createDispenser} from "../libs/booth/dispenser";

export class Dispenser extends Entity {
    constructor(position: Vector3, rotation: Quaternion) {
        super();
        createDispenser(
            {
                position,
                rotation
            },
            'acd27e4b-24bd-4040-b715-c0e11e863fb0'
        )
    }
}
