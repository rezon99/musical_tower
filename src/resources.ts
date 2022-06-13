export default {
	models: {
		npc: 'models/npc/npc.glb',
		platform_yellow: 'models/platform_yellow/platform_yellow.glb'
	},
	textures: {
		blank: new Texture('images/npc/ui/blank.png'),
		buttonE: new Texture('images/npc/ui/buttonE.png'),
		buttonF: new Texture('images/npc/ui/buttonF.png'),
		leftClickIcon: new Texture('images/npc/ui/leftClickIcon.png'),
		textPanel: new Texture('images/npc/ui/textPanel.png')
	},
    audio: {
		npc: new AudioClip('sounds/npc.mp3'),
		donk: new AudioClip('sounds/donk.mp3'),
        sequencer: {
            s1: new AudioClip('sounds/1.mp3'),
            s2: new AudioClip('sounds/2.mp3'),
            s3: new AudioClip('sounds/3.mp3'),
            s4: new AudioClip('sounds/4.mp3'),
            s5: new AudioClip('sounds/5.mp3'),
        }
    },
	sounds: {

	},
	images: {
		npc: 'images/npc/npc.png'
	},
	poap: {
		eventUUID: ''
	}
}
