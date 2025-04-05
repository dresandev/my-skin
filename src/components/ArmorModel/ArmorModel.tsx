import { useMemo } from "react"
import { NearestFilter, TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import { ARMOR_PARTS_DATA } from "@/constants/armor-model-data"
import { flipTextureHorizontally } from "@/utils/flip-texture-horizontally"
import { ArmorPart } from "@/components/ArmorPart"

export const ArmorModel = () => {
  const armorTexture = "/armor-trims/top_eye.png"
  const texture = useLoader(TextureLoader, armorTexture)

  const processedTexture = useMemo(() => (
    flipTextureHorizontally(texture.image)
  ), [texture.image])

  processedTexture.magFilter = NearestFilter
  processedTexture.minFilter = NearestFilter
  processedTexture.generateMipmaps = false

  return (
    <>
      {ARMOR_PARTS_DATA.map((data, index) => (
        <ArmorPart
          key={index}
          texture={processedTexture!}
          data={data}
        />
      ))}
    </>
  )
}
