import type { AnimationFn } from "@/types"
import { useFrame } from "@react-three/fiber"

export const useAnimation = <K, T = null>(refs: K, props: T, animationFn: AnimationFn<K, T>, speed: number) => {
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    animationFn(t, refs, props)
  })
}
