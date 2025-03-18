import { Text } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const FloatingObject = ({ position, color, scale = 1, text }) => {
  const meshRef = useRef();
  const textRef = useRef();  

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow>
      {/* Sphere */}
      <sphereGeometry args={[scale, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8} 
        roughness={0.2} 
        metalness={0.3}
      />

<Text
        ref={textRef}
        position={[0, 0, 0]}  // Centered inside the sphere
        fontSize={scale * 0.3}  // Adjust text size relative to sphere
        color="yellow"
        anchorX="center"
        anchorY="middle"
        
        fillOpacity={3}
        outlineWidth={0.03}
        outlineColor="black"
        rotation={[0, Math.PI, 0]}  // Flip the text for visibility
      >
        {text} 
      </Text>
    </mesh>
  );
};

export default FloatingObject;
