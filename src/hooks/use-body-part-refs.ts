import { type RefObject, useMemo, createRef } from "react"
import type { Group } from "three"
import type { BodyPartName } from "@/types"

const bodyPartNames: BodyPartName[] = [
  "head",
  "body",
  "leftArm",
  "rightArm",
  "leftLeg",
  "rightLeg",
]

export const useModelRefs = () => (
  useMemo(() => ({
    bodyRef: createRef<Group>(),
    capeRef: createRef<Group>(),
    bodyPartRefs: Object.fromEntries(
      bodyPartNames.map(name => [name, createRef<Group>()])
    ) as Record<BodyPartName, RefObject<Group>>,
  }), [])
)
