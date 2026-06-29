export function buildGDL({
  primaryAxis,
  localWingSpace,
  primaryGestures = [],
  wingFingerCurves = [],
}) {
  if (!primaryAxis || !localWingSpace) return null;

  return {
    axis: buildAxis(primaryAxis),
    wingSpace: buildWingSpace(localWingSpace),
    gestures: buildGestures(primaryGestures),
    wingFingerCurves: buildCurves(wingFingerCurves),
  };
}

function buildAxis(primaryAxis) {
  return {
    points: [
      primaryAxis.leftWingTip?.center,
      primaryAxis.leftShoulder?.center,
      primaryAxis.bodyCenter?.center,
      primaryAxis.rightShoulder?.center,
      primaryAxis.rightWingTip?.center,
    ].filter(Boolean),
  };
}

function buildWingSpace(localWingSpace) {
  return {
    left: sampleWingSpace(localWingSpace.left ?? []),
    right: sampleWingSpace(localWingSpace.right ?? []),
  };
}

function sampleWingSpace(space) {
  const step = Math.max(1, Math.floor(space.length / 120));

  return space
    .filter((_, index) => index % step === 0)
    .map((item) => item.center);
}

function buildGestures(primaryGestures) {
  return primaryGestures.map((gesture) => ({
    side: gesture.side,
    points: gesture.points ?? [],
  }));
}

function buildCurves(wingFingerCurves) {
  return wingFingerCurves.map((curve) => ({
    side: curve.side,
    index: curve.index,
    points: curve.points ?? [],
  }));
}