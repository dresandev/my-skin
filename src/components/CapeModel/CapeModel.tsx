import { RefObject, useMemo } from "react"
import { BoxGeometry, DoubleSide, Group, NearestFilter, TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import { CAPE_MODEL_DATA } from "@/constants/cape-model-data"
import { setCapeUVs } from "@/utils/set-uvs"

interface Props {
  ref?: RefObject<Group | null>
}

export const CapeModel: React.FC<Props> = ({ ref }) => {
  const textureUrl = "images/capes/cape.png"
  const texture = useLoader(TextureLoader, textureUrl)

  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  texture.generateMipmaps = false

  const {
    box: { geometry, uvs },
    position,
    pivotPosition,
    rotation,
  } = CAPE_MODEL_DATA

  const boxGeometry = useMemo(() => {
    const box = new BoxGeometry(...geometry)
    setCapeUVs(box, uvs)
    box.computeVertexNormals()
    return box
  }, [geometry, uvs])

  return (
    <group ref={ref} position={pivotPosition}>
      <mesh
        geometry={boxGeometry}
        rotation={rotation}
        position={position}
      >
        <meshStandardMaterial
          map={texture}
          side={DoubleSide}
          transparent
          alphaTest={1e-5}
        />
      </mesh>
    </group>
  )
}
