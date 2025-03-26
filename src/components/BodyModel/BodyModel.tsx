import { NearestFilter, SRGBColorSpace, TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import { Center } from "@react-three/drei"
import { inferModelType } from "../../helpers/infer-model-type"
import { useModelStore } from "../../store/use-model-store"
import { getBodyPartsData } from "../../data/body-parts-data"
import { BodyPart } from "../BodyPart"

export const BodyModel = () => {
  const skin = useModelStore(state => state.skin)
  const texture = useLoader(TextureLoader, skin)
  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  texture.colorSpace = SRGBColorSpace
  texture.generateMipmaps = false

  const modelType = inferModelType(texture)
  const bodyPartsData = getBodyPartsData(modelType)

  return (
    <Center>
      {bodyPartsData.map((data, index) => (
        <BodyPart
          key={index}
          texture={texture}
          data={data}
        />
      ))}
    </Center>
  )
}
