import { Canvas } from "@react-three/fiber";
import { Experience } from "./planweb/Exprence.jsx";
function Sky() {
  return (
    <>
    {/* <LandingPage /> */}
  {/* <Scenes/> */}
  <Canvas camera={{
    position: [0, 0, 5],
    fov: 30,
  }}>
    <color attach="background" args={["#ececec"]} />
    <Experience />
  </Canvas>

</>
  )
}

export default Sky