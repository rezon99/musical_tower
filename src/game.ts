import { scene } from "./scene";
import * as utils from '@dcl/ecs-scene-utils'
import {Sequencer} from "./entities/sequencer";
import {Dispenser} from "./entities/dispenser";
import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions"
import { movePlayerTo } from '@decentraland/RestrictedActions'
import {NPC, NPCDelay} from "@dcl/npc-scene-utils";
import { AliceDialog } from './libs/npc/dialogData'
import resources from "./resources";

const npcPosition = new Vector3(22, 1.6, 5)
const npcRotation = Quaternion.Euler(0, 270, 0)

export const npc = new NPC(
    {
        position: npcPosition,
        rotation: npcRotation
    },
    resources.models.npc,
    () => {
        // animations
        npc.playAnimation('Hello', true, 2)

        const dummyent = new Entity()
        dummyent.addComponent(
            new NPCDelay(2, () => {
                npc.playAnimation('Talk')
            })
        )
        engine.addEntity(dummyent)

        // sound
        npc.addComponentOrReplace(new AudioSource(resources.sounds.npc))
        npc.getComponent(AudioSource).playOnce()

        // dialog UI
        npc.talk(AliceDialog)
    },
    {
        portrait: {
            path: resources.images.npc,
            height: 256,
            width: 256,
            section: {
                sourceHeight: 512,
                sourceWidth: 512
            }
        },
        onWalkAway: () => {
            npc.playAnimation('Goodbye', true, 2)
        }
    }
)



export const sequencer = new Sequencer()
engine.addEntity(sequencer)

let showDispenser = false

const clef = scene.trebleClef.entity
clef.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 255, 0)))
clef.addComponent(
    new utils.TriggerComponent(
        new utils.TriggerBoxShape(
            new Vector3(2, 5, 2)
        ),
        {
            onCameraEnter: () => {
                if (!showDispenser) {
                    new Dispenser(new Vector3(npcPosition.x, 0, npcPosition.z + 2.5), npcRotation)
                    showDispenser = true
                }

                sequencer.clear()
                engine.removeEntity(sequencer)
                movePlayerTo(new Vector3(npcPosition.x - 4, npcPosition.y, npcPosition.z)).catch((error) => log(error))
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
