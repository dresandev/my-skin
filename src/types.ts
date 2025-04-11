import { RefObject } from "react"
import { Group } from "three"

export type ModelType = "default" | "slim"
export type Geometry = [width: number, height: number, depth: number]
export type Position = [x: number, y: number, z: number]
export type Rotation = [x: number, y: number, z: number]
export type Scale = [x: number, y: number, z: number]
export type BodyPartName = "head" | "body" | "rightArm" | "leftArm" | "rightLeg" | "leftLeg"
export type ElytraPartName = "leftWing" | "rightWing"
export type Model3DRefs<K extends string> = Record<K, RefObject<Group>>
export type Model3DRef = RefObject<Group | null>
export type AnimationFn<K, T = null> = (t: number, refs: K, props: T) => void

export interface BoxData {
  geometry: Geometry
  uvs: number[]
}
