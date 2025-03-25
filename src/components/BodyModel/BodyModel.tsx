import { NearestFilter, SRGBColorSpace, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { inferModelType } from "../../helpers/infer-model-type";
import { getBodyPartsData } from "../../data/body-parts-data";
import { BodyPart } from "../BodyPart";

interface Props {
  skinUrl: string
}

export const BodyModel: React.FC<Props> = ({ skinUrl }) => {
  const texture = useLoader(TextureLoader, skinUrl);
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.colorSpace = SRGBColorSpace;
  texture.generateMipmaps = false;

  const modelType = inferModelType(texture)
  const bodyPartsData = getBodyPartsData(modelType)

  return (
    <Center>
      {bodyPartsData.map((data) => (
        <BodyPart texture={texture} data={data} />
      ))}
    </Center>
  )
};
