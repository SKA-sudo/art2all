import { Sphere } from "@react-three/drei";

export default function DebugPoints({ a, b, c }) {
  return (
    <>
      <Sphere args={[0.02, 8, 8]} position={a}>
        <meshBasicMaterial color="red" />
      </Sphere>

      <Sphere args={[0.02, 8, 8]} position={b}>
        <meshBasicMaterial color="green" />
      </Sphere>

      <Sphere args={[0.02, 8, 8]} position={c}>
        <meshBasicMaterial color="blue" />
      </Sphere>
    </>
  );
}