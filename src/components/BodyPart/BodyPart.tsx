import { useMemo } from "react"
import {
  BoxGeometry,
  DoubleSide,
  Texture
} from "three"
import { setBodyBoxUvs } from "@/utils/set-uvs"
import { BodyPartData } from "@/data/body-parts-data"

interface Props {
  texture: Texture
  data: BodyPartData
}

export function BodyPart({ texture, data }: Props) {
  const {
    innerBoxData,
    outerBoxData,
    position,
    polygonOffset,
    depthWrite,
    hasOuterLayer,
  } = data

  const innerBoxGeometry = useMemo(() => {
    const box = new BoxGeometry(...innerBoxData.geometry)
    setBodyBoxUvs(box, innerBoxData.uvs)
    box.computeVertexNormals()
    return box
  }, [innerBoxData.geometry, innerBoxData.uvs])

  const outerBoxGeometry = useMemo(() => {
    const box = new BoxGeometry(...outerBoxData.geometry)
    setBodyBoxUvs(box, outerBoxData.uvs)
    box.computeVertexNormals()
    return box
  }, [outerBoxData.geometry, outerBoxData.uvs])

  if (!hasOuterLayer) return (
    <mesh geometry={innerBoxGeometry} position={position}>
      <meshStandardMaterial map={texture} />
    </mesh>
  )

  return (
    <group position={position}>
      <mesh geometry={innerBoxGeometry}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh geometry={outerBoxGeometry}>
        <meshStandardMaterial
          map={texture}
          transparent={true}
          alphaTest={1e-5}
          side={DoubleSide}
          polygonOffset={polygonOffset}
          polygonOffsetFactor={1.0}
          polygonOffsetUnits={1.0}
          depthWrite={depthWrite}
        />
      </mesh>
    </group>
  )
}
