import { useMemo } from "react";
import {
  BoxGeometry,
  DoubleSide,
  Texture
} from "three";
import { setBodyBoxUvs } from "../../helpers/set-uvs";
import { BodyPartData } from "../../data/body-parts-data";

interface Props {
  texture: Texture
  data: BodyPartData
}

export function BodyPart({ texture, data }: Props) {
  const { position, innerBoxData, outerBoxData } = data;

  const innerBoxGeometry = useMemo(() => {
    const box = new BoxGeometry(...innerBoxData.geometry)
    setBodyBoxUvs(box, innerBoxData.uvs)
    return box;
  }, [innerBoxData.geometry, innerBoxData.uvs]);

  const outerBoxGeometry = useMemo(() => {
    const box = new BoxGeometry(...outerBoxData.geometry)
    setBodyBoxUvs(box, outerBoxData.uvs)
    return box;
  }, [outerBoxData.geometry, outerBoxData.uvs]);

  return (
    <group position={position}>
      <mesh receiveShadow geometry={innerBoxGeometry}>
        <meshStandardMaterial
          map={texture}
          side={DoubleSide}
          alphaTest={1e-5}
        />
      </mesh>
      <mesh receiveShadow geometry={outerBoxGeometry}>
        <meshStandardMaterial
          map={texture}
          transparent={true}
          side={DoubleSide}
          alphaTest={1e-5}
        />
      </mesh>
    </group>
  );
}
