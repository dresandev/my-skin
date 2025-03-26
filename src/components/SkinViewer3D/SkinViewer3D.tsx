import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, PresentationControls } from "@react-three/drei"
import { BodyModel } from "../BodyModel"
import styles from "./SkinViewer3D.module.css"

export const SkinViewer3D = () => {
  return (
    <Canvas
      gl={{ pixelRatio: window.devicePixelRatio, antialias: true }}
      dpr={[1, 2]}
      style={{ inlineSize: 500, blockSize: 600 }}
      className={styles.canvas}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 50]}
        fov={90}
        zoom={2.5}
      >
        <ambientLight intensity={1.4} />
        <directionalLight intensity={2.2} position={[10, 0, 10]} />
      </PerspectiveCamera>

      <PresentationControls
        polar={[-Math.PI / 2, Math.PI / 2]}
        damping={0.01}
        speed={1.5}
      >
        <Suspense>
          <BodyModel />
        </Suspense>
      </PresentationControls>
    </Canvas>
  )
}
