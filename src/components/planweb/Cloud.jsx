import { useGLTF } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { clone } from "three/examples/jsm/utils/SkeletonUtils"; 

export default function Cloud({ position, scale = [1.05, 2.05, 6.05] }) {
  const { scene } = useGLTF("/3dmodels/sc.glb");    
  const cloudRef = useRef();

  const cloudScene = useMemo(() => clone(scene), []);

  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <primitive 
      object={cloudScene} 
      scale={scale} 
      ref={cloudRef} 
      position={position} 
    />
  ); 
};
