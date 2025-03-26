import { toast } from "sonner"
import { useModelStore } from "../../store/use-model-store"

export const SkinInput = () => {
  const setSkin = useModelStore(state => state.setSkin)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.type !== "image/png") {
      return toast.error("Only PNG images are allowed.")
    }

    if (file.size > 20 * 1024) {
      return toast.error("The file size must be 20KB or less.")
    }

    const img = new Image()

    img.onload = () => {
      const { width, height } = img

      if (!((width === 64 && height === 64) || (width === 64 && height === 32))) {
        return toast.error("Only 64x64 and 64x32 PNG images are allowed.")
      }

      setSkin(URL.createObjectURL(file))
    }

    img.src = URL.createObjectURL(file)
  }

  return (
    <input
      type="file"
      accept="image/png"
      onChange={handleFileChange}
    />
  )
}
