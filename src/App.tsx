import { BodyBox } from './components/BodyBox'
import { MinecraftModelCanvas } from './components/MinecraftModelCanvas';

function App() {
  const skinUrl = "bear.png"

  return (
    <MinecraftModelCanvas>
      <group position={[0, 8, 0]}>
        <BodyBox textureUrl={skinUrl} type='head' />
        <BodyBox textureUrl={skinUrl} type='body' />
        <BodyBox textureUrl={skinUrl} type='rightArm' />
        <BodyBox textureUrl={skinUrl} type='leftArm' />
        <BodyBox textureUrl={skinUrl} type='rightLeg' />
        <BodyBox textureUrl={skinUrl} type='leftLeg' />
      </group>
    </MinecraftModelCanvas>
  )
}

export default App
