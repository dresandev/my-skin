import { useMemo } from "react"
import { BoxGeometry, DoubleSide, NearestFilter, TextureLoader } from "three"
import { setCapeUVs } from "@/utils/set-uvs"
import { useLoader } from "@react-three/fiber"
import { CAPE_MODEL_DATA } from "@/constants/cape-model-data"

export const CapeModel = () => {
  const textureUrl = "images/capes/cape.png"
  const texture = useLoader(TextureLoader, textureUrl)

  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  texture.generateMipmaps = false

  const { box: { geometry, uvs }, position, rotation } = CAPE_MODEL_DATA

  const boxGeometry = useMemo(() => {
    const box = new BoxGeometry(...geometry)
    setCapeUVs(box, uvs)
    box.computeVertexNormals()
    return box
  }, [geometry, uvs])

  return (
    <mesh
      geometry={boxGeometry}
      position={position}
      rotation={rotation}
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
