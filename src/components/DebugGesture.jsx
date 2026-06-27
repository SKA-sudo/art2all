import * as THREE from "three";
import { useMemo } from "react";
import DebugNormals from "./DebugNormals";


export default function DebugGesture({
  shoulder,
  wingTip,
  points,
  colors,
  leftTransitionRegion = [],
  rightTransitionRegion = [],
}) {
  const debugPoints = useMemo(() => {
    if (points?.length) return points;

    if (shoulder && wingTip) {
      return [shoulder.center, wingTip.center];
    }

    return null;
  }, [points, shoulder, wingTip]);

  const debugColors = useMemo(() => {
    if (colors?.length) return colors;
    return ["red", "blue"];
  }, [colors]);

  const geometry = useMemo(() => {
    if (!debugPoints) return null;
    return new THREE.BufferGeometry().setFromPoints(debugPoints);
  }, [debugPoints]);

  if (!geometry || !debugPoints) return null;

  return (
    <>
      {/* Primary Dove Axis Punkte */}
      {debugPoints.map((point, index) => (
        <mesh key={`axis-${index}`} position={point}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color={debugColors[index] ?? "white"} />
        </mesh>
      ))}

      {/* Verbindungslinie */}
      <line geometry={geometry}>
        <lineBasicMaterial color="yellow" />
      </line>

      {/* Linke Transition Region */}
      {leftTransitionRegion.map((face, index) => {
        const isShoulder =
          shoulder &&
          face.center.distanceTo(shoulder.center) < 0.0001;

        return (
          <group key={`left-transition-${index}`} position={face.center}>
            <mesh>
              <sphereGeometry args={[isShoulder ? 0.08 : 0.04, 10, 10]} />
              <meshBasicMaterial color={isShoulder ? "yellow" : "orange"} />
            </mesh>

            <line>
              <bufferGeometry
                attach="geometry"
                setFromPoints={[
                  new THREE.Vector3(0, 0, 0),
                  face.normal.clone().multiplyScalar(0.35),
                ]}
              />
              <lineBasicMaterial color="white" />
            </line>
          </group>
        );
      })}

        {/* Rechte Transition Region */}
        {rightTransitionRegion.map((face, index) => {
          const isShoulder =
            shoulder &&
            face.center.distanceTo(shoulder.center) < 0.0001;

          return (
            <group key={`right-transition-${index}`} position={face.center}>
          <mesh>
            <sphereGeometry args={[isShoulder ? 0.08 : 0.04, 10, 10]} />
            <meshBasicMaterial color={isShoulder ? "lime" : "cyan"} />
          </mesh>

          <line>
            <bufferGeometry
              attach="geometry"
              setFromPoints={[
                new THREE.Vector3(0, 0, 0),
                face.normal.clone().multiplyScalar(0.35),
              ]}
            />
            <lineBasicMaterial color="white" />
          </line>
        </group>
        
          );
          
        })}
      <DebugNormals faces={leftTransitionRegion} color="white" length={0.35} />
<DebugNormals faces={rightTransitionRegion} color="white" length={0.35} />
    </>
  );
}