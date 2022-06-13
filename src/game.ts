import { scene } from "./scene";
import * as utils from '@dcl/ecs-scene-utils';
import {Sequencer} from "./sequencer";
import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions";
import { movePlayerTo } from '@decentraland/RestrictedActions';

import {createDispenser} from "./booth/dispenser";
import {Platforms} from "./platforms";
import resources from "./resources";
import {Npc} from "./npc/npc";
import {Utils} from "./utils";

const {
    capsule,
    trebleClef,
    note1,
    note2,
    note3,
    platformBlue1,
    platformBlue2,
    platformBlue3,
    platformBlue4,
    platformBlue5,
    platformBlue6,
    platformBlue7,
} = scene

const notes = [
    note1, note2, note3
]

const platforms = [
    { entity: platformBlue1.entity, clip: resources.audio.sequencer.s1 },
    { entity: platformBlue2.entity, clip: resources.audio.sequencer.s2 },
    { entity: platformBlue3.entity, clip: resources.audio.sequencer.s3 },
    { entity: platformBlue4.entity, clip: resources.audio.sequencer.s4 },
    { entity: platformBlue5.entity, clip: resources.audio.sequencer.s5 },
    { entity: platformBlue6.entity, clip: resources.audio.sequencer.s6 },
    { entity: platformBlue7.entity, clip: resources.audio.sequencer.s7 },
]

const emotions: PredefinedEmote[] = [
    PredefinedEmote.ROBOT,
    PredefinedEmote.TIK,
    PredefinedEmote.TEKTONIK,
    PredefinedEmote.HAMMER,
    PredefinedEmote.DISCO
]

const npcPosition = capsule.transform.position.add(new Vector3(0, 1.6, -2.5))
const playerPosition = npcPosition.add(new Vector3(-4))

const npc = new Npc(npcPosition)
const sequencer = new Sequencer()

createDispenser(
    {
        position: capsule.transform.position,
        rotation: Quaternion.Euler(0, 270, 0)
    },
    resources.poap.eventUUID
)

Platforms.createMovingPlatform(
    scene.tower.entity,
    scene.tower.transform.position.add(new Vector3(0, -2.5)),
    scene.tower.transform.position.add(new Vector3(0, -1)),
    6
)

Platforms.createMovingPlatform(
    scene.platformBlue1.entity,
    scene.platformBlue1.transform.position,
    scene.platformBlue1.transform.position.add(new Vector3(5)),
    4
)

Platforms.createMovingPlatform(
    scene.platformBlue2.entity,
    scene.platformBlue2.transform.position,
    scene.platformBlue2.transform.position.add(new Vector3(-5)),
    4
)

Platforms.createMovingPlatform(
    scene.platformBlue3.entity,
    scene.platformBlue3.transform.position.add(new Vector3(0, 2)),
    scene.platformBlue3.transform.position.add(new Vector3(0, -4)),
    4
)

Platforms.createMovingPlatform(
    scene.platformBlue4.entity,
    scene.platformBlue4.transform.position,
    scene.platformBlue4.transform.position.add(new Vector3(0, 0, -7)),
    4
)

Platforms.createPathedPlatform(
    scene.platformBlue5.entity,
    [
        scene.platformBlue5.transform.position.add(new Vector3(3)),
        scene.platformBlue5.transform.position.add(new Vector3(10)),
        scene.platformBlue5.transform.position.add(new Vector3(10, 0, -10)),
        scene.platformBlue5.transform.position.add(new Vector3(10)),
        scene.platformBlue5.transform.position.add(new Vector3(3))
    ],
    10
)

Platforms.createMovingPlatform(
    scene.platformBlue6.entity,
    scene.platformBlue6.transform.position,
    scene.platformBlue6.transform.position.add(new Vector3(4)),
    7
)

Platforms.createMovingPlatform(
    scene.platformBlue7.entity,
    scene.platformBlue7.transform.position.add(new Vector3(0, 2)),
    scene.platformBlue7.transform.position.add(new Vector3(0, -4)),
    4
)

notes.forEach(note => {
    note.entity.addComponent(
        new utils.KeepRotatingComponent(Quaternion.Euler(0, Utils.getRandom(100, 250), 0))
    )
})

platforms.forEach(platform => {
    const entity = platform.entity
    const audioSource = new AudioSource(resources.audio.donk)
    entity.addComponent(audioSource)
    entity.addComponent(
        new utils.TriggerComponent(
            new utils.TriggerBoxShape(
                new Vector3(5, 5, 5)
            ),
            {
                onCameraEnter: () => {
                    entity.addComponentOrReplace(new GLTFShape(resources.models.platform_yellow))
                    entity.getComponent(AudioSource).playing = true
                    entity.addComponent(
                        new utils.Delay(500, () => {
                            triggerEmote({ predefined: emotions[Utils.getRandom(0, emotions.length - 1)] })
                        })
                    )
                    sequencer.addClip(platform.clip)
                }
            }
        )
    )
})


const clef = trebleClef.entity
clef.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 250, 0)))
clef.addComponent(
    new utils.TriggerComponent(
        new utils.TriggerBoxShape(
            new Vector3(2, 5, 2)
        ),
        {
            onCameraEnter: () => {
                sequencer.stopSounds()
                engine.removeEntity(capsule.entity)
                movePlayerTo(playerPosition).catch((error) => log(error))
            }
        }
    )
)
