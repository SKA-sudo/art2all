import { Line } from "@react-three/drei";
import { GroundTruthGesture } from "../../data/GroundTruthGesture";

export default function GDLViewer() {
  const points = GroundTruthGesture.map((p) => [p.x, p.y, p.z]);

  return (
    <Line
      points={points}
      color="yellow"
      lineWidth={6}
    />
  );
}