import { Environment, Sphere, useTexture } from '@react-three/drei';
import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Back() {
  const skyRef = useRef();
  const cloudRef = useRef();

  // Generate the base sky gradient texture
  const skyTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#0a2463'); // Deep blue at top
    gradient.addColorStop(0.5, '#3e92cc'); // Mid-sky blue
    gradient.addColorStop(0.8, '#84ceeb'); // Light blue near horizon
    gradient.addColorStop(1, '#c1e8ff'); // Very light blue at horizon
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Generate the cloud texture with noise patterns
  const cloudTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    
    // Fill with transparent base
    ctx.fillStyle = 'rgba(255,255,255,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Create cloud patterns
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.6 + canvas.height * 0.2;
      const radius = Math.random() * 150 + 50;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, 'rgba(255,255,255,0.9)');
      gradient.addColorStop(0.4, 'rgba(255,255,255,0.6)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Create larger cloud structures
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.3 + canvas.height * 0.5;
      const width = Math.random() * 300 + 200;
      const height = Math.random() * 100 + 50;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, width/2);
      gradient.addColorStop(0, 'rgba(255,255,255,0.8)');
      gradient.addColorStop(0.6, 'rgba(255,255,255,0.3)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(x, y, width/2, height/2, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Animate the sky and clouds
  useFrame((state, delta) => {
    if (cloudRef.current) {
      // Move clouds slowly across the sky
      cloudRef.current.rotation.y += delta * 0.02;
      
      // Subtle pulsing of clouds
      const pulseFactor = Math.sin(state.clock.elapsedTime * 0.2) * 0.05 + 1;
      cloudRef.current.scale.set(pulseFactor, pulseFactor, pulseFactor);
    }
    
    if (skyRef.current) {
      // Subtle sky animation - very slow rotation
      skyRef.current.rotation.y += delta * 0.001;
    }
  });

  return (
    <>
      {/* Environment lighting */}
      <Environment preset="sunset" />
      
      {/* Sky background sphere */}
      <Sphere ref={skyRef} scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <meshBasicMaterial 
          attach="material" 
          side={THREE.BackSide} 
          map={skyTexture}
        />
      </Sphere>
      
      {/* Cloud layer sphere */}
      {/* <Sphere ref={cloudRef} scale={[95, 95, 95]} rotation-y={Math.PI / 2}>
        <meshBasicMaterial 
          attach="material" 
          side={THREE.BackSide}
          map={cloudTexture}
          transparent={true}
          alphaTest={0.1}
          opacity={0.8}
        />
      </Sphere> */}
    </>
  );
}

export default Back;