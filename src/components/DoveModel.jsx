import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Dove() {
  const group = useRef();
  const { scene } = useGLTF("/models/peace_dove.glb");

  useFrame(({ clock }) => {
  const t = clock.getElapsedTime();

  const flap = Math.sin(t * 4) * 0.2;

  group.current.rotation.y = t * 0.2; // ruhige Drehung
  group.current.rotation.x = flap;    // leichte Atmung
});

  return (
    <group ref={group} scale={20} position={[0, 6, 0]}>
      <primitive object={scene} />
    </group>
  );
}