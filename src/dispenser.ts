import {createDispenser} from "./libs/booth/dispenser";

export class Dispenser extends Entity {
    constructor() {
        super();
        createDispenser(
            {
                position: new Vector3(18.5,35.5, 12),
                rotation: Quaternion.Euler(0, 0, 0)
            },
            'acd27e4b-24bd-4040-b715-c0e11e863fb0'
        )
    }
}
