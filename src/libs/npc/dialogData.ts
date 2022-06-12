import { Dialog } from '@dcl/npc-scene-utils'
import { npc } from '../../game'

export const AliceDialog: Dialog[] = [
  // #0
  {
    text: "Hi,\nI'm  Johann Pachelbel welcome to the Musical Tower!"
  },
  // #1
  {
    text: "Musical Tower consists of musical notes and scores.\n\nClimbing the steps you can play a nice music mix.\nTo listen to all the tracks you need to get to the top step."
  },
  // #2
  {
    text: "At the very top of the Musical Tower there is a treble clef, grub it and take your POAP."
  },
  // #3
  {
    text: "Good Luck!",
    isEndOfDialog: true,
    triggeredByNext: () => {
      npc.playAnimation('Goodbye', true, 2)
    }
  }
]
