import React, { useRef } from "react"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { SHOE_STATE } from "./shoeState"

const Shoe = () => {
  const ref: React.RefObject<any> = useRef()
  const snap = SHOE_STATE.snapshot

  // Drei's useGLTF hook sets up draco automatically, that's how it differs from useLoader(GLTFLoader, url)
  // { nodes, materials } are extras that come from useLoader, these do not exist in threejs/GLTFLoader
  // nodes is a named collection of meshes, materials a named collection of materials
  const { nodes, materials } = useGLTF("shoe-draco.glb") as any

  // Animate model
  useFrame((rootState) => {
    const t = rootState.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <group ref={ref}>
      <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.colors.laces} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.colors.mesh} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.colors.caps} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.colors.inner} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.colors.sole} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.colors.stripes} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.colors.band} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.colors.patch} />
    </group>
  )
}

export { Shoe }
