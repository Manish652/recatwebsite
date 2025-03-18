import { Float, OrbitControls,Sparkles } from "@react-three/drei";
import Back from "./Back.jsx"; 
import AirPlane from "./AirPlane.jsx";
import Cloud from "./Cloud.jsx";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Back/>
         <Sparkles count={400} size={10} scale={[15, 15, 15]} color="white" />

      {/* Floating Airplane - More Realistic Movement */}
      <Float floatIntensity={1.5} speed={1.2} rotationIntensity={0.5}>
        <AirPlane 
          scale={[0.2, 0.2, 0.2]} 
          position={[0, 0.3, 0]} 
          rotation={[0, Math.PI / 2, 0]} 
        />
      </Float>

      {/* Randomly Scattered Clouds Across a Wider Sky */}
      <Cloud position={[-30, 15, 120]} scale={[1.5, 1.2, 2.8]} />   {/* Far Left */}
      <Cloud position={[45, 20, -90]} scale={[1.8, 1.4, 3]} />   {/* High & Far Right */}
      <Cloud position={[-30, 20, 65]} scale={[2, 1.5, 3.5]} />   {/* Low & Left */}
      <Cloud position={[50, 25, 48]} scale={[2.5, 2, 4]} />    {/* Very High Up */}
      <Cloud position={[-90, 45, 30]} scale={[1.3, 1.1, 2.3]} />   {/* Mid-Level */}
      <Cloud position={[80, 95, 30]} scale={[1.7, 1.5, 2.5]} />   {/* Right, Low */}
      <Cloud position={[140, 25, 110]} scale={[1.2, 1.8, 4.2]} />   {/* Very Far */}
      <Cloud position={[100, 30, -20]} scale={[1.9, 1.7, 3]} />   {/* High, Right */}
      <Cloud position={[-50, 8, 75]} scale={[1.5, 1.3, 2.5]} />   {/* Low, Left */}
      <Cloud position={[10, 18, -10]} scale={[1.2, 1.1, 2]} />    {/* Close Cloud */}
    </>
  );
};    