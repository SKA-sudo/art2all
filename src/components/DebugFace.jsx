import DebugPoints from "./debug/DebugPoints";
import DebugNormals from "./debug/DebugNormals";
import DebugFaces from "./debug/DebugFaces";
import DebugPlacement from "./debug/DebugPlacement";

export default function DebugFace({
  position,
  normal,
  area,
  a,
  b,
  c,
}) {
  if (!a || !b || !c) return null;

  return (
  <>
  <DebugFaces
    a={a}
    b={b}
    c={c}
  />

  <DebugPoints
    a={a}
    b={b}
    c={c}
  />

  <DebugNormals
    position={position}
    normal={normal}
    
  />
  <DebugPlacement position={position} />
</>
);
}