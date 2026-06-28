import * as THREE from "three";
import { useMemo } from "react";
import { Line } from "@react-three/drei";

export default function DebugWingCurves({
  root = [0, 0, 0],
  side = 1,
}) {
  const curves = useMemo(() => {
    const result = [];

    const rootPos = new THREE.Vector3(...root);
    const fingerCount = 7;

    for (let i = 0; i < fingerCount; i++) {
      const t = i / (fingerCount - 1);

      const length = THREE.MathUtils.lerp(7, 15, t);
        const arc = THREE.MathUtils.lerp(-4, 5, t);

        const p0 = rootPos.clone();

        const p1 = rootPos.clone().add(
        new THREE.Vector3(
            side * length * 0.25,
            arc * 0.9,
            side * 0.8
        )
        );

        const p2 = rootPos.clone().add(
        new THREE.Vector3(
            side * length * 0.65,
            arc * 1.2,
            side * 1.4
        )
        );

        const p3 = rootPos.clone().add(
        new THREE.Vector3(
            side * length,
            arc,
            0
        )
        );

      const curve = new THREE.CatmullRomCurve3([
        p0,
        p1,
        p2,
        p3,
      ]);

      result.push(curve.getPoints(24));
    }

    return result;
  }, [root, side]);

 return (
  <>
    {curves.map((points, i) => (
      <Line
        key={i}
        points={points}
        color="#00ff55"
        lineWidth={4}
      />
    ))}
  </>
);

}