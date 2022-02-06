import { mockSwatches } from "./mockSwatches"
import { Swatch } from "./parseSwatchFromUrl"

const SwatchCell: React.FC<{ swatch: Swatch; onSwatchClicked?: (swatch: Swatch) => void }> = ({ swatch, onSwatchClicked }) => {
  const swatchKeys = Object.keys(swatch) as (keyof Swatch)[]

  return (
    <div
      style={{
        display: "block",
        fontSize: "8pt",
        textAlign: "right",
        margin: "10px",
        borderRadius: "15px",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => onSwatchClicked?.(swatch)}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          verticalAlign: "center",
          justifyContent: "flex-end",
        }}>
        {swatchKeys.map((key) => (
          <span
            style={{
              backgroundColor: swatch[key],
              height: "100px",
              width: "40px",
              writingMode: "vertical-rl",
              textOrientation: "upright",
              textAlign: "center",
              padding: "0 20px 0 0",
            }}>
            {swatch[key]}
          </span>
        ))}
      </div>
    </div>
  )
}

const Swatches: React.FC<{ onSwatchClicked?: (swatch: Swatch) => void }> = ({ onSwatchClicked }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      right: "1vw",
    }}>
    {mockSwatches.map((swatch) => (
      <SwatchCell swatch={swatch} onSwatchClicked={onSwatchClicked} />
    ))}
  </div>
)

export { Swatches }
