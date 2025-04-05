import { BoxGeometry, BufferAttribute, Vector2 } from "three"

export const setUvs = (geometry: BoxGeometry, uvInfo: number[]) => {
  const [u, v, w, h, d, textureWidth, textureHeight] = uvInfo

  const toFaceVertices = (x1: number, y1: number, x2: number, y2: number) => [
    new Vector2(x1 / textureWidth, 1.0 - y2 / textureHeight),
    new Vector2(x2 / textureWidth, 1.0 - y2 / textureHeight),
    new Vector2(x2 / textureWidth, 1.0 - y1 / textureHeight),
    new Vector2(x1 / textureWidth, 1.0 - y1 / textureHeight),
  ]

  const top = toFaceVertices(u + d, v, u + w + d, v + d)
  const bottom = toFaceVertices(u + w + d, v, u + w * 2 + d, v + d)
  const left = toFaceVertices(u, v + d, u + d, v + d + h)
  const front = toFaceVertices(u + d, v + d, u + w + d, v + d + h)
  const right = toFaceVertices(u + w + d, v + d, u + w + d * 2, v + h + d)
  const back = toFaceVertices(u + w + d * 2, v + d, u + w * 2 + d * 2, v + h + d)

  const uvAttr = geometry.attributes.uv as BufferAttribute
  const uvRight = [right[3], right[2], right[0], right[1]]
  const uvLeft = [left[3], left[2], left[0], left[1]]
  const uvTop = [top[3], top[2], top[0], top[1]]
  const uvBottom = [bottom[0], bottom[1], bottom[3], bottom[2]]
  const uvFront = [front[3], front[2], front[0], front[1]]
  const uvBack = [back[3], back[2], back[0], back[1]]

  const newUVData = []

  for (const uvArray of [uvRight, uvLeft, uvTop, uvBottom, uvFront, uvBack]) {
    for (const uv of uvArray) {
      newUVData.push(uv.x, uv.y)
    }
  }

  uvAttr.set(new Float32Array(newUVData))
  uvAttr.needsUpdate = true
}

export const setBodyBoxUvs = (geometry: BoxGeometry, boxUvs: number[]) => {
  setUvs(geometry, [...boxUvs, 64, 64])
}
