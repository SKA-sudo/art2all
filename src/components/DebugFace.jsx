import * as THREE from "three";

export default function DebugFace({ position, normal }) {
  return (
    <group position={position}>
      {/* Mittelpunkt */}
      <mesh>
        <sphereGeometry args={[0.01, 8, 8]} />
        <meshBasicMaterial color="red" />
      </mesh>

      {/* Normale */}
      <primitive
        object={
          new THREE.ArrowHelper(
            normal.clone().normalize(),
            new THREE.Vector3(0, 0, 0),
            0.05,
            0x00ff00
          )
        }
      />
    </group>
  );
}