import { useMemo } from "react"
import {
  BoxGeometry,
  DoubleSide,
  Texture
} from "three"
import { setBodyBoxUvs } from "@/utils/set-uvs"
import { ArmorPartData } from "@/constants/armor-model-data"

interface Props {
  texture: Texture
  data: ArmorPartData
}

export function ArmorPart({ texture, data }: Props) {
  const { box, position, polygonOffset, } = data

  const boxGeometry = useMemo(() => {
    const newBox = new BoxGeometry(...box.geometry)
    setBodyBoxUvs(newBox, box.uvs)
    return newBox
  }, [box.geometry, box.uvs])

  return (
    <mesh geometry={boxGeometry} position={position}>
      <meshStandardMaterial
        map={texture}
        transparent={true}
        side={DoubleSide}
        alphaTest={1e-5}
        polygonOffset={polygonOffset}
        polygonOffsetFactor={1.0}
        polygonOffsetUnits={1.0}
      />
    </mesh>
  )
}
