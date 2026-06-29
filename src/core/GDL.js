// src/core/GDL.js

/**
 * GDL – Grundlinien / Grundraster
 *
 * Minimale globale Information:
 * Die Taube bleibt erkennbar, aber die Paper werden NICHT fest platziert.
 */

export function createGDL() {
  return {
    gesture: {
      start: { x: -2.8, y: -0.4 },
      center: { x: 0.0, y: 0.2 },
      end: { x: 3.1, y: 1.0 },
    },

    anchors: {
      body: { x: 0.0, y: 0.0, radius: 1.15 },
      head: { x: 1.35, y: 0.62, radius: 0.42 },
      leftWing: { x: -1.25, y: 0.58, radius: 1.55 },
      rightWing: { x: 0.95, y: 0.78, radius: 1.85 },
      tail: { x: -1.25, y: -0.72, radius: 0.65 },
    },

    density: {
      body: 1.0,
      head: 0.85,
      leftWing: 0.75,
      rightWing: 0.75,
      tail: 0.55,
    },
  };
}

export function getNearestGDLAnchor(point, gdl) {
  let nearest = null;

  for (const [zone, anchor] of Object.entries(gdl.anchors)) {
    const dx = anchor.x - point.x;
    const dy = anchor.y - point.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (!nearest || distance < nearest.distance) {
      nearest = {
        zone,
        anchor,
        distance,
      };
    }
  }

  return nearest;
}