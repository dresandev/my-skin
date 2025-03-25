import { Texture } from "three";

export const checkOuterLayer = (texture: Texture): boolean => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = texture.image;

  if (!ctx || !img) return false;

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  // Coordenadas donde empieza la outer layer (ejemplo para la cabeza)
  const xStart = 32, yStart = 0, width = 32, height = 16;
  const imageData = ctx.getImageData(xStart, yStart, width, height).data;

  // Revisar si hay píxeles opacos
  for (let i = 0; i < imageData.length; i += 4) {
    if (imageData[i + 3] > 10) return true; // Si el canal alpha es mayor a 10, hay contenido
  }

  return false;
}
