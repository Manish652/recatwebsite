import React from 'react'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function Cube({position,color,size}) {
 const ref = useRef()
   useFrame((state,delta)=>{
     ref.current.rotation.x+=delta;
     ref.current.rotation.y+=delta*2.0;
     ref.current.position.z= Math.sin(state.clock.elapsedTime)*4;
   });
   return(
     <mesh position={position} ref={ref}>
     <boxGeometry args={size}/>
     <meshPhysicalMaterial color={color} />
   </mesh>
   );
};
export default Cube;


