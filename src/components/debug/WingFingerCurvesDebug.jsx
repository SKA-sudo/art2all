import { Line } from "@react-three/drei";

export function WingFingerCurvesDebug({ curves = [] }) {
  if (!curves.length) return null;

  return (
    <group>
      {curves.map((curve) => (
        <Line
          key={curve.id}
          points={curve.points}
          color="lime"
          lineWidth={2}
        />
      ))}
    </group>
  );
}