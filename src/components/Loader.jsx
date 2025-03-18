import { useProgress,Html } from '@react-three/drei';
import React from 'react'

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-white font-medium">{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  );
}
export default Loader