// /scene/Scene.jsx
import { useRef } from "react";
import { useSkySystem } from "../systems/useSkySystem";
import Dove from "../dove/Dove";
import ParticleSystem from "../particles/ParticleSystem";
console.log("SCENE RENDER");
export default function Scene() {
  const flapRef = useRef(0);

  useSkySystem();

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 3]} intensity={1.5} />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>


      <Dove flapRef={flapRef} />
      <ParticleSystem flapRef={flapRef} />
    </>
  );
}