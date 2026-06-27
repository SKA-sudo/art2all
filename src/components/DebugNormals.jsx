import * as THREE from "three";
import { useMemo } from "react";

export default function DebugNormals({
  faces = [],
  length = 0.35,
  color = "white",
}) {
  const geometry = useMemo(() => {
    if (!faces.length) return null;

    const points = [];

    faces.forEach((face) => {
      const start = face.center;
      const end = face.center
        .clone()
        .add(face.normal.clone().multiplyScalar(length));

      points.push(start, end);
    });

    return new THREE.BufferGeometry().setFromPoints(points);
  }, [faces, length]);

  if (!geometry) return null;

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={color} />
    </lineSegments>
  );
}