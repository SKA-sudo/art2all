import * as THREE from "three";
import { useMemo } from "react";

export default function DebugFaces({ a, b, c }) {

  const geometry = useMemo(() => {

    if (!a || !b || !c) return null;

    const g = new THREE.BufferGeometry();

    const vertices = new Float32Array([
      a.x, a.y, a.z,
      b.x, b.y, b.z,
      c.x, c.y, c.z,
    ]);

    g.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );

    g.computeVertexNormals();

    return g;

  }, [a, b, c]);

  if (!geometry) return null;

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        color="white"
        wireframe
      />
    </mesh>
  );
}