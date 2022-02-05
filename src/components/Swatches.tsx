import { HexColorPicker } from "react-colorful"
import { useSnapshot } from "valtio"

import { state } from "../state"

type ISwatch = {
  name: string
  colors: { hex: string; r: string; g: string; b: string }[]
}

const Swatch: React.FC<ISwatch> = ({ name, colors }) => (
  <div
    title={name}
    style={{
      display: "block",
      fontSize: "8pt",
      textAlign: "right",
      fontFamily: "Cascadia Mono",
      margin: "10px",
      borderRadius: "15px",
      overflow: "hidden",
      cursor: "pointer",
    }}
    onClick={() => {
      state.swatch = undefined
      state.items = {
        laces: colors[4].hex,
        mesh: colors[0].hex,
        caps: colors[4].hex,
        inner: colors[3].hex,
        sole: colors[1].hex,
        stripes: colors[2].hex,
        band: colors[4].hex,
        patch: colors[4].hex,
      }
    }}>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        verticalAlign: "center",
        justifyContent: "flex-end",
      }}>
      {colors.map((color) => (
        <span
          style={{
            backgroundColor: color.hex,
            height: "100px",
            width: "40px",
            writingMode: "vertical-rl",
            textOrientation: "upright",
            textAlign: "center",
            padding: "0 20px 0 0",
          }}>
          {color.hex}
        </span>
      ))}
    </div>
  </div>
)

const Swatches = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      right: "1vw",
    }}>
    {mockSwatches.map((swatch) => (
      <Swatch {...swatch} />
    ))}
  </div>
)

export { Swatches }

const mockSwatches: ISwatch[] = [
  {
    name: "evening-on-the-beach-2",
    colors: [
      { hex: "#FEA443", r: "253", g: "163", b: "66" },
      { hex: "#F3FEB0", r: "242", g: "253", b: "175" },
      { hex: "#705E78", r: "112", g: "93", b: "119" },
      { hex: "#A5AAA3", r: "165", g: "170", b: "163" },
      { hex: "#812F33", r: "128", g: "47", b: "51" },
    ],
  },
  {
    name: "0112-1",
    colors: [
      { hex: "#048C7F", r: "4", g: "140", b: "127" },
      { hex: "#F2E2C4", r: "242", g: "226", b: "196" },
      { hex: "#D99441", r: "217", g: "148", b: "65" },
      { hex: "#D94E41", r: "217", g: "78", b: "65" },
      { hex: "#BF0A0A", r: "191", g: "10", b: "10" },
    ],
  },
  {
    name: "Durability-Engineers-1",
    colors: [
      { hex: "#254559", r: "37", g: "69", b: "89" },
      { hex: "#3F7373", r: "63", g: "115", b: "115" },
      { hex: "#F2F2F2", r: "242", g: "242", b: "242" },
      { hex: "#D9D9D9", r: "217", g: "217", b: "217" },
      { hex: "#404040", r: "64", g: "64", b: "64" },
    ],
  },
  {
    name: "paleta1-1",
    colors: [
      { hex: "#FFBA00", r: "255", g: "186", b: "0" },

      { hex: "#5A6080", r: "90", g: "96", b: "128" },

      { hex: "#FFEECA", r: "255", g: "238", b: "202" },

      { hex: "#BCCEE0", r: "188", g: "206", b: "224" },

      { hex: "#405C55", r: "64", g: "92", b: "85" },
    ],
  },
  {
    name: "color-theme_b5cb93ff9a547db33e4b6286bb8d9190-1",
    colors: [
      { hex: "#F24452", r: "242", g: "68", b: "82" },
      { hex: "#542D59", r: "84", g: "45", b: "89" },
      { hex: "#C5D930", r: "197", g: "217", b: "48" },
      { hex: "#F2CF63", r: "242", g: "207", b: "99" },
      { hex: "#F25D50", r: "242", g: "93", b: "80" },
    ],
  },
]

const steps = mockSwatches.map((_, index) => index / mockSwatches.length)

export const pickNextSwatch = (offset = 0) => {
  let index = 0

  for (const step of steps) {
    if (step > offset) {
      return mockSwatches[index]
    }
    index++
  }

  return mockSwatches[0]
}
