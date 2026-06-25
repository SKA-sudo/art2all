import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import DoveSurface from "./DoveSurface";
import { inspectGeometry } from "../utils/GeometryInspector";
import { extractFaces } from "../utils/FaceExtractor";
import { filterFaces } from "../utils/FaceFilter";




/* -------------------- TAUBE -------------------- */
export default function DoveModel({ flapRef }) {

  const group = useRef();
  const { scene, animations } = useGLTF("/models/peace_dove.glb");
  const mesh = useMemo(() => {
  let found = null;

  scene.traverse((child) => {
    if (
      child.isMesh &&
      child.geometry &&
      child.geometry.attributes.position
    ) {
      console.log(
        child.name,
        child.geometry.attributes.position.count
      );

      if (!found) {
        found = child;
      }
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

  inspectGeometry(mesh);

const faces = extractFaces(mesh);
const filteredFaces = filterFaces(faces);

console.log("Faces:", faces.length);
console.log("Gefiltert:", filteredFaces.length);
console.log(filteredFaces[0]);
}, [scene, mesh]);


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


