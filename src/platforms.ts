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

    public static createPathedPlatform(entity: Entity, path: Vector3[], time: number ): void {
        entity.addComponent(
            new utils.ToggleComponent(
                utils.ToggleState.Off,
                (value: utils.ToggleState) => {
                    if (value === utils.ToggleState.On) {
                        entity.addComponentOrReplace(
                            new utils.FollowPathComponent(path, time, () => {
                                entity.getComponent(utils.ToggleComponent).toggle()
                            })
                        )
                    } else {
                        entity.addComponentOrReplace(
                            new utils.MoveTransformComponent(
                                path[path.length - 1],
                                path[0],
                                time / path.length,
                                () => {
                                    entity.getComponent(utils.ToggleComponent).toggle()
                                }
                            )
                        )
                    }
                }
            )
        )
        entity.getComponent(utils.ToggleComponent).toggle()
    }
}
