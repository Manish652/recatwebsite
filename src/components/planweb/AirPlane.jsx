import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function AirPlane() {
  const { scene } = useGLTF("/3dmodels/air.glb");    
  const airplaneRef = useRef();

  useFrame(({ clock }) => {
    if (airplaneRef.current) {
      airplaneRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.05; 
    }
  });

  return (
    <primitive object={scene} scale={2} ref={airplaneRef} />
  ); 
};