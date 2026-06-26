import * as THREE from "three";
import { useMemo } from "react";

export default function FeatherPrototype() {

  const geometry = useMemo(() => {

    const geo = new THREE.PlaneGeometry(
      0.35,
      1.0,
      12,
      40
    );

    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {

      const x = pos.getX(i);
      const y = pos.getY(i);

      // oben breiter
      const t = (y + 0.5);

      const width =
        0.10 +
        Math.sin(t * Math.PI) * 0.18;

      pos.setX(i, x * width * 4);

      // leichte Biegung
      pos.setZ(i, Math.sin(t * Math.PI) * 0.04);
    }

    pos.needsUpdate = true;
    geo.computeVertexNormals();

    return geo;

  }, []);

  return (
    <mesh
  geometry={geometry}
  scale={8}
>
  <meshStandardMaterial
    color="white"
    side={THREE.DoubleSide}
  />
</mesh>
  );

}