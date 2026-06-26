export function createPlacementData(faces, drawings) {
  if (!faces.length || !drawings.length) return [];

  const placements = [];

  const count = Math.min(faces.length, 300);

  for (let i = 0; i < count; i++) {
    const face = faces[i];

    const baseScale = 0.25;
    const scale = baseScale * (0.85 + Math.random() * 0.3);

    placements.push({
      position: face.center.clone(),
      normal: face.normal.clone(),

      a: face.a.clone(),
      b: face.b.clone(),
      c: face.c.clone(),

      area: face.area,
      image: drawings[i % drawings.length],

      scale,
      rotation: 0,
    });
  }

  console.log("🪶 Placements:", placements.length);
console.log("Placements:", placements);
  return placements;
}