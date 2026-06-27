import { Image } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import { createRoundedPlane } from "../utils/RoundedPlaneGeometry";
import { useTexture } from "@react-three/drei";

export default function Paper({
  position,
  normal,
  rotation = 0,
  flow = 0,
  image,
  scale,
}) {

  const geometry = useMemo(() => {
    return createRoundedPlane(1, 1, 0.08, 12);
  }, []);
  const texture = useTexture(image);
    
  const quaternion = useMemo(() => {
    // Ohne Oberflächennormale: keine Ausrichtung notwendig
    if (!normal) {
      return new THREE.Quaternion();
    }

    const n = normal.clone().normalize();

    const align = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      n
    );

    const twist = new THREE.Quaternion().setFromAxisAngle(
  n,
  THREE.MathUtils.degToRad(flow + rotation)
);

return align.multiply(twist);

}, [normal, rotation, flow]);

  return (
  <group
    position={position}
    quaternion={quaternion}
    rotation={!normal ? [0, 0, rotation] : undefined}
  >
    <mesh geometry={geometry} scale={scale ?? [1.4, 0.9, 1]}>
      <meshStandardMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  </group>
);
} 