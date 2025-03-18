import {React,useRef} from "react";
import { Canvas, useFrame, useThree } from '@react-three/fiber';

import {useGLTF} from '@react-three/drei';

function Model({ url, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const { scene } = useGLTF("3dmodels/robot.glb");
  const ref = useRef();
  
  // Add subtle animation to the model
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });
  
  return (
    <primitive 
      ref={ref}
      object={scene} 
      position={position} 
      rotation={rotation} 
      scale={scale}
      castShadow
      receiveShadow
    />
  );
}
export default Model;