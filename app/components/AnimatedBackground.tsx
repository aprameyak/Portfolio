'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// Add type declaration for maath
declare module 'maath/random/dist/maath-random.esm' {
  export function inSphere(array: Float32Array, options: { radius: number }): Float32Array;
}

function Stars(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.2 }));
  const [rotationSpeed] = useState(() => ({
    x: Math.random() * 0.2 + 0.1,
    y: Math.random() * 0.2 + 0.1
  }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * rotationSpeed.x;
      ref.current.rotation.y -= delta * rotationSpeed.y;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#9d4edd"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          fog={true}
        />
      </Points>
    </group>
  );
}

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]} // Optimize for different screen densities
      >
        <Stars />
      </Canvas>
    </div>
  );
} 