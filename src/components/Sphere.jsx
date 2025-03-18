import React from 'react'
import { useEffect, useRef } from 'react';
import { useFrame } from "@react-three/fiber";
function Sphere({position,size,color}) {
 const ref = useRef();
   useFrame((state,delta)=>{
     ref.current.rotation.x+=delta;
     ref.current.rotation.y+=delta*2.0;
     ref.current.position.z= Math.sin(state.clock.elapsedTime)*3;
 
    });
   return(
     <mesh position={position} ref={ref}>
       <sphereGeometry size={size}/>
       <meshPhysicalMaterial color={color} wireframe/>
     </mesh>
   );
};

export default Sphere;
