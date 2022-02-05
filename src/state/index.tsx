import { proxy } from "valtio"

type ShoeSegments = {
  laces: string
  mesh: string
  caps: string
  inner: string
  sole: string
  stripes: string
  band: string
  patch: string
}

type State = {
  current: keyof ShoeSegments | undefined
  items: ShoeSegments
}

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy<State>({
  current: undefined,
  items: {
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

export { state, type State }
