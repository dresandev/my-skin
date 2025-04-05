import { Layout } from "@/layouts/Layout"
import { SkinInput } from "@/components/SkinInput"
import { SkinViewer3D } from "@/components/SkinViewer3D"

function HomePage() {
  return (
    <Layout>
      <SkinInput />
      <SkinViewer3D />
    </Layout>
  )
}

export default HomePage
