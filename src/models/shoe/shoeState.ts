import { proxy, useSnapshot } from "valtio"

import { Colorable, Swatch } from "../../concepts/swatches/parseSwatchFromUrl"

type ShoeSegments = "laces" | "mesh" | "caps" | "inner" | "sole" | "stripes" | "band" | "patch"

type ShoeState = {
  colors: Colorable<ShoeSegments>
}

class ShoeStateFactory {
  private readonly state = proxy<ShoeState>({
    colors: {
      laces: "#ffffff",
      mesh: "#ffffff",
      caps: "#ffffff",
      inner: "#ffffff",
      sole: "#ffffff",
      stripes: "#ffffff",
      band: "#ffffff",
      patch: "#ffffff",
    },
  })

  get snapshot() {
    return useSnapshot(this.state)
  }

  public setColors(colors: Colorable<ShoeSegments>) {
    this.state.colors = colors
  }

  public applySwatch(swatch: Swatch) {
    this.state.colors = {
      laces: swatch.accent,
      mesh: swatch.primary,
      caps: swatch.accent,
      inner: swatch.accentSecondary,
      sole: swatch.secondary,
      stripes: swatch.brand,
      band: swatch.accent,
      patch: swatch.accent,
    }
  }
}

const SHOE_STATE = new ShoeStateFactory()

export { SHOE_STATE }
