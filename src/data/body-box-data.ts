const SKIN_TEXTURE_WIDTH = 64
const SKIN_TEXTURE_HEIGHT = 64

export interface BoxData {
  [key: string]: {
    innerBoxGeometry: [width: number, height: number, depth: number],
    innerBoxUvs: number[],
    outerBoxGeometry: [width: number, height: number, depth: number],
    outerBoxUvs: number[],
    position: [x: number, y: number, z: number],
  }
}

export const bodyBoxData: BoxData = {
  head: {
    innerBoxGeometry: [8, 8, 8],
    innerBoxUvs: [0, 0, 8, 8, 8, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    outerBoxGeometry: [9, 9, 9],
    outerBoxUvs: [32, 0, 8, 8, 8, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    position: [0, 4, 0]
  },
  body: {
    innerBoxGeometry: [8, 12, 4],
    innerBoxUvs: [16, 16, 8, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    outerBoxGeometry: [8.5, 12.5, 4.5],
    outerBoxUvs: [16, 32, 8, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    position: [0, -6, 0]
  },
  rightArm: {
    innerBoxGeometry: [4, 12, 4],
    innerBoxUvs: [40, 16, 4, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    outerBoxGeometry: [4.5, 12.5, 4.5],
    outerBoxUvs: [40, 32, 4, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    position: [-6, -6, 0]
  },
  leftArm: {
    innerBoxGeometry: [4, 12, 4],
    innerBoxUvs: [32, 48, 4, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    outerBoxGeometry: [4.5, 12.5, 4.5],
    outerBoxUvs: [48, 48, 4, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    position: [6, -6, 0]
  },
  rightLeg: {
    innerBoxGeometry: [4, 12, 4],
    innerBoxUvs: [0, 16, 4, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    outerBoxGeometry: [4.5, 12.5, 4.5],
    outerBoxUvs: [0, 32, 4, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    position: [-2, -18, 0]
  },
  leftLeg: {
    innerBoxGeometry: [4, 12, 4],
    innerBoxUvs: [16, 48, 4, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    outerBoxGeometry: [4.5, 12.5, 4.5],
    outerBoxUvs: [0, 48, 4, 12, 4, SKIN_TEXTURE_WIDTH, SKIN_TEXTURE_HEIGHT],
    position: [2, -18, 0]
  },
}
