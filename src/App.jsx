import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Image } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useTexture } from "@react-three/drei";
import { Points, PointMaterial } from "@react-three/drei";



/* -------------------- LIGHT RAYS -------------------- */
function LightRays() {
  const ref = useRef();
  const texture = useTexture("/textures/godrays.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;

    ref.current.rotation.z = Math.sin(t * 0.05) * 0.03;

    ref.current.material.opacity =
      0.25 + Math.sin(t * 0.6) * 0.08;
  });

  return (
    <mesh ref={ref} position={[0, 15, -30]}>
      <planeGeometry args={[300, 300]} />
      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
        opacity={0.35}
      />
    </mesh>
  );
}
/* -------------------- GLOW PARTICLES -------------------- */
function GlowParticles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 40; i++) {
      arr.push(
        (Math.random() - 0.5) * 35, // x
        Math.random() * 18 - 2,     // y
        (Math.random() - 0.5) * 20  // z
      );
    }

    return new Float32Array(arr);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!ref.current) return;

    ref.current.rotation.y = t * 0.02;
    ref.current.position.y = Math.sin(t * 0.3) * 0.2;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#fff8d6"
        size={0.25}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}



/* -------------------- DOVE SHAPE -------------------- */
function useDoveShape(items) {
  return useMemo(() => {
    const pts = [];

    const core = items.filter(i => i.zone === "core");
    const left = items.filter(i => i.zone === "leftWing");
    const right = items.filter(i => i.zone === "rightWing");
    const tail = items.filter(i => i.zone === "tail");

    let ci = 0, li = 0, ri = 0, ti = 0;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      let x = 0, y = 0, z = 0;

      if (item.zone === "core") {
        const t = core.length ? ci++ / core.length : 0;
        x = Math.sin(t * Math.PI) * 0.25;
        y = t * 10;
        z = Math.cos(t * Math.PI * 0.4) * 1.2;
      } else if (item.zone === "leftWing") {
        const t = left.length ? li++ / left.length : 0;
        const c = Math.sin(t * Math.PI);
        x = -c * 20;
        y = 6 + c * 7;
        z = Math.sin(t * 1.5) * 2;
      } else if (item.zone === "rightWing") {
        const t = right.length ? ri++ / right.length : 0;
        const c = Math.sin(t * Math.PI);
        x = c * 20;
        y = 6 + c * 7;
        z = Math.sin(t * 1.5) * 2;
      } else {
        const t = tail.length ? ti++ / tail.length : 0;
        x = (Math.random() - 0.5) * 1.2;
        y = -t * 10;
        z = -t * 14;
      }

      pts.push({
        pos: [x, y, z],
        zone: item.zone,
        weight: item.weight ?? 0.6,
      });
    }

    return pts;
  }, [items]);
}

/* -------------------- DOVE -------------------- */
function DoveFromDrawings({ textures, energyRef }) {
  const refs = useRef([]);
  const shape = useDoveShape(textures);

  const zoneConfig = {
    core: { scale: 1.6, drift: 0.003 },
    leftWing: { scale: 1.25, drift: 0.008 },
    rightWing: { scale: 1.25, drift: 0.008 },
    tail: { scale: 0.9, drift: 0.002 },
  };

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const energy = energyRef.current || 0;

    refs.current.forEach((child, i) => {
      const target = shape[i];
      if (!child || !target) return;

      const p = child.position;
      const cfg = zoneConfig[target.zone] || zoneConfig.core;

      const speed = 0.06;

      p.x += (target.pos[0] - p.x) * speed;
      p.y += (target.pos[1] - p.y) * speed;
      p.z += (target.pos[2] - p.z) * speed;

      p.x += Math.sin(t * 0.5 + i) * cfg.drift;
      p.z += Math.cos(t * 0.4 + i) * cfg.drift;

      child.rotation.z = Math.sin(t * 0.5 + i) * 0.03;
      child.scale.setScalar(cfg.scale * (1 + energy * 0.15));
    });
  });

  return (
    <group>
      {textures.map((item, i) => (
        <Billboard key={i} ref={(el) => (refs.current[i] = el)}>
          <Image
            url={item.src}
            transparent
            toneMapped={false}
            scale={[
              2.2 * (item.zone === "tail" ? 0.9 : 1),
              2.2 * (item.zone === "tail" ? 0.9 : 1),
            ]}
          />
        </Billboard>
      ))}
    </group>
  );
}

