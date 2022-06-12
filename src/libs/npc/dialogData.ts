import { Dialog } from '@dcl/npc-scene-utils'
import { npc } from '../../game'

export const AliceDialog: Dialog[] = [
  {
    text: "Hi, I'm Alice - welcome to Genesis Plaza!"
  },
  {
    text: 'Would you like to learn more about this place?',
    isQuestion: true,
    buttons: [
      { label: 'Yes', goToDialog: 3 },
      { label: 'No', goToDialog: 2 }
    ]
  },
  {
    text: "Okay, I'll be around if you get curious!",
    isEndOfDialog: true,
    triggeredByNext: () => {
      npc.playAnimation('Goodbye', true, 2)
    }
  },
  {
    text: 'We’re currently in the center of the Genesis City map, the roads fan out in all directions from here.'
  },
  {
    text: 'Genesis Plaza is built and maintained by the Decentraland Foundation but is still in many ways a community project.'
  },
  {
    text: 'If you venture out into the world, you’ll see that the content is created by our growing community.'
  },
  {
    text: 'Do you want to explore the rest of Genesis Plaza or explore the rest of the world?',
    isQuestion: true,
    buttons: [
      { label: 'PLAZA', goToDialog: 7 },
      { label: 'WORLD', goToDialog: 18 }
    ]
  },
  {
    text: 'Great! There’s a lot to see right here.'
  },
  {
    text: 'If you walk around you might run into my buddies and each is an expert on a different topic.'
  },
  {
    text: 'You can learn a lot from them about how Decentraland works and what makes it special.'
  },
  {
    text: 'I recommend you start at that boat-shaped building to the North!'
  },
  {
    text: "Do you also want to learn about what's beyond Genesis Plaza?",
    isQuestion: true,
    buttons: [
      { label: 'YES', goToDialog: 12 },
      { label: 'NO', goToDialog: 28 }
    ]
  },
  {
    text: 'There’s a big world to explore out there!',
    offsetY: 18
  },
  {
    text: "Around Genesis Plaza you'll find several teleports that can take you directly to special scenes marked as points of interest."
  },
  {
    text: "There's also the 'crowd' teleport, which takes you to the biggest gathering of people in Decentraland so you can meet up and hang out."
  },
  {
    text: "If you press the 'M' key, you’ll open the map. You'll see markers for points of interest that are worth visiting."
  },
  {
    text: "Or simply explore the virtual world by foot and plot your own adventure. Just keep in mind that there's a LOT of ground to cover."
  },
  {
    text: 'So what are you waiting for? Go and explore the world!',
    isEndOfDialog: true,
    triggeredByNext: () => {
      npc.playAnimation('Goodbye', true, 2)
    }
  },
  {
    text: 'There’s a big world to explore out there!'
  },
  {
    text: "Around Genesis Plaza you'll find several teleports that can take you directly to special scenes marked as points of interest."
  },
  {
    text: "There's also the 'crowd' teleport, which takes you to the biggest gathering of people in Decentraland so you can meet up and hang out."
  },
  {
    text: "If you press the 'M' key, you’ll open the map. You'll see markers for points of interest that are worth visiting."
  },
  {
    text: "Or simply explore the virtual world by foot and plot your own adventure. Just keep in mind that there's a LOT of ground to cover."
  },
  {
    text: "Do you also want to find out what's here in Genesis Plaza?",
    isQuestion: true,
    buttons: [
      { label: 'YES', goToDialog: 24 },
      { label: 'NO', goToDialog: 28 }
    ]
  },
  {
    text: 'Great! There’s a lot to see right here.'
  },
  {
    text: 'If you walk around you might run into my buddies and each is an expert on a different topic.'
  },
  {
    text: 'You can learn a lot from them about how Decentraland works and what makes it special.'
  },
  {
    text: 'I recommend you start at that boat-shaped building to the North!'
  },
  {
    text: "Well that's it from me. So what are you waiting for? Go and explore the world!",
    triggeredByNext: () => {
      npc.playAnimation('Goodbye', true, 2)
    },
    isEndOfDialog: true
  }
]
