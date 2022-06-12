import { scene } from "./scene";
import * as utils from '@dcl/ecs-scene-utils'
import {Sequencer} from "./sequencer";
import {Dispenser} from "./dispenser";

const sequencer = new Sequencer()
engine.addEntity(sequencer)

const dispenser = new Dispenser()
engine.addEntity(dispenser)

const platforms = [
    scene.platformBlue1.entity,
    scene.platformBlue2.entity,
    scene.platformBlue3.entity,
    scene.platformBlue4.entity,
    scene.platformBlue5.entity
]

for (let i = 0; i < platforms.length; i++) {
    platforms[i].addComponent(
        new utils.TriggerComponent(
            new utils.TriggerBoxShape(
                new Vector3(5, 5, 5)
            ),
            {
                onCameraEnter: () => {
                    sequencer.playSound(i + 1)
                }
            }
        )
    )
}
