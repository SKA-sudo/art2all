import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

/* -------------------- TAUBE -------------------- */
function DoveModel({ energyRef }) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/peace_dove.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    const action = Object.values(actions)[0];
    if (action) action.reset().play();
  }, [actions]);

  useFrame(() => {
    if (!actions) return;

    const action = Object.values(actions)[0];
    if (!action) return;

    // Rohenergie aus Animation
    const rawEnergy = Math.sin(action.time * 6) * 0.5 + 0.5;

    // geglättete Energie (wichtig für Sleep Mode!)
    energyRef.current =
    energyRef.current * 0.6 + rawEnergy * 0.4;

    const energy = energyRef.current;

    const isSleeping = energy < 0.25;

    // Zielwerte abhängig vom Zustand
    const targetY = isSleeping ? 6 : 6 + energy * 1.5;
    const targetScale = isSleeping ? 20 : 20 + energy * 1.2;

    // unterschiedliche Smoothness
    const smooth = isSleeping ? 0.06 : 0.12;

    if (group.current) {
      group.current.position.y +=
        (targetY - group.current.position.y) * smooth;

      group.current.scale.setScalar(
        group.current.scale.x +
          (targetScale - group.current.scale.x) * smooth
      );
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

/* -------------------- PARTIKEL -------------------- */
function Particle({ position, target, energyRef }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;

    const p = ref.current.position;
    const energy = energyRef.current || 0;

    const isSleeping = energy < 0.25;

    // weniger Energie im Sleep Mode
    const burst = isSleeping ? energy * 0.05 : energy * 0.18;

    // Ziel-Anziehung
    p.x += (target[0] - p.x) * 0.01;
    p.y += (target[1] - p.y) * 0.01;
    p.z += (target[2] - p.z) * 0.01;

    // Energiebewegung
    p.x += Math.sin(t * 5 + p.y) * burst * 1.2;
    p.y += Math.cos(t * 5 + p.x) * burst;
    p.z += Math.sin(t * 5 + p.z) * burst;

    // Grundbewegung (auch im Sleep minimal aktiv)
    const pulse = isSleeping ? 0.01 : 0.03;

    p.x += Math.sin(t * 2 + p.x) * pulse;
    p.y += Math.cos(t * 1.5 + p.y) * pulse;
    p.z += Math.sin(t * 1.8 + p.z) * pulse;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

/* -------------------- SCENE -------------------- */
function Scene() {
  const count = 100;
  const energyRef = useRef(0);

  useFrame(({ scene, clock }) => {
    const t = clock.getElapsedTime();
    const energy = energyRef.current || 0;

    const isSleeping = energy < 0.25;

    const intensity = isSleeping ? 0.05 : energy;

    const r = 0.15 + Math.sin(t * 0.2) * 0.2 + intensity * 0.25;
    const g = 0.5 + Math.sin(t * 0.15) * 0.2 + intensity * 0.15;
    const b = 0.9 + Math.sin(t * 0.1) * 0.1;

    if (!scene.background) {
      scene.background = new THREE.Color();
    }

    scene.background.setRGB(r, g, b);
  });

  const positions = Array.from({ length: count }, () => [
    (Math.random() - 0.5) * 45,
    Math.random() * 30,
    (Math.random() - 0.5) * 45,
  ]);

  const targets = Array.from({ length: count }, (_, i) => {
    const t = i / count;
    const wing = Math.sin(t * Math.PI);

    return [
      (Math.random() - 0.5) * 10 + wing * 8 * (i % 2 ? 1 : -1),
      Math.random() * 40,
      (Math.random() - 0.5) * 6,
    ];
  });

  return (
    <>
      {/* LIGHT */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 3]} intensity={1} />

      {/* FLOOR */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#faf0f0" />
      </mesh>

      {/* DOVE */}
      <DoveModel energyRef={energyRef} />

      {/* PARTICLES */}
      {positions.map((p, i) => (
        <Particle
          key={i}
          position={p}
          target={targets[i]}
          energyRef={energyRef}
        />
      ))}
    </>
  );
}

/* -------------------- APP -------------------- */
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 15, 70] }}>
        <Scene />
      </Canvas>
    </div>
  );
}