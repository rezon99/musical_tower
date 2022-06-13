import * as utils from '@dcl/ecs-scene-utils'

export class Platforms {
    public static createMovingPlatform (entity: Entity, startPos: Vector3, endPos: Vector3, time: number): void {
        entity.addComponent(
            new utils.ToggleComponent(
                utils.ToggleState.Off,
                (value: utils.ToggleState) => {
                    if (value === utils.ToggleState.On) {
                        entity.addComponentOrReplace(
                            new utils.MoveTransformComponent(startPos, endPos, time, () => {
                                entity.getComponent(utils.ToggleComponent).toggle()
                            })
                        )
                    } else {
                        entity.addComponentOrReplace(
                            new utils.MoveTransformComponent(endPos, startPos, time, () => {
                                entity.getComponent(utils.ToggleComponent).toggle()
                            })
                        )
                    }
                }
            )
        )
        entity.getComponent(utils.ToggleComponent).toggle()
    }
}
