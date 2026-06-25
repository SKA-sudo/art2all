export function createPlacementData(faces, drawings) {
  if (!faces.length || !drawings.length) return [];

  const placements = [];

  const count = Math.min(faces.length, 300);

  for (let i = 0; i < count; i++) {
    const face = faces[i];

    placements.push({
      position: face.center.clone(),
      normal: face.normal.clone(),
      area: face.area,
      image: drawings[i % drawings.length],

      // zunächst feste Werte
      scale: 0.25,
      rotation: 0,
    });
  }

  console.log("🪶 Placements:", placements.length);

  return placements;
}