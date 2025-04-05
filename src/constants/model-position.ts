import type { ModelParts, Position } from "@/types"

export const MODEL_POSITION: { [key in ModelParts]: Position } = {
  head: [0, 4, 0],
  body: [0, -6, 0],
  rightArm: [-6, -6, 0],
  leftArm: [6, -6, 0],
  rightLeg: [-2, -18, 0],
  leftLeg: [2, -18, 0],
}

export const SLIM_MODEL_POSITION: Pick<{ [key in ModelParts]: Position }, "rightArm" | "leftArm"> = {
  rightArm: [-5.5, -6, 0],
  leftArm: [5.5, -6, 0],
}


