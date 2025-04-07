export type ModelType = "default" | "slim"
export type Geometry = [width: number, height: number, depth: number]
export type Position = [x: number, y: number, z: number]
export type Rotation = [x: number, y: number, z: number]
export type ModelParts = "head" | "body" | "rightArm" | "leftArm" | "rightLeg" | "leftLeg"

export interface BoxData {
  geometry: Geometry
  uvs: number[]
}
