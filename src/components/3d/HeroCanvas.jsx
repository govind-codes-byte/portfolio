import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars, Torus } from '@react-three/drei'
import * as THREE from 'three'

// Animated distorted sphere - the main 3D hero element
const AnimatedSphere = () => {
  const sphereRef = useRef()
  const torusRef = useRef()
  const torus2Ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.2
      sphereRef.current.rotation.z = Math.sin(t * 0.3) * 0.1
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.4
      torusRef.current.rotation.y = t * 0.2
    }
    if (torus2Ref.current) {
      torus2Ref.current.rotation.x = -t * 0.3
      torus2Ref.current.rotation.z = t * 0.35
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Main sphere */}
      <Sphere ref={sphereRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#00FFB2"
          roughness={0.1}
          metalness={0.8}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.85}
        />
      </Sphere>

      {/* Outer ring 1 */}
      <Torus ref={torusRef} args={[2, 0.02, 16, 100]}>
        <meshBasicMaterial color="#00FFB2" transparent opacity={0.4} />
      </Torus>

      {/* Outer ring 2 */}
      <Torus ref={torus2Ref} args={[2.5, 0.01, 16, 100]}>
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.3} />
      </Torus>

      {/* Glow sphere */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial color="#00FFB2" transparent opacity={0.04} side={THREE.BackSide} />
      </Sphere>
    </Float>
  )
}

// Orbiting small spheres
const OrbitingSpheres = () => {
  const group = useRef()

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.5
    }
  })

  const positions = useMemo(() => [
    [2.8, 0, 0],
    [-2.8, 0, 0],
    [0, 2.8, 0],
    [0, -2.8, 0],
    [2, 2, 0],
    [-2, -2, 0],
  ], [])

  return (
    <group ref={group}>
      {positions.map((pos, i) => (
        <Sphere key={i} args={[0.08, 16, 16]} position={pos}>
          <meshBasicMaterial color={i % 2 === 0 ? '#00FFB2' : '#7C3AED'} />
        </Sphere>
      ))}
    </group>
  )
}

const HeroCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#00FFB2" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#7C3AED" />
        <pointLight position={[0, 0, 3]} intensity={2} color="#00FFB2" distance={8} />

        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />

        <AnimatedSphere />
        <OrbitingSpheres />
      </Canvas>
    </div>
  )
}

export default HeroCanvas
