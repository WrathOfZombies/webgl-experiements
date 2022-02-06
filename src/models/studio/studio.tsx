import { useSpring } from "@react-spring/three"
import { useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const Studio: React.FC = () => {
  const { nodes } = useGLTF("/level-react-draco.glb") as any
  const { camera } = useThree()

  useSpring(
    () => ({
      from: { y: camera.position.y + 5 },
      to: { y: camera.position.y },
      config: { friction: 100 },
      onChange: ({ value }) => ((camera.position.y = value.y), camera.lookAt(0, 0, 0)),
    }),
    [],
  )

  return (
    <mesh
      geometry={nodes.Level.geometry}
      material={nodes.Level.material}
      position={[-0.38, 0.69, 0.62]}
      rotation={[Math.PI / 2, -Math.PI / 9, 0]}
    />
  )
}

export { Studio }
