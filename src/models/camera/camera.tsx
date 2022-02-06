import { useEffect } from "react"

import { a, useSpring } from "@react-spring/three"
import { useGLTF } from "@react-three/drei"

const Camera: React.FC = () => {
  const { nodes, materials } = useGLTF("/level-react-draco.glb") as any
  const [spring, api] = useSpring(() => ({ "rotation-z": 0, config: { friction: 40 } }), [])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const wander = () => {
      api.start({ "rotation-z": Math.random() })
      timeout = setTimeout(wander, (1 + Math.random() * 5) * 1000)
    }
    wander()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <a.group position={[-0.58, 0.83, -0.03]} rotation={[Math.PI / 2, 0, 0.47]} {...spring}>
      <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
      <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} />
    </a.group>
  )
}

export { Camera }
