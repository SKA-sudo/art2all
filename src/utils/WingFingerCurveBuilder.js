import * as THREE from "three";

export function buildWingFingerCurves({
  localWingSpace,
  shoulder,
  side = "left",
  count = 5,
}) {
  const wingItems = localWingSpace?.[side] ?? [];

  if (!wingItems.length || !shoulder?.center) return [];

  const root = shoulder.center.clone();

  const sorted = [...wingItems].sort((a, b) => {
    return a.center.y - b.center.y;
  });

  const step = Math.floor(sorted.length / count);

  return Array.from({ length: count }, (_, index) => {
    const targetItem = sorted[Math.min(index * step, sorted.length - 1)];
    const target = targetItem.center.clone();

    const mid = root.clone().lerp(target, 0.5);
    mid.z += 0.25;
    mid.y += (index - 2) * 0.08;

    const curve = new THREE.QuadraticBezierCurve3(root, mid, target);

    return {
      id: `wing-finger-${side}-${index}`,
      points: curve.getPoints(40),
      root,
      target,
    };
  });
}