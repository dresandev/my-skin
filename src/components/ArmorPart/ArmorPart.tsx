import { useMemo } from "react"
import {
  BoxGeometry,
  DoubleSide,
  Texture
} from "three"
import { setBodyBoxUVs } from "@/utils/set-uvs"
import { ArmorPartData } from "@/constants/armor-model-data"

interface Props {
  texture: Texture
  data: ArmorPartData
}

export function ArmorPart({ texture, data }: Props) {
  const { box: { geometry, uvs }, position, polygonOffset, } = data

  const boxGeometry = useMemo(() => {
    const box = new BoxGeometry(...geometry)
    setBodyBoxUVs(box, uvs)
    return box
  }, [geometry, uvs])

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
