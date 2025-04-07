import { GodRays } from "@/components/GodRays"
import { Toaster } from "sonner"

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GodRays />
      {children}
      <Toaster
        position="top-center"
        swipeDirections={["right", "left"]}
      />
    </>
  )
}
