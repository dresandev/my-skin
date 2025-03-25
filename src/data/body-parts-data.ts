import { ModelType } from "../types"

type GeometryData = [width: number, height: number, depth: number]

export interface BodyPartData {
  innerBoxData: {
    geometry: GeometryData
    uvs: number[]
  },
  outerBoxData: {
    geometry: GeometryData
    uvs: number[]
  }
  position: [x: number, y: number, z: number],
}

export const getBodyPartsData = (modelType: ModelType): BodyPartData[] => {
  const isSlim = modelType === "slim"

  return (
    [
      // Head
      {
        innerBoxData: {
          geometry: [8, 8, 8],
          uvs: [0, 0, 8, 8, 8],
        },
        outerBoxData: {
          geometry: [9, 9, 9],
          uvs: [32, 0, 8, 8, 8],
        },
        position: [0, 4, 0]
      },
      // Body
      {
        innerBoxData: {
          geometry: [8, 12, 4],
          uvs: [16, 16, 8, 12, 4],
        },
        outerBoxData: {
          geometry: [8.5, 12.5, 4.5],
          uvs: [16, 32, 8, 12, 4],
        },
        position: [0, -6, 0]
      },
      // Right Arm
      {
        innerBoxData: {
          geometry: [isSlim ? 3 : 4, 12, 4],
          uvs: [40, 16, isSlim ? 3 : 4, 12, 4],
        },
        outerBoxData: {
          geometry: [isSlim ? 3.5 : 4.5, 12.5, 4.5],
          uvs: [40, 32, isSlim ? 3 : 4, 12, 4],
        },
        position: [isSlim ? -5.5 : -6, -6, 0]
      },
      // Left Arm
      {
        innerBoxData: {
          geometry: [isSlim ? 3 : 4, 12, 4],
          uvs: [32, 48, isSlim ? 3 : 4, 12, 4],
        },
        outerBoxData: {
          geometry: [isSlim ? 3.5 : 4.5, 12.5, 4.5],
          uvs: [48, 48, isSlim ? 3 : 4, 12, 4],
        },
        position: [isSlim ? 5.5 : 6, -6, 0]
      },
      // Right Leg
      {
        innerBoxData: {
          geometry: [4, 12, 4],
          uvs: [0, 16, 4, 12, 4],
        },
        outerBoxData: {
          geometry: [4.5, 12.5, 4.5],
          uvs: [0, 32, 4, 12, 4],
        },
        position: [-2, -18, 0]
      },
      // Left Leg
      {
        innerBoxData: {
          geometry: [4, 12, 4],
          uvs: [16, 48, 4, 12, 4],
        },
        outerBoxData: {
          geometry: [4.5, 12.5, 4.5],
          uvs: [0, 48, 4, 12, 4],
        },
        position: [2, -18, 0]
      },
    ]
  )
}