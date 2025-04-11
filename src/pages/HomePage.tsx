import { Layout } from "@/layouts/Layout"
import { SkinInput } from "@/components/SkinInput"
import { Scene } from "@/components/Scene"
import { Models3D } from "@/components/Models3D"

function HomePage() {
  return (
    <Layout>
      <SkinInput />
      <Scene>
        <Models3D />
      </Scene>
    </Layout>
  )
}

export default HomePage
