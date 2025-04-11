import type { BodyPartName } from "@/types"

type Region = { x: number; y: number; width: number; height: number }

type OuterLayerMap = { [key in BodyPartName]: Region[] }

export const outerLayerRegions: { normal: OuterLayerMap; slim: OuterLayerMap } = {
  normal: {
    head: [{ x: 32, y: 0, width: 32, height: 16 }],
    body: [{ x: 20, y: 32, width: 8, height: 12 }],
    rightArm: [
      { x: 44, y: 32, width: 4, height: 12 },
      { x: 40, y: 48, width: 4, height: 4 },
    ],
    leftArm: [
      { x: 36, y: 48, width: 4, height: 12 },
      { x: 32, y: 52, width: 4, height: 4 },
    ],
    rightLeg: [
      { x: 4, y: 32, width: 4, height: 12 },
      { x: 0, y: 48, width: 4, height: 4 },
    ],
    leftLeg: [
      { x: 4, y: 48, width: 4, height: 12 },
      { x: 0, y: 52, width: 4, height: 4 },
    ],
  },
  slim: {
    head: [{ x: 32, y: 0, width: 32, height: 16 }],
    body: [{ x: 20, y: 32, width: 8, height: 12 }],
    rightArm: [
      { x: 45, y: 32, width: 3, height: 12 },
      { x: 40, y: 48, width: 4, height: 4 },
    ],
    leftArm: [
      { x: 37, y: 48, width: 3, height: 12 },
      { x: 32, y: 52, width: 4, height: 4 },
    ],
    rightLeg: [
      { x: 4, y: 32, width: 4, height: 12 },
      { x: 0, y: 48, width: 4, height: 4 },
    ],
    leftLeg: [
      { x: 4, y: 48, width: 4, height: 12 },
      { x: 0, y: 52, width: 4, height: 4 },
    ],
  },
}

