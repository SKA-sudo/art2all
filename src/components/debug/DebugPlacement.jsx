export default function DebugPlacement({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
}