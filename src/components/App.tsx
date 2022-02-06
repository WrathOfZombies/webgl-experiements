import { useState } from "react"

import { Swatches } from "../concepts/swatches/Swatches"
import { OfficeScene } from "../scenes/OfficeScene"
import { ShoeScene } from "../scenes/ShoeScene"

const scenes: React.FC[] = [ShoeScene, OfficeScene]

const SceneSelector: React.FC<{ onSceneChanged: (sceneId: number) => void }> = ({ onSceneChanged }) => {
  return (
    <>
      {scenes.map((scene, i) => (
        <button className="scene-button" onClick={() => onSceneChanged(i)}>
          {scene.name}
        </button>
      ))}
    </>
  )
}

const App = () => {
  const [isFocussed, setIsFocussed] = useState(false)
  const [sceneId, setScene] = useState(0)
  const Scene = scenes[sceneId]

  return (
    <>
      {isFocussed ? <Swatches /> : <SceneSelector onSceneChanged={setScene} />}
      <Scene />
    </>
  )
}

export { App }
