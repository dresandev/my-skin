import { Suspense } from "react"
import { Center } from "@react-three/drei"
import { useModelRefs } from "@/hooks/use-body-part-refs"
import { BodyModel } from "@/components/BodyModel"
import { ArmorModel } from "@/components/ArmorModel"
import { CapeModel } from "@/components/CapeModel"
import { ElytraModel } from "@/components/ElytraModel"

export const Models3D = () => {
  const {
    bodyRef,
    bodyPartRefs,
    capeRef,
  } = useModelRefs()

  return (
    <Suspense>
      <Center ref={bodyRef}>
        <BodyModel partRefs={bodyPartRefs} />
        {/* <ArmorModel refs={armor} /> */}
        {/* <CapeModel ref={capeRef} /> */}
        <ElytraModel />
      </Center>
    </Suspense>
  )
}
