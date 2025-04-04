import { Texture } from "three"
import type { BoxData, ModelParts, ModelType, Position } from "@/types"
import { outerLayerRegions } from "@/constants/outerlayer-regions"
import { MODEL_POSITION, SLIM_MODEL_POSITION } from "@/constants/model-position"
import { hasOuterLayerInRegion, Region } from "@/utils/has-outer-layer-in-region"

export interface BodyPartData {
  name: ModelParts
  innerBoxData: BoxData
  outerBoxData: BoxData
  position: Position
  polygonOffset?: boolean
  depthWrite?: boolean
  hasOuterLayer: boolean
}

export const getBodyPartsData = (modelType: ModelType, texture: Texture): BodyPartData[] => {
  const isSlim = modelType === "slim"
  const limbsWidth = isSlim ? 3 : 4
  const limbsOuterBoxWidth = isSlim ? 3.5 : 4.5
  const outerLayerRegion = isSlim ? outerLayerRegions.slim : outerLayerRegions.normal

  const checkOuterLayer = (region: Region[]) => (
    hasOuterLayerInRegion(texture, region)
  )

  return (
    [
      {
        name: "head",
        innerBoxData: {
          geometry: [8, 8, 8],
          uvs: [0, 0, 8, 8, 8],
        },
        outerBoxData: {
          geometry: [9, 9, 9],
          uvs: [32, 0, 8, 8, 8],
        },
        position: MODEL_POSITION.head,
        polygonOffset: true,
        hasOuterLayer: checkOuterLayer(outerLayerRegion.head)
      },
      {
        name: "body",
        innerBoxData: {
          geometry: [8, 12, 4],
          uvs: [16, 16, 8, 12, 4],
        },
        outerBoxData: {
          geometry: [8.5, 12.5, 4.5],
          uvs: [16, 32, 8, 12, 4],
        },
        position: MODEL_POSITION.body,
        hasOuterLayer: checkOuterLayer(outerLayerRegion.body)
      },
      {
        name: "rightArm",
        innerBoxData: {
          geometry: [limbsWidth, 12, 4],
          uvs: [40, 16, limbsWidth, 12, 4],
        },
        outerBoxData: {
          geometry: [limbsOuterBoxWidth, 12.5, 4.5],
          uvs: [40, 32, limbsWidth, 12, 4],
        },
        position: isSlim ? SLIM_MODEL_POSITION.rightArm : MODEL_POSITION.rightArm,
        polygonOffset: true,
        hasOuterLayer: checkOuterLayer(outerLayerRegion.rightArm)
      },
      {
        name: "leftArm",
        innerBoxData: {
          geometry: [limbsWidth, 12, 4],
          uvs: [32, 48, limbsWidth, 12, 4],
        },
        outerBoxData: {
          geometry: [limbsOuterBoxWidth, 12.5, 4.5],
          uvs: [48, 48, limbsWidth, 12, 4],
        },
        position: isSlim ? SLIM_MODEL_POSITION.leftArm : MODEL_POSITION.leftArm,
        polygonOffset: true,
        hasOuterLayer: checkOuterLayer(outerLayerRegion.leftArm)
      },
      {
        name: "rightLeg",
        innerBoxData: {
          geometry: [4, 12, 4],
          uvs: [0, 16, 4, 12, 4],
        },
        outerBoxData: {
          geometry: [4.5, 12.5, 4.5],
          uvs: [0, 32, 4, 12, 4],
        },
        position: [-2, -18, 0],
        polygonOffset: true,
        depthWrite: false,
        hasOuterLayer: checkOuterLayer(outerLayerRegion.rightLeg)
      },
      {
        name: "leftLeg",
        innerBoxData: {
          geometry: [4, 12, 4],
          uvs: [16, 48, 4, 12, 4],
        },
        outerBoxData: {
          geometry: [4.5, 12.5, 4.5],
          uvs: [0, 48, 4, 12, 4],
        },
        position: [2, -18, 0],
        polygonOffset: true,
        depthWrite: false,
        hasOuterLayer: checkOuterLayer(outerLayerRegion.leftLeg)
      },
    ]
  )
}
