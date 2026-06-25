import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";


/* -------------------- GLOW PARTICLES -------------------- */
export default function GlowParticles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 40; i++) {
      arr.push(
        (Math.random() - 0.5) * 35, // x
        Math.random() * 18 - 2,     // y
        (Math.random() - 0.5) * 20  // z
      );
    }

    return new Float32Array(arr);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!ref.current) return;

    ref.current.rotation.y = t * 0.02;
    ref.current.position.y = Math.sin(t * 0.3) * 0.2;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#fff8d6"
        size={0.25}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
