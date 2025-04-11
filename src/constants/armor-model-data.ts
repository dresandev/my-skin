import type { BoxData, BodyPartName, Position } from "@/types"
import { BODY_MODEL_POSITION } from "@/constants/body-model-position"

export interface ArmorPartData {
  name: BodyPartName
  box: BoxData
  position: Position
  polygonOffset?: boolean
}

export const ARMOR_PARTS_DATA: ArmorPartData[] = [
  {
    name: "head",
    box: {
      geometry: [9.5, 9.5, 9.5],
      uvs: [0, 0, 8, 8, 8],
    },
    position: BODY_MODEL_POSITION.head,
  },
  {
    name: "body",
    box: {
      geometry: [9, 13, 5],
      uvs: [16, 16, 8, 12, 4],
    },
    position: BODY_MODEL_POSITION.body,
  },
  {
    name: "rightArm",
    box: {
      geometry: [5.5, 13.5, 5.5],
      uvs: [40, 16, 4, 12, 4],
    },
    position: BODY_MODEL_POSITION.rightArm,
    polygonOffset: true,
  },
  {
    name: "leftArm",
    box: {
      geometry: [5.5, 13.5, 5.5],
      uvs: [32, 48, 4, 12, 4],
    },
    position: BODY_MODEL_POSITION.leftArm,
    polygonOffset: true,
  },
  {
    name: "rightLeg",
    box: {
      geometry: [5, 13, 5],
      uvs: [0, 16, 4, 12, 4],
    },
    position: BODY_MODEL_POSITION.rightLeg,
    polygonOffset: true,
  },
  {
    name: "leftLeg",
    box: {
      geometry: [5, 13, 5],
      uvs: [16, 48, 4, 12, 4],
    },
    position: BODY_MODEL_POSITION.leftLeg,
    polygonOffset: true,
  },
]

