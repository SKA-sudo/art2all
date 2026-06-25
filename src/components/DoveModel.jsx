import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import DoveSurface from "./DoveSurface";

/* -------------------- TAUBE -------------------- */
export default function DoveModel({ flapRef }) {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/peace_dove.glb");
  const mesh = useMemo(() => {
    let found = null;

    scene.traverse((child) => {
      if (child.isMesh && !found) {
        found = child;
      }
    });

    return found;
  }, [scene]);

  const { actions } = useAnimations(animations, group);


useEffect(() => {
  scene.traverse((child) => {
    if (child.isMesh) {
      console.log("Mesh gefunden:", child.name);
      console.log("Vertices:", child.geometry.attributes.position.count);
    }
  });
}, [scene]);


  useEffect(() => {
    const action = Object.values(actions || {})[0];
    if (action) action.reset().play();
  }, [actions]);

  useFrame(() => {
    const action = Object.values(actions || {})[0];
    if (!action) return;

    flapRef.current =
      Math.sin(action.time * 6) * 0.5 + 0.5;
  });

  return (
  <group ref={group} scale={20} position={[0, 6, 0]}>
    <primitive object={scene} />
    <DoveSurface mesh={mesh} />
  </group>
);
}


