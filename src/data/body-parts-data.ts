  import { Texture } from "three"
import type {
  BoxData,
  BodyPartName,
  ModelType,
  Position,
} from "@/types"
import {
  BODY_MODEL_PIVOT_POSITION,
  BODY_MODEL_POSITION,
  SLIM_BODY_MODEL_PIVOT_POSITION,
} from "@/constants/body-model-position"
import { outerLayerRegions } from "@/constants/outerlayer-regions"
import { hasOuterLayerInRegion, Region } from "@/utils/has-outer-layer-in-region"

export interface BodyPartData {
  name: BodyPartName
  innerBoxData: BoxData
  outerBoxData: BoxData
  position: Position
  pivotPosition?: Position
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
        position: BODY_MODEL_POSITION.head,
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
        position: BODY_MODEL_POSITION.body,
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
        position: BODY_MODEL_POSITION.rightArm,
        pivotPosition: isSlim
          ? SLIM_BODY_MODEL_PIVOT_POSITION.rightArm
          : BODY_MODEL_PIVOT_POSITION.rightArm,
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
        position: BODY_MODEL_POSITION.leftArm,
        pivotPosition: isSlim
          ? SLIM_BODY_MODEL_PIVOT_POSITION.leftArm
          : BODY_MODEL_PIVOT_POSITION.leftArm,
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
        position: BODY_MODEL_POSITION.rightLeg,
        pivotPosition: BODY_MODEL_PIVOT_POSITION.rightLeg,
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
        position: BODY_MODEL_POSITION.leftLeg,
        pivotPosition: BODY_MODEL_PIVOT_POSITION.leftLeg,
        polygonOffset: true,
        depthWrite: false,
        hasOuterLayer: checkOuterLayer(outerLayerRegion.leftLeg)
      },
    ]
  )
}
