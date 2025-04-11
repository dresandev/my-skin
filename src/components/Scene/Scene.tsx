import { PerspectiveCamera, PresentationControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, SMAA } from "@react-three/postprocessing"
import { SMAAPreset } from "postprocessing"

interface Props {
  children: React.ReactNode
}

export const Scene: React.FC<Props> = ({ children }) => {
  return (
    <Canvas
      style={{
        inlineSize: 700,
        blockSize: 700,
        touchAction: "none",
        imageRendering: "pixelated",
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 40]}
        fov={90}
        zoom={1.6}
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
        {children}
      </PresentationControls>

      <EffectComposer multisampling={0}>
        <SMAA preset={SMAAPreset.ULTRA} />
      </EffectComposer>
    </Canvas>
  )
}
