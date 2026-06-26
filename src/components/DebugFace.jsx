import DebugPoints from "./debug/DebugPoints";
import DebugNormals from "./debug/DebugNormals";

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
    <DebugPoints
      a={a}
      b={b}
      c={c}
    />

    <DebugNormals
      position={position}
      normal={normal}
    />
  </>
);
}