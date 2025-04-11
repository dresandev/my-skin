import { AnimationFn, BodyPartName, Model3DRefs, Model3DRef, ElytraPartName } from "@/types"

interface AnimationProps {
  bodyRef: Model3DRef
  bodyPartRefs: Model3DRefs<BodyPartName>
  capeRef: Model3DRef
  elytraPartRefs: Model3DRefs<ElytraPartName>
}

type Props<K extends keyof AnimationProps> = Pick<AnimationProps, K>;

export const idleAnimation: AnimationFn<Props<"bodyPartRefs" | "capeRef">> = (t, refs) => {
  const { bodyPartRefs: { leftArm, rightArm }, capeRef } = refs
  const basicArmRotationZ = Math.PI * 0.02
  leftArm.current?.rotation.set(0, 0, Math.cos(t) * 0.03 + basicArmRotationZ)
  rightArm.current?.rotation.set(0, 0, Math.cos(t + Math.PI) * 0.03 - basicArmRotationZ)
  capeRef.current?.rotation.set(Math.sin(t) * 0.03 + Math.PI * 0.06, 0, 0)
}

export const walkingAnimation: AnimationFn<Props<"bodyPartRefs" | "capeRef">> = (t, refs) => {
  const { bodyPartRefs, capeRef } = refs
  const { head, leftArm, rightArm, leftLeg, rightLeg } = bodyPartRefs

  leftLeg.current?.rotation.set(Math.sin(t) * 0.5, 0, 0)
  rightLeg.current?.rotation.set(Math.sin(t + Math.PI) * 0.5, 0, 0)

  const basicArmRotationZ = Math.PI * 0.02
  leftArm.current?.rotation.set(
    Math.sin(t + Math.PI) * 0.5,
    0,
    Math.cos(t) * 0.03 + basicArmRotationZ
  )
  rightArm.current?.rotation.set(
    Math.sin(t) * 0.5,
    0,
    Math.cos(t + Math.PI) * 0.03 - basicArmRotationZ
  )

  head.current?.rotation.set(Math.sin(t / 5) * 0.1, Math.sin(t / 4) * 0.2, 0)

  const basicCapeRotationX = Math.PI * 0.06
  capeRef.current?.rotation.set(Math.sin(t / 1.5) * 0.06 + basicCapeRotationX, 0, 0)
}

export const runningAnimation: AnimationFn<Props<"bodyPartRefs" | "capeRef" | "bodyRef">> = (t, refs) => {
  const { bodyRef, bodyPartRefs, capeRef } = refs
  const { leftArm, rightArm, leftLeg, rightLeg } = bodyPartRefs

  leftLeg.current?.rotation.set(Math.cos(t + Math.PI) * 1.3, 0, 0)
  rightLeg.current?.rotation.set(Math.cos(t) * 1.3, 0, 0)

  const offsetZ = Math.PI * 0.05
  const basicArmRotationZ = Math.PI * 0.02
  leftArm.current?.rotation.set(
    Math.cos(t) * 1.6,
    0,
    Math.cos(t) * 0.1 + basicArmRotationZ + offsetZ
  )
  rightArm.current?.rotation.set(
    Math.cos(t + Math.PI) * 1.6,
    0,
    Math.cos(t + Math.PI) * 0.1 - basicArmRotationZ - offsetZ
  )

  bodyRef.current?.position.set(Math.cos(t) * 0.15, Math.cos(t * 2), 0)
  bodyRef.current?.rotation.set(0, 0, Math.cos(t + Math.PI) * 0.01)

  const basicCapeRotationX = Math.PI * 0.3
  capeRef.current?.rotation.set(Math.sin(t * 2) * 0.1 + basicCapeRotationX, 0, 0)
}

export const waveAnimation: AnimationFn<Props<"bodyPartRefs">, "left" | "right"> = (t, refs, target) => {
  const { bodyPartRefs } = refs
  const { leftArm, rightArm } = bodyPartRefs

  const targetArm = target === "left" ? leftArm.current : rightArm.current

  targetArm.rotation.x = 180
  targetArm.rotation.z = Math.sin(t) * 0.5
}
