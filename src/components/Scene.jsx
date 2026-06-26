import { useRef, useMemo } from "react";
import Sky from "./Sky";
import Clouds from "./Clouds";
import LightRays from "./LightRays";
import GlowParticles from "./GlowParticles";
import DoveModel from "./DoveModel";
import FeatherLab from "./lab/FeatherLab";
import FeatherPrototype from "./lab/FeatherPrototype";

/* -------------------- SCENE -------------------- */
export default function Scene() {
  const energyRef = useRef(0);
  const flapRef = useRef(0);


  const drawings = useMemo(() => {
  const base = [
  { src: "/drawings/demo/baum.png", zone: "body" },
  { src: "/drawings/demo/blume.png", zone: "body" },
  { src: "/drawings/demo/familie.png", zone: "body" },

  { src: "/drawings/demo/haus.png", zone: "leftWing" },
  { src: "/drawings/demo/herz.png", zone: "leftWing" },

  { src: "/drawings/demo/regenbogen.png", zone: "rightWing" },
  { src: "/drawings/demo/sonne.png", zone: "rightWing" },

  { src: "/drawings/demo/welt.png", zone: "tail" },

  { src: "/drawings/demo/peace.png", zone: "head" },
];

  const result = [];

for (let i = 0; i < 120; i++) {
  const img = base[Math.floor(Math.random() * base.length)];
  let zone;

  if (i < 10) zone = "head";
  else if (i < 45) zone = "body";
  else if (i < 80) zone = "leftWing";
  else if (i < 115) zone = "rightWing";
  else zone = "tail";

  result.push({
    src: img.src,
    zone,
    weight: 0.8 + Math.random() * 0.4,
  });
}

  return result;
}, []);

  return (
    <>
      <fog attach="fog" args={["#0b1220", 45, 140]} />

      <ambientLight intensity={0.25} />
      <directionalLight position={[8, 14, 6]} intensity={2.2} />

      <Sky />
      <Clouds />
        <LightRays position={[0, 12, -50]} />
        <GlowParticles />

      {/* Taube */}
      
      <DoveModel flapRef={flapRef} />
      {/* <SamplePoints /> */}

       <group position={[0, 1, 5]}>

<FeatherPrototype />

  
</group>

    </>
  );
}