import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

function RobotHead({ mousePos }) {
  const headRef = useRef()
  const eyeLeftRef = useRef()
  const eyeRightRef = useRef()

  useFrame(() => {
    if (!headRef.current) return
    const targetX = (mousePos.current.y - 0.5) * 0.6
    const targetY = (mousePos.current.x - 0.5) * 0.8
    headRef.current.rotation.x += (targetX - headRef.current.rotation.x) * 0.08
    headRef.current.rotation.y += (targetY - headRef.current.rotation.y) * 0.08
  })

  return (
    <group ref={headRef}>
      {/* Head */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Face plate */}
      <mesh position={[0, 0, 0.72]}>
        <boxGeometry args={[1.1, 1.0, 0.05]} />
        <meshStandardMaterial color="#b0b8c1" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Left eye */}
      <mesh ref={eyeLeftRef} position={[-0.28, 0.1, 0.78]}>
        <boxGeometry args={[0.22, 0.22, 0.05]} />
        <meshStandardMaterial color="#111" emissive="#4488ff" emissiveIntensity={1.2} />
      </mesh>

      {/* Right eye */}
      <mesh ref={eyeRightRef} position={[0.28, 0.1, 0.78]}>
        <boxGeometry args={[0.22, 0.22, 0.05]} />
        <meshStandardMaterial color="#111" emissive="#4488ff" emissiveIntensity={1.2} />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, -0.25, 0.78]}>
        <boxGeometry args={[0.5, 0.08, 0.05]} />
        <meshStandardMaterial color="#111" emissive="#4488ff" emissiveIntensity={0.8} />
      </mesh>

      {/* Antenna base */}
      <mesh position={[0, 0.78, 0]}>
        <boxGeometry args={[0.12, 0.22, 0.12]} />
        <meshStandardMaterial color="#b0b8c1" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Antenna tip */}
      <mesh position={[0, 1.05, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#4488ff" emissive="#4488ff" emissiveIntensity={1.5} />
      </mesh>

      {/* Ear left */}
      <mesh position={[-0.78, 0, 0]}>
        <boxGeometry args={[0.12, 0.5, 0.3]} />
        <meshStandardMaterial color="#b0b8c1" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Ear right */}
      <mesh position={[0.78, 0, 0]}>
        <boxGeometry args={[0.12, 0.5, 0.3]} />
        <meshStandardMaterial color="#b0b8c1" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, -0.85, 0]}>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshStandardMaterial color="#b0b8c1" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Body */}
      <mesh position={[0, -1.7, 0]}>
        <boxGeometry args={[1.6, 1.0, 1.0]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Chest light */}
      <mesh position={[0, -1.7, 0.52]}>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial color="#111" emissive="#4488ff" emissiveIntensity={1.2} />
      </mesh>
    </group>
  )
}

export default function Robot() {
  const mousePos = useRef({ x: 0.5, y: 0.5 })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    mousePos.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    }
  }

  return (
    <div
      style={{ width: '320px', height: '320px' }}
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 4, 3]} intensity={1.2} />
        <pointLight position={[-2, -2, 2]} intensity={0.4} color="#4488ff" />
        <RobotHead mousePos={mousePos} />
      </Canvas>
    </div>
  )
}