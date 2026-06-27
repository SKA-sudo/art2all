export function getFlowZone(face, bounds) {

  const { min, max } = bounds;

  const width = max.x - min.x;
  const height = max.y - min.y;

  const x = face.center.x;
  const y = face.center.y;

  const nx = (x - min.x) / width;
  const ny = (y - min.y) / height;

  if (nx < 0.22) {
    if (ny > 0.55) {
      return {
        zone: "leftWingShoulder",
        flow: -25,
      };
    }

    return {
      zone: "leftWingOuter",
      flow: -40,
    };
  }

  if (nx > 0.78) {
    return {
      zone: "rightWing",
      flow: 35,
    };
  }

  if (ny > 0.88 && nx > 0.40 && nx < 0.60) {
    return {
      zone: "head",
      flow: 0,
    };
  }

  if (ny < 0.10 && nx > 0.35 && nx < 0.65) {
    return {
      zone: "tail",
      flow: 180,
    };
  }

  return {
    zone: "body",
    flow: 0,
  };
}