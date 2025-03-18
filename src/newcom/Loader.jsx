import { useProgress } from "@react-three/drei";
import {Html} from '@react-three/drei';

import React from "react";
function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        
        <div className="text-white text-xl">
          Loading {progress.toFixed(0)}%
        </div>
      </Html>

    );
  }
export default Loader;
  