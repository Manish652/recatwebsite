import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Loader from './Loader';
import CollegeModel from "./CollegeModel";
import Earth from './Earth';
import { Stars, Sparkles, Environment, OrbitControls } from "@react-three/drei";

function Scene() {
  return (
    <Canvas shadows camera={{ position: [15, 10, 20], fov: 45 }}>
      {/* Background & Fog */}
      <color attach="background" args={["#050510"]} />
      <fog attach="fog" args={["#070720", 10, 50]} />

      {/* Stars & Sparkles for Depth */}
      <Stars radius={100} depth={500} count={50000} factor={4} saturation={0} fade speed={1} />
      <Stars radius={40} depth={15} count={2000} factor={2} saturation={0.2} fade speed={2} />
      <Sparkles count={400} size={10} scale={[15, 15, 15]} color="#1A2A6C" />
      <Sparkles count={400} size={10} scale={[15, 15, 15]} color="#F0F8FF" />
      <Sparkles count={400} size={10} scale={[15, 15, 15]} color="#FFD700" />
      <Sparkles count={400} size={10} scale={[15, 15, 15]} color="#FF4500" />

      {/* Atmosphere Effect */}
      <mesh position={[0, -5, -30]}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshBasicMaterial color="white" transparent opacity={0.08} />
      </mesh>

      {/* Lighting */}
      <hemisphereLight args={["#3a3a7a", "#1c1c3a", 0.6]} />
      <directionalLight position={[10, 15, 10]} intensity={2} castShadow shadow-mapSize={2048} shadow-bias={-0.001} color="#5b3cc4" 
      />
      <pointLight position={[-5, 5, -5]} intensity={1.2} color="#5b3cc4" distance={25} decay={2} />
      <spotLight position={[0, 12, 0]} angle={0.3} penumbra={0.5} intensity={2.5} castShadow color="#00aaff" />

      {/* 3D Model - College */}
      <Suspense fallback={<Loader />}>
        <group scale={[0.5, 0.5, 0.5]} position={[0, -7, 5]}>
         <Earth/>
          <CollegeModel />
        </group>
      </Suspense>

      {/* Camera Controls */}
      <OrbitControls
        enableZoom
        enablePan
        minDistance={10}
        maxDistance={50}
        dampingFactor={0.1}
        rotateSpeed={0.6}
        zoomSpeed={0.8}
        autoRotate
        autoRotateSpeed={1}
      />

      {/* Environment */}
      <Environment preset="sunset" />
    </Canvas>
  );
}

export default Scene;
