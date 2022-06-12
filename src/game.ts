import { scene } from "./scene";
import * as utils from '@dcl/ecs-scene-utils'
import {Sequencer} from "./entities/sequencer";
import {Dispenser} from "./entities/dispenser";
import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions"
import { movePlayerTo } from '@decentraland/RestrictedActions'

const sequencer = new Sequencer()
engine.addEntity(sequencer)
/*
const dispenser = new Dispenser()
engine.addEntity(dispenser)
*/

const clef = scene.trebleClef.entity
clef.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 255, 0)))
clef.addComponent(
    new utils.TriggerComponent(
        new utils.TriggerBoxShape(
            new Vector3(2, 5, 2)
        ),
        {
            onCameraEnter: () => {
                log('onCameraEnter')
                movePlayerTo(
                    scene.platformBlue1.entity.getComponent(Transform).position
                ).catch((error) => log(error))
            }
        }
    )
)



const platforms = [
    scene.platformBlue1.entity,
    scene.platformBlue2.entity,
    scene.platformBlue3.entity,
    scene.platformBlue4.entity,
    scene.platformBlue5.entity
]

const routines: PredefinedEmote[] = [
    PredefinedEmote.ROBOT,
    PredefinedEmote.TIK,
    PredefinedEmote.TEKTONIK,
    PredefinedEmote.HAMMER,
    PredefinedEmote.DISCO
]

const clip = new AudioClip('sounds/donk.mp3')
for (let i = 0; i < platforms.length; i++) {
    const platform = platforms[i]
    const audioSource = new AudioSource(clip)
    platform.addComponent(audioSource)
    platform.addComponent(
        new utils.TriggerComponent(
            new utils.TriggerBoxShape(
                new Vector3(5, 5, 5)
            ),
            {
                onCameraEnter: () => {
                    platform.removeComponent(GLTFShape)
                    platform.addComponent(new GLTFShape('models/platform_yellow/platform_yellow.glb'))
                    sequencer.playSound(i + 1)
                    platform.getComponent(AudioSource).playing = true
                    platform.addComponent(
                        new utils.Delay(500, () => {
                            triggerEmote({ predefined: routines[getRandom(0, routines.length - 1)] })
                        })
                    )
                }
            }
        )
    )
}

function getRandom (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
/*
export default {
    sequencer
}*/
