import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

const StarBackground = (props) => {

    const ref = useRef(null);
  
  // Create a sphere of 5000 points (x, y, z for each, so 15000 values)
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000 * 3), { radius: 1.4 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow rotation over time
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
   
  }
  });

  return (
   <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          opacity={0.8}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
    