import Loader from './Loader';
import Model from './Model';
import FloatingObject from './FloatingObject';
import React, { Suspense, useRef, useEffect } from 'react';
import { OrbitControls, Sparkles, PerspectiveCamera, useGLTF, Environment, Html,Text,useProgress } from '@react-three/drei';
const Scene = () => {
    const sceneRef = useRef();
    
    return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        />
        <Sparkles count={400} size={10} scale={[15, 15, 15]} color="yellow" />
        <Sparkles count={400} size={10} scale={[15, 15, 15]} color="#EEEEEE" />

  
  
        
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
        
        {/* Character models */}
        <Suspense fallback={<Loader />}>
          <group ref={sceneRef}>
            {/* Main robot character */}
            <Model 
              url="/3dmodels/robot.glb" 
              position={[0, -2, 2]} 
              scale={0.8} 
            />
            
            
            <FloatingObject position={[3, 2, -2]} color="#8b5cf6" scale={0.5}/>
            <FloatingObject position={[-3, -1, -1]} color="#3b82f6" scale={0.7}/>
            <FloatingObject position={[2, -2, 1]} color="#ec4899" scale={0.6}/>
            <FloatingObject position={[-2, 3, 0]} color="#10b981" scale={0.4}/>
            
            <Environment preset="city" />
          </group>
        </Suspense>
        
        <OrbitControls 
          enableZoom={true} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={true}
          minPolarAngle={Math.PI/2 - 0.5}
          maxPolarAngle={Math.PI/2 + 0.5}
        />
      </>
    );
  };
export default Scene;