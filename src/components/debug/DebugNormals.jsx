import * as THREE from "three";

export default function DebugNormals({ position, normal }) {
  const end = position.clone().add(
    normal.clone().normalize().multiplyScalar(0.03)
  );

  return (
    <>
      {/* Mittelpunkt */}
      <mesh position={position}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="yellow" />
      </mesh>

      {/* Ende der Normale */}
      <mesh position={end}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="lime" />
      </mesh>
    </>
  );
}