import { useLoader } from "@react-three/fiber"
import { NearestFilter, TextureLoader } from "three"
import { ELYTRA_MODEL_DATA } from "@/constants/elytra-model-data"
import { ElytraPart } from "@/components/ElytraPart"

export const ElytraModel = () => {
  const textureUrl = "images/capes/cape.png"
  const texture = useLoader(TextureLoader, textureUrl)

  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  texture.generateMipmaps = false

  return (
    <>
      {ELYTRA_MODEL_DATA.map((data, index) => (
        <ElytraPart
          key={index}
          data={data}
          texture={texture}
        />
      ))}
    </>
  )
}
