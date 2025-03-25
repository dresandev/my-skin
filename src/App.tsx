import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, PresentationControls } from '@react-three/drei';
import { BodyModel } from './components/BodyModel';
import styles from "./App.module.css"

function App() {
  const skinUrl = "slim.png"

  return (
    <Canvas
      gl={{ pixelRatio: window.devicePixelRatio, antialias: true }}
      dpr={[1, 2]}
      className={styles.canvas}
      style={{ inlineSize: "500px", blockSize: "600px", touchAction: "none" }}
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
        <BodyModel skinUrl={skinUrl} />
      </PresentationControls>
    </Canvas>
  )
}

export default App
