export default {
	models: {
		npc: 'models/robots/npc.glb',
	},
	textures: {
		blank: new Texture('images/ui/blank.png'),
		buttonE: new Texture('images/ui/buttonE.png'),
		buttonF: new Texture('images/ui/buttonF.png'),
		leftClickIcon: new Texture('images/ui/leftClickIcon.png'),
		textPanel: new Texture('images/ui/textPanel.png')
	},
    sounds: {
		npc: new AudioClip('sounds/npc.mp3'),

        dispenser: {

        },
        sequencer: {
            s1: 'sounds/1.mp3',
            s2: 'sounds/2.mp3',
            s3: 'sounds/3.mp3',
            s4: 'sounds/4.mp3',
            s5: 'sounds/5.mp3',
        }
    },
	images: {
		npc: 'images/portraits/npc.png'
	}
}
