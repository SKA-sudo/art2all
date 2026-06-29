import * as THREE from "three";

/**
 * GestureBuilder
 *
 * Aufgabe:
 * Aus dem GLB die Primary Gesture extrahieren.
 *
 * Noch KEINE Flügel.
 * Noch KEINE Anker.
 * Noch KEINE Beziehungsregeln.
 */

export function buildGesture(scene, sampleCount = 5) {
  const vertices = collectVertices(scene);

  if (vertices.length === 0) {
    return [];
  }

  // -------------------------------------------------
  // 1. Bounding Box
  // -------------------------------------------------

  const box = new THREE.Box3().setFromPoints(vertices);

  const center = box.getCenter(new THREE.Vector3());

  // -------------------------------------------------
  // 2. Hauptrichtung (vorerst X-Achse der Bounding Box)
  // PCA kommt im nächsten Schritt.
  // -------------------------------------------------

  const minX = box.min.x;
  const maxX = box.max.x;

  const points = [];

  for (let i = 0; i < sampleCount; i++) {
    const t = i / (sampleCount - 1);

    const x = THREE.MathUtils.lerp(minX, maxX, t);

    let best = vertices[0];
    let bestDist = Infinity;

    for (const v of vertices) {
      const d =
        Math.abs(v.x - x) +
        Math.abs(v.y - center.y);

      if (d < bestDist) {
        bestDist = d;
        best = v;
      }
    }

    points.push(best.clone());
  }

  return points;
}

function collectVertices(scene) {
  const result = [];

  scene.updateWorldMatrix(true, true);

  const v = new THREE.Vector3();

  scene.traverse((child) => {
    if (!child.isMesh) return;

    const pos = child.geometry.attributes.position;

    if (!pos) return;

    child.updateWorldMatrix(true, false);

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      child.localToWorld(v);

      result.push(v.clone());
    }
  });

  return result;
}