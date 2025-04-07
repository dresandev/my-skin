import { useMemo } from "react"
import { BoxGeometry, DoubleSide, Texture } from "three"
import { ElytraPartData } from "@/constants/elytra-model-data"
import { setCapeUVs } from "@/utils/set-uvs"

interface Props {
  texture: Texture
  data: ElytraPartData
}

export const ElytraPart: React.FC<Props> = ({ texture, data }) => {
  const { box: { geometry, uvs }, position, rotation, scale } = data

  const geometryBox = useMemo(() => {
    const box = new BoxGeometry(...geometry)
    setCapeUVs(box, uvs)
    box.computeVertexNormals()
    return box
  }, [geometry, uvs])

  return (
    <mesh
      geometry={geometryBox}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <meshStandardMaterial
        map={texture}
        side={DoubleSide}
        transparent
        alphaTest={1e-5}
      />
    </mesh>
  )
}
