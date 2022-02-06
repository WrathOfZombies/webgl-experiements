import { Suspense } from "react"

import { Environment, PresentationControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Cactus } from "../models/cactus/cactus"
import { Camera } from "../models/camera/camera"
import { Dog } from "../models/dog/dog"
import { Studio } from "../models/studio/studio"

const OfficeScene = () => {
  return (
    <>
      <Canvas flat shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 25 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 4, 0]}
            polar={[0, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}>
            <group position-y={-0.75} dispose={null}>
              <Studio />
              <Dog />
              <Cactus />
              <Camera />
            </group>
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </>
  )
}

export { OfficeScene }
