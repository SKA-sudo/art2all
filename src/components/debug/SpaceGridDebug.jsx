import { useMemo } from "react";
import * as THREE from "three";

/**
 * LocalDoveGrid
 * 
 * Renders a 3D spatial grid in the local dove coordinate system.
 * This grid helps visualize the spatial organization of the dove's local technical space
 * and serves as a reference for perceptual analysis.
 */
export default function SpaceGridDebug() {
  // X-axis lines: parallel to X axis, varying Y and Z
  const xGeometry = useMemo(() => {
    const positions = [];
    const xMin = -1.2, xMax = 1.2;
    const yMin = -1.0, yMax = 1.6, yStep = 0.5;
    const zMin = -0.8, zMax = 1.2, zStep = 0.5;

    for (let y = yMin; y <= yMax; y += yStep) {
      for (let z = zMin; z <= zMax; z += zStep) {
        positions.push(xMin, y, z, xMax, y, z);
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    return geom;
  }, []);

  // Y-axis lines: parallel to Y axis, varying X and Z
  const yGeometry = useMemo(() => {
    const positions = [];
    const xMin = -1.2, xMax = 1.2, xStep = 0.5;
    const yMin = -1.0, yMax = 1.6;
    const zMin = -0.8, zMax = 1.2, zStep = 0.5;

    for (let x = xMin; x <= xMax; x += xStep) {
      for (let z = zMin; z <= zMax; z += zStep) {
        positions.push(x, yMin, z, x, yMax, z);
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    return geom;
  }, []);

  // Z-axis lines: parallel to Z axis, varying X and Y
  const zGeometry = useMemo(() => {
    const positions = [];
    const xMin = -1.2, xMax = 1.2, xStep = 0.5;
    const yMin = -1.0, yMax = 1.6, yStep = 0.5;
    const zMin = -0.8, zMax = 1.2;

    for (let x = xMin; x <= xMax; x += xStep) {
      for (let y = yMin; y <= yMax; y += yStep) {
        positions.push(x, y, zMin, x, y, zMax);
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    return geom;
  }, []);

  return (
    <>
      {/* Origin marker - local dove grid center */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#ff00ff" />
      </mesh>

      {/* X-axis grid lines (cyan) */}
      <lineSegments geometry={xGeometry}>
        <lineBasicMaterial color="#00d4ff" linewidth={1.5} depthTest={false} transparent opacity={0.85} />
      </lineSegments>

      {/* Y-axis grid lines (blue) */}
      <lineSegments geometry={yGeometry}>
        <lineBasicMaterial color="#0088ff" linewidth={1.5} depthTest={false} transparent opacity={0.85} />
      </lineSegments>

      {/* Z-axis grid lines (green) */}
      <lineSegments geometry={zGeometry}>
        <lineBasicMaterial color="#00b85c" linewidth={1.5} depthTest={false} transparent opacity={0.85} />
      </lineSegments>
    </>
  );
}
