// src/core/DoveShapeField.js

/**
 * PoC 09.1
 * Dove Shape Field
 *
 * Diese Datei beschreibt keine Anatomie.
 * Sie beschreibt ein weiches Wahrnehmungsfeld:
 * Wo fühlt sich eine Papierfläche innerhalb der Friedenstaube stabil an?
 */

export function createDoveShapeField() {
  return function doveShapeField(paper) {
    const { x, y } = paper;

    const body = nearestEllipsePoint(x, y, 0, 0, 1.55, 0.85);
    const head = nearestEllipsePoint(x, y, 1.45, 0.45, 0.55, 0.45);
    const leftWing = nearestEllipsePoint(x, y, -1.0, 0.55, 2.2, 0.65, -0.35);
    const rightWing = nearestEllipsePoint(x, y, 0.15, 0.75, 2.7, 0.75, 0.28);
    const tail = nearestEllipsePoint(x, y, -1.25, -0.55, 0.9, 0.45, -0.25);

    const candidates = [body, head, leftWing, rightWing, tail];
    const nearest = candidates.reduce((best, current) =>
      current.distance < best.distance ? current : best
    );

    return {
      x: nearest.x,
      y: nearest.y,
      outside: nearest.distance > 0.18,
      zone: nearest.zone,
    };
  };
}

function nearestEllipsePoint(x, y, cx, cy, rx, ry, rotation = 0) {
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);

  const px = x - cx;
  const py = y - cy;

  const lx = px * cos + py * sin;
  const ly = -px * sin + py * cos;

  const angle = Math.atan2(ly / ry, lx / rx);

  const ex = Math.cos(angle) * rx;
  const ey = Math.sin(angle) * ry;

  const wx = ex * cos - ey * sin + cx;
  const wy = ex * sin + ey * cos + cy;

  const dx = wx - x;
  const dy = wy - y;

  return {
    x: wx,
    y: wy,
    distance: Math.sqrt(dx * dx + dy * dy),
  };
}
