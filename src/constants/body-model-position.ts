import type { BodyPartName, Position } from "@/types"

type ModelPosition = Record<BodyPartName, Position>

export const BODY_MODEL_POSITION: ModelPosition = {
  head: [0, 4, 0],
  body: [0, -6, 0],
  rightArm: [-2, -4, 0],
  leftArm: [2, -4, 0],
  rightLeg: [-2, -6, 0],
  leftLeg: [2, -6, 0],
}

export const BODY_MODEL_PIVOT_POSITION: Pick<ModelPosition, "rightLeg" | "leftLeg" | "rightArm" | "leftArm"> = {
  rightArm: [-4, -2, 0],
  leftArm: [4, -2, 0],
  rightLeg: [0, -12, 0],
  leftLeg: [0, -12, 0],
}

export const SLIM_BODY_MODEL_PIVOT_POSITION: Pick<ModelPosition, "rightArm" | "leftArm"> = {
  rightArm: [-3.5, -2, 0],
  leftArm: [3.5, -2, 0],
}
