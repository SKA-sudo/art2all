// src/core/EquilibriumEngine.js

const DEFAULT_CONFIG = {
  cohesion: 0.018,
  separation: 0.06,
  alignment: 0.025,
  damping: 0.82,
  neighborRadius: 1.4,
  minDistance: 0.45,
};

/**
 * PoC 09.1 – Equilibrium Engine
 *
 * Keine Taubenform.
 * Keine Flügel.
 * Keine Feather Bands.
 *
 * Nur lokale Beziehungen zwischen Paper-Flächen.
 */
export function stepEquilibrium(papers, config = {}) {
  const cfg = { ...DEFAULT_CONFIG, ...config };

  return papers.map((paper, index) => {
    let vx = paper.vx ?? 0;
    let vy = paper.vy ?? 0;
    let rotationVelocity = paper.rotationVelocity ?? 0;

    let centerX = 0;
    let centerY = 0;
    let averageRotation = 0;
    let neighborCount = 0;

    for (let i = 0; i < papers.length; i++) {
      if (i === index) continue;

      const other = papers[i];

      const dx = other.x - paper.x;
      const dy = other.y - paper.y;
      const distance = Math.sqrt(dx * dx + dy * dy) || 0.0001;

      if (distance < cfg.neighborRadius) {
        centerX += other.x;
        centerY += other.y;
        averageRotation += other.rotation;
        neighborCount++;

        if (distance < cfg.minDistance) {
          const force = (cfg.minDistance - distance) * cfg.separation;

          vx -= (dx / distance) * force;
          vy -= (dy / distance) * force;
        }
      }
    }

    if (neighborCount > 0) {
      centerX /= neighborCount;
      centerY /= neighborCount;
      averageRotation /= neighborCount;

      vx += (centerX - paper.x) * cfg.cohesion;
      vy += (centerY - paper.y) * cfg.cohesion;

      rotationVelocity +=
        normalizeAngle(averageRotation - paper.rotation) * cfg.alignment;
    }

    vx *= cfg.damping;
    vy *= cfg.damping;
    rotationVelocity *= cfg.damping;

    return {
      ...paper,
      x: paper.x + vx,
      y: paper.y + vy,
      vx,
      vy,
      rotation: paper.rotation + rotationVelocity,
      rotationVelocity,
    };
  });
}

function normalizeAngle(angle) {
  let a = angle;

  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;

  return a;
}