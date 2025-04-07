import { BoxData, Position, Rotation } from "@/types"

interface CapeModelData {
  box: BoxData
  position: Position
  rotation: Rotation
}

export const CAPE_MODEL_DATA: CapeModelData = {
  box: {
    geometry: [10, 16, 1],
    uvs: [0, 0, 10, 16, 1],
  },
  position: [0, -8, -4],
  rotation: [(10.8 * Math.PI) / 180, Math.PI, 0],
}
