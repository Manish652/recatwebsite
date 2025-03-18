import React from 'react'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function Shape({position,size,color}) {
    const ref = useRef();

    useFrame((state,delta)=>{
        ref.current.rotation.x+=delta;
    });
  return (
    <>
    <mesh position={position}ref={ref}>
    <icosahedronGeometry args={size} />
    <meshStandardMaterial color={color} />
    </mesh>
    
    </>
  )
}

export default Shape

