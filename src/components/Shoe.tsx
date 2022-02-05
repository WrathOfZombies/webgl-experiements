import React, { useRef } from "react"
import { useSnapshot } from "valtio"

import { useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { state } from "../state"
import { pickNextSwatch } from "./Swatches"

declare const THREE: any

export default function Shoe() {
  const ref: React.RefObject<any> = useRef()
  const snap = useSnapshot(state)

  const scroll = useScroll()

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

    const offset = 1 - scroll.offset
    const swatch = pickNextSwatch(offset)
    if (snap.swatch !== swatch) {
      state.items = {
        laces: swatch.colors[4].hex,
        mesh: swatch.colors[0].hex,
        caps: swatch.colors[4].hex,
        inner: swatch.colors[3].hex,
        sole: swatch.colors[1].hex,
        stripes: swatch.colors[2].hex,
        band: swatch.colors[4].hex,
        patch: swatch.colors[4].hex,
      }
    }
  })

  return (
    <group
      ref={ref}
      dispose={null}
      onClick={(e: any) => {
        e.stopPropagation()
        state.swatch = undefined
        state.current = e.object.material.name
      }}>
      <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.items.laces} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.items.mesh} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.items.caps} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.items.inner} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.items.sole} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.items.stripes} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.items.band} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.items.patch} />
    </group>
  )
}
