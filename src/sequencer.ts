import { Interval } from '@dcl/ecs-scene-utils'

export class Sequencer extends Entity {
    private readonly _sounds: {[key: string]: AudioSource}
    private _playing: boolean

    constructor() {
        super()

        this._sounds = {}
        this._playing = false

        engine.addEntity(this)
    }

    addClip (clip: AudioClip) {
        const key = clip.url

        if (!this._sounds[key]) {
            const entity = new Entity()
            const shape = new CircleShape()
            const transform = new Transform({position: Vector3.Zero(), scale: Vector3.Zero()})
            const audioSource = new AudioSource(clip)

            shape.withCollisions = false
            // audioSource.loop = true

            entity.addComponent(shape)
            entity.addComponent(transform)
            entity.addComponent(audioSource)

            engine.addEntity(entity)
            entity.setParent(Attachable.FIRST_PERSON_CAMERA)

            this._sounds[key] = audioSource
        }

        if (!this._playing) {
            this.addComponent(
                new Interval(8000, () => this._onPlaySoundTimeout())
            )
            this._onPlaySoundTimeout()
            this._playing = true
        }
    }

    stopSounds () {
        this.addComponentOrReplace(
            new Interval(100, () => this._onStopSoundsTimeout())
        )
    }

    private _onPlaySoundTimeout () {
        for (const key in this._sounds) {
            this._sounds[key].playOnce()
        }
    }

    private _onStopSoundsTimeout () {
        for (const key in this._sounds) {
            this._sounds[key].volume -= 0.015
        }

        const sounds = Object.keys(this._sounds).map(k => this._sounds[k])
        if (sounds.every(s => s.volume === 0)) {
            this.removeComponent(Interval)
        }
    }
}
