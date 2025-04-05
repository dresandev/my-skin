import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Center, PerspectiveCamera, PresentationControls } from "@react-three/drei"
import { EffectComposer, SMAA } from "@react-three/postprocessing"
import { SMAAPreset } from "postprocessing"
import { BodyModel } from "@/components/BodyModel"
import { ArmorModel } from "@/components/ArmorModel"

export const SkinViewer3D = () => {
  return (
    <Canvas
      gl={{ pixelRatio: window.devicePixelRatio }}
      style={{
        inlineSize: "max-content",
        blockSize: 700,
        touchAction: "none"
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 45]}
        fov={90}
        zoom={2}
        near={0.1}
        far={100.0}
      >
        <ambientLight intensity={1} />
        <directionalLight intensity={2} position={[10, 0, 8]} />
      </PerspectiveCamera>

      <PresentationControls
        polar={[-Math.PI / 2, Math.PI / 2]}
        damping={0.01}
        speed={1.5}
      >
        <Suspense>
          <Center>
            <BodyModel />
            {/* <ArmorModel /> */}
          </Center>
        </Suspense>
      </PresentationControls>

      <EffectComposer multisampling={0}>
        <SMAA preset={SMAAPreset.ULTRA} />
      </EffectComposer>
    </Canvas>
  )
}
