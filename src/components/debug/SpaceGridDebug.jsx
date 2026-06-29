import { Line } from "@react-three/drei";

export default function SpaceGridDebug() {
  return (
    <>
      <Line
        points={[
          [-1.2, -1.0, 0.15],
          [-1.2, 1.0, 0.15],
        ]}
        color="red"
        lineWidth={4}
        depthTest={false}
      />

      <Line
        points={[
          [0, -1.0, 0.15],
          [0, 1.0, 0.15],
        ]}
        color="red"
        lineWidth={4}
        depthTest={false}
      />

      <Line
        points={[
          [1.2, -1.0, 0.15],
          [1.2, 1.0, 0.15],
        ]}
        color="red"
        lineWidth={4}
        depthTest={false}
      />
    </>
  );
}