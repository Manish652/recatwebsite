import { useGLTF } from "@react-three/drei";

export default function CollegeModel() {
  const { scene } = useGLTF("/3dmodels/robot.glb");    
  return(
    <>
    <primitive object={scene} scale={5} />
    {/* <primitive 
      object={scene} 
      scale={[100, 100, 100]}  // Make it larger
      position={[5, -10, 0]}  // Center it
      rotation={[0, Math.PI, 0]}  // Adjust rotation if needed
    /> */}
    </>

  ) 
};

///home/manish-bhunia/My Files/Code/R3F(REACT Three)/web3d/public/3dmodels/building.glb