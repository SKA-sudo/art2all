import { useRef } from "react";
import DoveModel from "./DoveModel";

/* -------------------- SCENE -------------------- */
export default function Scene() {
  const flapRef = useRef(0);

  return (
    <>
      <color attach="background" args={["#202020"]} />

      <ambientLight intensity={0.8} />
      <directionalLight position={[8, 12, 8]} intensity={1.5} />

      <DoveModel flapRef={flapRef} />
    </>
  );
}