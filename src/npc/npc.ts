import {NPC, NPCDelay} from "@dcl/npc-scene-utils";
import resources from "../resources";
import {NpcDialog} from "./dialog";

export class Npc {
    constructor (position: Vector3) {
        const npc = new NPC(
            {
                position: position,
                rotation: Quaternion.Euler(0, 270, 0)
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
                npc.addComponentOrReplace(new AudioSource(resources.audio.npc))
                npc.getComponent(AudioSource).playOnce()

                // dialog UI
                npc.talk(NpcDialog)
            },
            {
                onlyClickTrigger: true,
                faceUser: true,
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
    }
}
