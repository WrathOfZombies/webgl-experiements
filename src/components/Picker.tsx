import { HexColorPicker } from "react-colorful"
import { useSnapshot } from "valtio"

import { state } from "../state"

export default function Picker() {
  const { items, current } = useSnapshot(state)
  const item = current ? items[current] : null

  if (!item) {
    return null
  }

  return (
    <div style={{ display: current ? "block" : "none" }}>
      <HexColorPicker
        className="picker"
        color={item}
        onChange={(color) => {
          if (current) {
            state.swatch = undefined
            state.items[current] = color
          }
        }}
      />
      <h1>{current}</h1>
    </div>
  )
}
