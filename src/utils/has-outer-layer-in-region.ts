import { Texture } from "three"

export type Region = { x: number; y: number; width: number; height: number }

const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d", { willReadFrequently: true })

export const hasOuterLayerInRegion = (texture: Texture, region: Region[]): boolean => {
  if (!ctx) throw new Error("No se pudo obtener el contexto 2D del canvas.")

  const image = texture.image

  if (!ctx || !image) return false

  canvas.width = image.width
  canvas.height = image.height
  ctx.drawImage(image, 0, 0)

  for (const { x, y, width, height } of region) {
    const imageData = ctx.getImageData(x, y, width, height).data

    for (let i = 0; i < imageData.length; i += 4) {
      if (imageData[i + 3] > 10) return true
    }
  }

  return false
}
