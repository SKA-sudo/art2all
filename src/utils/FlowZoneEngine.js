export function getFlowZone(face, bounds) {

  const { min, max } = bounds;

  const width = max.x - min.x;
  const height = max.y - min.y;

  const x = face.center.x;
  const y = face.center.y;

  // Relative Position (0..1)
  const nx = (x - min.x) / width;
  const ny = (y - min.y) / height;

  // ---------- Flügel ----------
  if (nx < 0.22) return "leftWing";
  if (nx > 0.78) return "rightWing";

  // ---------- Kopf ----------
  if (ny > 0.88 && nx > 0.40 && nx < 0.60) {
    return "head";
  }

  // ---------- Schwanz ----------
  if (ny < 0.10 && nx > 0.35 && nx < 0.65) {
    return "tail";
  }

  // ---------- Körper ----------
  return "body";
}