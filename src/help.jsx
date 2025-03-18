import { useEffect, useRef } from 'react';
import {Canvas,useFrame} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import Cube from './components/Cube';
import Sphere from './components/Sphere';
import './App.css'
import Shape from './components/Shape';
function help() {
  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.accept();
    }
  }, []);
  return (
    <>
    <Canvas>
      <ambientLight intensity={0.1}/>
      <directionalLight position={[0,0,2]}/>


    {/* <group position={[0,-1,0]}>
      <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}  />
      <Cube position={[-1,0,0]} color={"pink"} size={[1,1,1]}  />
      <Cube position={[-1,2,0]} color={"blue"} size={[1,1,1]}  />
      <Cube position={[1,2,0]} color={"yellow"} size={[1,1,1]} />
    </group> */}

<Cube position={[-3, 0.5, 4]} size={[1, 1, 1]} color={"yellow"} />
      {/* <Sphere position={[3,0,0]} size={[1,0.1,1000,50]} color={"yellow"}/> */}
      {/* <OrbitControls/> */}
      {/* <Shape position={[1,1,1]} size={[1,0]} color={"yellow"}/> */}
      <OrbitControls/>
     </Canvas>
    </>
  );
};

export default help


