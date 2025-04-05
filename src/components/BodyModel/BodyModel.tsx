import { NearestFilter, TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import { inferModelType } from "@/utils/infer-model-type"
import { getBodyPartsData } from "@/data/body-parts-data"
import { useModelStore } from "@/store/use-model-store"
import { BodyPart } from "@/components/BodyPart"

export const BodyModel = () => {
  const skin = useModelStore(state => state.skin)
  const texture = useLoader(TextureLoader, skin)
  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  texture.generateMipmaps = false

  const modelType = inferModelType(texture)
  const bodyPartsData = getBodyPartsData(modelType, texture)

  return (
    <>
      {bodyPartsData.map((data, index) => (
        <BodyPart
          key={index}
          texture={texture}
          data={data}
        />
      ))}
    </>
  )
}
