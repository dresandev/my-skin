import { RefObject, useMemo } from "react"
import { Group, NearestFilter, TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import type { BodyPartName } from "@/types"
import { ARMOR_PARTS_DATA } from "@/constants/armor-model-data"
import { inferModelType } from "@/utils/infer-model-type"
import { flipTextureHorizontally } from "@/utils/flip-texture-horizontally"
import { getBodyPartsData } from "@/data/body-parts-data"
import { useModelStore } from "@/store/use-model-store"
import { BodyPart } from "@/components/BodyPart"
import { ArmorPart } from "@/components/ArmorPart"

interface Props {
  partRefs: Record<BodyPartName, RefObject<Group | null>>
}

export const BodyModel: React.FC<Props> = ({ partRefs }) => {
  const skin = useModelStore(state => state.skin)
  // TODO: Change armor texture load
  const armor = "images/armors/iron.png"
  const [bodyTexture, armorTexture] = useLoader(TextureLoader, [skin, armor])
  bodyTexture.magFilter = NearestFilter
  bodyTexture.minFilter = NearestFilter
  bodyTexture.generateMipmaps = false

  const modelType = inferModelType(bodyTexture)
  const bodyPartsData = getBodyPartsData(modelType, bodyTexture)

  const flippedArmorTexture = useMemo(() => (
    flipTextureHorizontally(armorTexture.image)
  ), [armorTexture.image])

  flippedArmorTexture.magFilter = NearestFilter
  flippedArmorTexture.minFilter = NearestFilter
  flippedArmorTexture.generateMipmaps = false

  return (
    <group>
      {bodyPartsData.map(({ pivotPosition, ...data }, index) => (
        <group
          ref={partRefs[data.name]}
          key={index}
          position={pivotPosition}
        >
          <BodyPart
            texture={bodyTexture}
            data={data} />
          {/* <ArmorPart
            texture={flippedArmorTexture}
            data={ARMOR_PARTS_DATA[index]}
          /> */}
        </group>
      ))}
    </group>
  )
}
