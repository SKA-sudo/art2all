import { useMemo } from "react";
import { Billboard, Image } from "@react-three/drei";
import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler";

const drawings = [
  "/drawings/demo/herz.png",
  "/drawings/demo/baum.png",
  "/drawings/demo/blume.png",
  "/drawings/demo/familie.png",
  "/drawings/demo/haus.png",
  "/drawings/demo/peace.png",
  "/drawings/demo/regenbogen.png",
  "/drawings/demo/sonne.png",
  "/drawings/demo/welt.png",
];

export default function DoveSurface({ mesh }) {
  
  const points = useMemo(() => {

    if (!mesh) return [];
    mesh.updateMatrixWorld(true);
    const sampler = new MeshSurfaceSampler(mesh).build();

  const pos = new THREE.Vector3();
  const result = [];

  for (let i = 0; i < 300; i++) {
    sampler.sample(pos);

    result.push({
      position: pos.clone(),
      image: drawings[i % drawings.length],
      scale: 0.30 + Math.random() * 0.08,
      rotation: (Math.random() - 0.5) * 0.15,
    });
  }

  return result;
}, [mesh]);
   return (
    <>
      {points.map((item, i) => (
        <Billboard
          key={i}
          position={item.position}
          rotation={[0, 0, item.rotation]}
        >
          <Image
            url={item.image}
            transparent
            toneMapped={false}
            scale={[item.scale, item.scale]}
          />
        </Billboard>
      ))}
    </>
  );
}