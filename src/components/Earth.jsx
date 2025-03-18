import { useGLTF } from "@react-three/drei";

export default function Earth() {
  const { scene } = useGLTF("/3dmodels/earth.glb");    
  return(
    <>
    <primitive object={scene} scale={4} />
    {/* <primitive 
      object={scene} 
      scale={[100, 100, 100]}  // Make it larger
      position={[5, -10, 0]}  // Center it
      rotation={[0, Math.PI, 0]}  // Adjust rotation if needed
    /> */}
    </>

  ) 
};
