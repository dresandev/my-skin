import { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import {
  type BoxGeometry,
  NearestFilter,
  TextureLoader,
  DoubleSide,
  SRGBColorSpace
} from "three";
import { setUvs } from "../../helpers/set-uvs";
import { bodyBoxData } from "../../data/body-box-data";

interface Props {
  type: keyof typeof bodyBoxData
  textureUrl: string
}

export function BodyBox({ type, textureUrl }: Props) {
  const texture = useLoader(TextureLoader, textureUrl);
  const innerBoxRef = useRef<BoxGeometry>(null)
  const outerBoxRef = useRef<BoxGeometry>(null)

  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.colorSpace = SRGBColorSpace;
  texture.generateMipmaps = false;

  const {
    innerBoxGeometry,
    innerBoxUvs,
    outerBoxGeometry,
    outerBoxUvs,
    position,
  } = bodyBoxData[type];

  useEffect(() => {
    if (!innerBoxRef.current || !outerBoxRef.current) return

    setUvs(outerBoxRef.current, outerBoxUvs)
    setUvs(innerBoxRef.current, innerBoxUvs)
  }, [innerBoxUvs, outerBoxUvs])

  return (
    <group position={position}>
      <mesh >
        <boxGeometry
          ref={innerBoxRef}
          args={innerBoxGeometry}
        />
        <meshStandardMaterial
          map={texture}
          transparent={false}
          side={DoubleSide}
          roughness={0.7}
          metalness={0.0}
          alphaTest={1e-5}
        />
      </mesh>
      <mesh >
        <boxGeometry
          ref={outerBoxRef}
          args={outerBoxGeometry}
        />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          side={DoubleSide}
          roughness={0.7}
          metalness={0.0}
          alphaTest={1e-5}
        />
      </mesh>
    </group>
  );
}
