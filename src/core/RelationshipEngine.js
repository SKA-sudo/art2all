// src/core/RelationshipEngine.js

const DEFAULT_CONFIG = {
  shapePull: 0.035,
  neighborBalance: 0.025,
  overlapAvoidance: 0.045,
  boundaryReturn: 0.06,
  minDistance: 0.55,
};

/**
 * PoC 09.1
 * Relationship Engine
 *
 * Ziel:
 * Papierflächen werden nicht entlang gebauter Linien platziert.
 * Sie organisieren sich über einfache Beziehungen.
 */
export function stepRelationshipEngine(papers, shapeFn, config = {}) {
  const cfg = { ...DEFAULT_CONFIG, ...config };

  return papers.map((paper, index) => {
    let dx = 0;
    let dy = 0;
    let rotationDelta = 0;

    const target = shapeFn(paper);

    // 1. ShapePull
    dx += (target.x - paper.x) * cfg.shapePull;
    dy += (target.y - paper.y) * cfg.shapePull;

    for (let i = 0; i < papers.length; i++) {
      if (i === index) continue;

      const other = papers[i];
      const vx = paper.x - other.x;
      const vy = paper.y - other.y;
      const dist = Math.sqrt(vx * vx + vy * vy) || 0.0001;

      // 2. OverlapAvoidance
      if (dist < cfg.minDistance) {
        const force = (cfg.minDistance - dist) * cfg.overlapAvoidance;
        dx += (vx / dist) * force;
        dy += (vy / dist) * force;
      }

      // 3. NeighborBalance
      if (dist < cfg.minDistance * 2.5) {
        const angleDiff = normalizeAngle(other.rotation - paper.rotation);
        rotationDelta += angleDiff * cfg.neighborBalance;
      }
    }

    // 4. BoundaryReturn
    if (target.outside) {
      dx += (target.x - paper.x) * cfg.boundaryReturn;
      dy += (target.y - paper.y) * cfg.boundaryReturn;
    }

    return {
      ...paper,
      x: paper.x + dx,
      y: paper.y + dy,
      rotation: paper.rotation + rotationDelta,
    };
  });
}

function normalizeAngle(angle) {
  let a = angle;

  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;

  return a;
}