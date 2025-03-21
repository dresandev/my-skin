import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./MinecraftModelCanvas.module.css"

interface Props {
  children: React.ReactNode
}

export const MinecraftModelCanvas: React.FC<Props> = ({ children }) => {
  return (
    <Canvas
      gl={{ pixelRatio: window.devicePixelRatio, antialias: true }}
      dpr={[1, 2]}
      className={styles.canvas}
      style={{ inlineSize: "320px", blockSize: "600px", }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 40]} fov={70} />
      <Stage
        intensity={1}
        shadows
        adjustCamera={false}
        environment="city"
      >
        {children}
      </Stage>
      <OrbitControls
        rotateSpeed={1}
        zoomSpeed={2}
        panSpeed={1}
        dampingFactor={1}
        maxDistance={156}
        minDistance={10}
      />
    </Canvas >
  )
};
