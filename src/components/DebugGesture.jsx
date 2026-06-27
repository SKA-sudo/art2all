import * as THREE from "three";
import { useMemo } from "react";

export default function DebugGesture({ shoulder, wingTip }) {
  const geometry = useMemo(() => {
    if (!shoulder || !wingTip) return null;

    return new THREE.BufferGeometry().setFromPoints([
      shoulder.center,
      wingTip.center,
    ]);
  }, [shoulder, wingTip]);

  if (!shoulder || !wingTip || !geometry) return null;

  return (
    <>
      <mesh position={shoulder.center}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="red" />
      </mesh>

      <mesh position={wingTip.center}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="blue" />
      </mesh>

      <line geometry={geometry}>
        <lineBasicMaterial color="yellow" />
      </line>
    </>
  );
}