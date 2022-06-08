import {scene} from "./scene"
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/CityTile.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
    position: new Vector3(24, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
    position: new Vector3(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
    position: new Vector3(24, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const platformFINALFilolet = new Entity('platformFINALFilolet')
engine.addEntity(platformFINALFilolet)
platformFINALFilolet.setParent(_scene)
const transform6 = new Transform({
    position: new Vector3(23.5, 7.5, 18.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/platform_FINAL_1_filolet.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
platformFINALFilolet.addComponentOrReplace(gltfShape2)

const platformFINALFilolet2 = new Entity('platformFINALFilolet2')
engine.addEntity(platformFINALFilolet2)
platformFINALFilolet2.setParent(_scene)
platformFINALFilolet2.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
    position: new Vector3(13.5, 2, 18),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet2.addComponentOrReplace(transform7)

const platformFINALFilolet3 = new Entity('platformFINALFilolet3')
engine.addEntity(platformFINALFilolet3)
platformFINALFilolet3.setParent(_scene)
platformFINALFilolet3.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
    position: new Vector3(9, 0.5, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet3.addComponentOrReplace(transform8)

const platformFINALFilolet4 = new Entity('platformFINALFilolet4')
engine.addEntity(platformFINALFilolet4)
platformFINALFilolet4.setParent(_scene)
const transform9 = new Transform({
    position: new Vector3(22.5, 4.5, 26.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet4.addComponentOrReplace(transform9)
platformFINALFilolet4.addComponentOrReplace(gltfShape2)

const platformRed = new Entity('platformRed')
engine.addEntity(platformRed)
platformRed.setParent(_scene)
const transform10 = new Transform({
    position: new Vector3(18.5, 35.5, 12),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformRed.addComponentOrReplace(transform10)
const gltfShape3 = new GLTFShape("models/platform_red.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
platformRed.addComponentOrReplace(gltfShape3)

const platformBlue = new Entity('platformBlue')
engine.addEntity(platformBlue)
platformBlue.setParent(_scene)
const transform11 = new Transform({
    position: new Vector3(18, 3.5, 22.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformBlue.addComponentOrReplace(transform11)
const gltfShape4 = new GLTFShape("models/platform_blue.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
platformBlue.addComponentOrReplace(gltfShape4)

const platformBlue4 = new Entity('platformBlue4')
engine.addEntity(platformBlue4)
platformBlue4.setParent(_scene)
platformBlue4.addComponentOrReplace(gltfShape4)
const transform12 = new Transform({
    position: new Vector3(18.5, 9, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformBlue4.addComponentOrReplace(transform12)

const platformFINALFilolet5 = new Entity('platformFINALFilolet5')
engine.addEntity(platformFINALFilolet5)
platformFINALFilolet5.setParent(_scene)
platformFINALFilolet5.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
    position: new Vector3(27, 6, 23),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet5.addComponentOrReplace(transform13)

const platformBlue6 = new Entity('platformBlue6')
engine.addEntity(platformBlue6)
platformBlue6.setParent(_scene)
platformBlue6.addComponentOrReplace(gltfShape4)
const transform14 = new Transform({
    position: new Vector3(22, 13, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformBlue6.addComponentOrReplace(transform14)

const platformBlue9 = new Entity('platformBlue9')
engine.addEntity(platformBlue9)
platformBlue9.setParent(_scene)
platformBlue9.addComponentOrReplace(gltfShape4)
const transform15 = new Transform({
    position: new Vector3(3.5, 21.5, 22.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformBlue9.addComponentOrReplace(transform15)

const platformBlue12 = new Entity('platformBlue12')
engine.addEntity(platformBlue12)
platformBlue12.setParent(_scene)
platformBlue12.addComponentOrReplace(gltfShape4)
const transform16 = new Transform({
    position: new Vector3(13.5, 28.5, 3.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformBlue12.addComponentOrReplace(transform16)

const platformBlue14 = new Entity('platformBlue14')
engine.addEntity(platformBlue14)
platformBlue14.setParent(_scene)
platformBlue14.addComponentOrReplace(gltfShape4)
const transform17 = new Transform({
    position: new Vector3(23, 33, 22.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformBlue14.addComponentOrReplace(transform17)

const platformFINALFilolet6 = new Entity('platformFINALFilolet6')
engine.addEntity(platformFINALFilolet6)
platformFINALFilolet6.setParent(_scene)
platformFINALFilolet6.addComponentOrReplace(gltfShape2)
const transform18 = new Transform({
    position: new Vector3(13, 10.5, 9.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet6.addComponentOrReplace(transform18)

const platformFINALFilolet7 = new Entity('platformFINALFilolet7')
engine.addEntity(platformFINALFilolet7)
platformFINALFilolet7.setParent(_scene)
platformFINALFilolet7.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
    position: new Vector3(17, 11.5, 5.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet7.addComponentOrReplace(transform19)

const platformFINALFilolet8 = new Entity('platformFINALFilolet8')
engine.addEntity(platformFINALFilolet8)
platformFINALFilolet8.setParent(_scene)
platformFINALFilolet8.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
    position: new Vector3(17.5, 14.5, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet8.addComponentOrReplace(transform20)

const platformFINALFilolet9 = new Entity('platformFINALFilolet9')
engine.addEntity(platformFINALFilolet9)
platformFINALFilolet9.setParent(_scene)
platformFINALFilolet9.addComponentOrReplace(gltfShape2)
const transform21 = new Transform({
    position: new Vector3(22.5, 16, 17.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet9.addComponentOrReplace(transform21)

const platformFINALFilolet10 = new Entity('platformFINALFilolet10')
engine.addEntity(platformFINALFilolet10)
platformFINALFilolet10.setParent(_scene)
platformFINALFilolet10.addComponentOrReplace(gltfShape2)
const transform22 = new Transform({
    position: new Vector3(18, 17.5, 22),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet10.addComponentOrReplace(transform22)

const platformFINALFilolet11 = new Entity('platformFINALFilolet11')
engine.addEntity(platformFINALFilolet11)
platformFINALFilolet11.setParent(_scene)
platformFINALFilolet11.addComponentOrReplace(gltfShape2)
const transform23 = new Transform({
    position: new Vector3(13.5, 19, 26.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet11.addComponentOrReplace(transform23)

const platformFINALFilolet12 = new Entity('platformFINALFilolet12')
engine.addEntity(platformFINALFilolet12)
platformFINALFilolet12.setParent(_scene)
platformFINALFilolet12.addComponentOrReplace(gltfShape2)
const transform24 = new Transform({
    position: new Vector3(8, 20, 26),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet12.addComponentOrReplace(transform24)

const platformYellow = new Entity('platformYellow')
engine.addEntity(platformYellow)
platformYellow.setParent(_scene)
const transform25 = new Transform({
    position: new Vector3(9, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformYellow.addComponentOrReplace(transform25)
const gltfShape5 = new GLTFShape("models/platform_yellow.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
platformYellow.addComponentOrReplace(gltfShape5)

const platformFINALFilolet13 = new Entity('platformFINALFilolet13')
engine.addEntity(platformFINALFilolet13)
platformFINALFilolet13.setParent(_scene)
platformFINALFilolet13.addComponentOrReplace(gltfShape2)
const transform26 = new Transform({
    position: new Vector3(3.5, 22.5, 16.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet13.addComponentOrReplace(transform26)

const platformFINALFilolet14 = new Entity('platformFINALFilolet14')
engine.addEntity(platformFINALFilolet14)
platformFINALFilolet14.setParent(_scene)
platformFINALFilolet14.addComponentOrReplace(gltfShape2)
const transform27 = new Transform({
    position: new Vector3(4.5, 25.5, 5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet14.addComponentOrReplace(transform27)

const platformFINALFilolet15 = new Entity('platformFINALFilolet15')
engine.addEntity(platformFINALFilolet15)
platformFINALFilolet15.setParent(_scene)
platformFINALFilolet15.addComponentOrReplace(gltfShape2)
const transform28 = new Transform({
    position: new Vector3(8, 27, 3.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet15.addComponentOrReplace(transform28)

const platformFINALFilolet16 = new Entity('platformFINALFilolet16')
engine.addEntity(platformFINALFilolet16)
platformFINALFilolet16.setParent(_scene)
platformFINALFilolet16.addComponentOrReplace(gltfShape2)
const transform29 = new Transform({
    position: new Vector3(18.5, 29.5, 7.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet16.addComponentOrReplace(transform29)

const platformFINALFilolet17 = new Entity('platformFINALFilolet17')
engine.addEntity(platformFINALFilolet17)
platformFINALFilolet17.setParent(_scene)
platformFINALFilolet17.addComponentOrReplace(gltfShape2)
const transform30 = new Transform({
    position: new Vector3(24, 31, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet17.addComponentOrReplace(transform30)

const platformFINALFilolet18 = new Entity('platformFINALFilolet18')
engine.addEntity(platformFINALFilolet18)
platformFINALFilolet18.setParent(_scene)
platformFINALFilolet18.addComponentOrReplace(gltfShape2)
const transform31 = new Transform({
    position: new Vector3(28, 32, 17.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet18.addComponentOrReplace(transform31)

const platformFINALFilolet19 = new Entity('platformFINALFilolet19')
engine.addEntity(platformFINALFilolet19)
platformFINALFilolet19.setParent(_scene)
platformFINALFilolet19.addComponentOrReplace(gltfShape2)
const transform32 = new Transform({
    position: new Vector3(4, 24, 10.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet19.addComponentOrReplace(transform32)

const platformFINALFilolet20 = new Entity('platformFINALFilolet20')
engine.addEntity(platformFINALFilolet20)
platformFINALFilolet20.setParent(_scene)
platformFINALFilolet20.addComponentOrReplace(gltfShape2)
const transform33 = new Transform({
    position: new Vector3(18.5, 34, 18),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
platformFINALFilolet20.addComponentOrReplace(transform33)

const houseFINAL = new Entity('houseFINAL')
engine.addEntity(houseFINAL)
houseFINAL.setParent(_scene)
const transform34 = new Transform({
    position: new Vector3(16, 0, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
houseFINAL.addComponentOrReplace(transform34)
const gltfShape6 = new GLTFShape("models/HOUSE_FINAL_2.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
houseFINAL.addComponentOrReplace(gltfShape6)
