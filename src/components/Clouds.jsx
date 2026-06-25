import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


/* -------------------- CLOUDS -------------------- */
export default function Clouds() {
  const groupRef = useRef();
  const cloudTexture = useTexture("/textures/cloud.png");

  // 🌫️ 2 Layer statt 1
  const clouds = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 18; i++) {
      arr.push({
        id: "far_" + i,
        layer: "far",
        x: (Math.random() - 0.5) * 160,
        y: 15 + Math.random() * 25,
        z: -60 - Math.random() * 140,
        s: 18 + Math.random() * 28,
        o: 0.08 + Math.random() * 0.12,
        phase: Math.random() * Math.PI * 2,
      });
    }

    for (let i = 0; i < 22; i++) {
      arr.push({
        id: "near_" + i,
        layer: "near",
        x: (Math.random() - 0.5) * 140,
        y: 5 + Math.random() * 18,
        z: -20 - Math.random() * 100,
        s: 22 + Math.random() * 35,
        o: 0.12 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;

    groupRef.current.children.forEach((mesh, i) => {
      const c = clouds[i];
      if (!c) return;

      const wind = c.layer === "far" ? 0.6 : 1.0;

      mesh.position.x =
        c.x + Math.sin(t * 0.03 + c.phase) * 6 * wind;

      mesh.position.y =
        c.y + Math.sin(t * 0.02 + c.phase) * 2 * wind;

      mesh.position.z =
        c.z + Math.cos(t * 0.025 + c.phase) * 4 * wind;

      const pulse = Math.sin(t * 0.2 + c.phase) * 0.05;

      mesh.material.opacity = c.o + pulse;
    });
  });

  return (
    <group ref={groupRef}>
      {clouds.map((c) => (
        <mesh key={c.id} position={[c.x, c.y, c.z]}>
          <planeGeometry args={[c.s, c.s]} />
          <meshStandardMaterial
            map={cloudTexture}
            transparent
            depthWrite={false}
            opacity={c.o}
            roughness={1}
            metalness={0}
            emissive="#ffffff"
            emissiveIntensity={0.12}
            blending={THREE.NormalBlending}
          />
        </mesh>
      ))}
    </group>
  );
}