import * as utils from '@dcl/ecs-scene-utils'
import resources from "./resources";

export class Sequencer extends Entity {
    private readonly _sounds: {[key: string]: AudioSource}
    private readonly _queue: number[]
    private _playing: boolean

    constructor() {
        super()

        this._sounds = {}
        this._queue = []
        this._playing = false

        const soundResources = resources.sounds.sequencer
        const songs: { key: string, src: string;  }[] = [
            { key: '1', src: soundResources.s1 },
            { key: '2', src: soundResources.s2 },
            { key: '3', src: soundResources.s3 },
            { key: '4', src: soundResources.s4 },
            { key: '5', src: soundResources.s5 },
        ]

        for (let i = 0; i < songs.length; i++) {
            this._createSounds(songs[i].key, songs[i].src)
        }
    }

    private _createSounds (key: string, source: string) {
        const entity = new Entity()
        const shape = new CircleShape()
        const transform = new Transform({ position: Vector3.Zero(), scale: Vector3.Zero() })
        const audioSource = new AudioSource(new AudioClip(source))

        shape.withCollisions = false
        audioSource.loop = true

        entity.addComponent(shape)
        entity.addComponent(transform)
        entity.addComponent(audioSource)

        engine.addEntity(entity)
        entity.setParent(Attachable.FIRST_PERSON_CAMERA)

        this._sounds[key] = audioSource
    }

    playSound(index: number) {
        this._queue.push(index)

        if (!this._playing) {
            this.addComponent(
                new utils.Interval(8000, ()=> {
                    this._onTimeout()
                })
            )
            this._onTimeout()
            this._playing = true
        }
    }

    private _onTimeout() {
        while (this._queue.length) {
            const index = this._queue.shift()
            if (index) this._sounds[index].playing = true
        }
    }
}
