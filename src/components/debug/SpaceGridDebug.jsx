import { useMemo } from "react";
import * as THREE from "three";

export default function SpaceGridDebug() {
  const geometry = useMemo(() => {
    const positions = new Float32Array([
      -1.2, -1.0, 0.15,
      -1.2, 1.0, 0.15,
      0, -1.0, 0.15,
      0, 1.0, 0.15,
      1.2, -1.0, 0.15,
      1.2, 1.0, 0.15,
      -1.2, -1.0, 0.15,
      1.2, -1.0, 0.15,
      -1.2, -0.5, 0.15,
      1.2, -0.5, 0.15,
      -1.2, 0, 0.15,
      1.2, 0, 0.15,
      -1.2, 0.5, 0.15,
      1.2, 0.5, 0.15,
      -1.2, 1.0, 0.15,
      1.2, 1.0, 0.15,
    ]);

    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    return bufferGeometry;
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="red" linewidth={4} depthTest={false} />
    </lineSegments>
  );
}