/* -------------------- SKY -------------------- */
function Sky() {
  return (
    <mesh position={[0, 0, -80]}>
      <sphereGeometry args={[120, 32, 32]} />
      <shaderMaterial
        side={THREE.BackSide}
        uniforms={{
          top: { value: new THREE.Color("#081225") },
          bottom: { value: new THREE.Color("#2b3a67") },
        }}
        vertexShader={`
          varying vec3 vPos;
          void main() {
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 top;
          uniform vec3 bottom;
          varying vec3 vPos;

          void main() {
            float h = vPos.y * 0.01 + 0.5;
            gl_FragColor = vec4(mix(bottom, top, h), 1.0);
          }
        `}
      />
    </mesh>
  );
}

/* -------------------- CLOUDS -------------------- */
function Clouds() {
  const groupRef = useRef();
  const cloudTexture = useTexture("/textures/cloud.png");

  // 🌫️ 2 Layer statt 1
  const clouds = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 18; i++) {
      arr.push({
        id: "far_" + i,
        layer: "far",
        x: (Math.random() - 0.5) * 160,
        y: 15 + Math.random() * 25,
        z: -60 - Math.random() * 140,
        s: 18 + Math.random() * 28,
        o: 0.08 + Math.random() * 0.12,
        phase: Math.random() * Math.PI * 2,
      });
    }

    for (let i = 0; i < 22; i++) {
      arr.push({
        id: "near_" + i,
        layer: "near",
        x: (Math.random() - 0.5) * 140,
        y: 5 + Math.random() * 18,
        z: -20 - Math.random() * 100,
        s: 22 + Math.random() * 35,
        o: 0.12 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;

    groupRef.current.children.forEach((mesh, i) => {
      const c = clouds[i];
      if (!c) return;

      const wind = c.layer === "far" ? 0.6 : 1.0;

      mesh.position.x =
        c.x + Math.sin(t * 0.03 + c.phase) * 6 * wind;

      mesh.position.y =
        c.y + Math.sin(t * 0.02 + c.phase) * 2 * wind;

      mesh.position.z =
        c.z + Math.cos(t * 0.025 + c.phase) * 4 * wind;

      const pulse = Math.sin(t * 0.2 + c.phase) * 0.05;

      mesh.material.opacity = c.o + pulse;
    });
  });

  return (
    <group ref={groupRef}>
      {clouds.map((c) => (
        <mesh key={c.id} position={[c.x, c.y, c.z]}>
          <planeGeometry args={[c.s, c.s]} />
          <meshStandardMaterial
            map={cloudTexture}
            transparent
            depthWrite={false}
            opacity={c.o}
            roughness={1}
            metalness={0}
            emissive="#ffffff"
            emissiveIntensity={0.12}
            blending={THREE.NormalBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

/* -------------------- SCENE -------------------- */
function Scene() {
  const energyRef = useRef(0);

  const drawings = [
    { src: "/drawings/demo/baum.png", zone: "core" },
    { src: "/drawings/demo/blume.png", zone: "core" },
    { src: "/drawings/demo/familie.png", zone: "core" },
    { src: "/drawings/demo/haus.png", zone: "leftWing" },
    { src: "/drawings/demo/herz.png", zone: "leftWing" },
    { src: "/drawings/demo/regenbogen.png", zone: "rightWing" },
    { src: "/drawings/demo/sonne.png", zone: "rightWing" },
    { src: "/drawings/demo/welt.png", zone: "tail" },
    { src: "/drawings/demo/peace.png", zone: "tail" },
  ];

  return (
    <>
      <fog attach="fog" args={["#0b1220", 45, 140]} />

      <ambientLight intensity={0.25} />
      <directionalLight position={[8, 14, 6]} intensity={2.2} />

      <Sky />
      <Clouds />
        <LightRays position={[0, 12, -50]} />
        <GlowParticles />

      <DoveFromDrawings textures={drawings} energyRef={energyRef} />
    </>
  );
}

/* -------------------- APP -------------------- */
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 5, 40], fov: 55 }}>
        <Scene />
        <EffectComposer>
          <Bloom intensity={1.2} luminanceThreshold={0.15} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}