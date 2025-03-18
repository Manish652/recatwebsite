import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Test() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Spline scene="/scene.splinecode" />
    </main>
  );
}
