import { Suspense } from "react"

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Swatch, Swatches } from "../concepts/swatches"
import { Shoe, SHOE_STATE } from "../models/shoe"

const App = () => {
  const onSwatchClicked = (swatch: Swatch) => {
    SHOE_STATE.applySwatch(swatch)
  }

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Shoe />
          <Environment preset="city" />
          <ContactShadows
            {...({} as any)}
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
      <Swatches onSwatchClicked={onSwatchClicked} />
    </>
  )
}

export { App }
