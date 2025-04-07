import type { BoxData, Position, Rotation, Scale } from "@/types"

export interface ElytraPartData {
  name: string
  box: BoxData
  position: Position
  rotation: Rotation
  scale?: Scale
}

export const ELYTRA_MODEL_DATA: ElytraPartData[] = [
  {
    name: "leftWing",
    box: {
      geometry: [12, 22, 4],
      uvs: [22, 0, 10, 20, 2],
    },
    position: [2.8, -10.5, -5.9],
    rotation: [0.2617994, 0.01, 0.2617994],
  },
  {
    name: "rightWing",
    box: {
      geometry: [12, 22, 4],
      uvs: [22, 0, 10, 20, 2],
    },
    position: [-2.8, -10.5, -5.9],
    rotation: [0.2617994, -0.01, -0.2617994],
    scale: [-1, 1, 1],
  }
]
