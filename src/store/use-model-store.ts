import { create } from "zustand"

interface ModelState {
  skin: string
  setSkin: (skin: string) => void
}

const DEFAULT_SKIN = "/skins/default.png"

export const useModelStore = create<ModelState>()(set => ({
  skin: DEFAULT_SKIN,
  setSkin: (skin) => set(() => ({
    skin,
  }))
}))
