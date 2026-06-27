import { getFlowZone } from "./FlowZoneEngine";
import { buildLeftWingContour } from "./WingContourBuilder";

export function createPlacementData(faces, drawings, bounds) {
  if (!faces.length || !drawings.length) return [];

  const placements = [];
  const wingFaces = faces.filter((face) => {
  const flowData = getFlowZone(face, bounds);
    return (
    flowData.zone === "leftWingShoulder" ||
    flowData.zone === "leftWingOuter"
  );
});
  wingFaces.sort((a, b) => a.center.x - b.center.x);
  const contour = buildLeftWingContour(wingFaces, bounds);

  console.log("Wing contour:", {
    top: contour.top.length,
    bottom: contour.bottom.length,
  });
  const selectedFaces = wingFaces.filter((_, index) => index % 2 === 0);
  const count = Math.min(selectedFaces.length, 50);

  for (let i = 0; i < count; i++) {
    const face = selectedFaces[i];
    const flowData = getFlowZone(face, bounds);

    const t = i / Math.max(count - 1, 1);

    let baseScale = 0.22;

    if (flowData.zone === "leftWingShoulder") {
      baseScale = 0.18 + t * 0.08;
    }

    if (flowData.zone === "leftWingOuter") {
      baseScale = 0.30 - t * 0.10;
    }

    const scale = baseScale * (0.9 + Math.random() * 0.15);

    placements.push({
    zone: flowData.zone,
    flow: flowData.flow,

    position: face.center.clone(),
    normal: face.normal.clone(),

    a: face.a.clone(),
    b: face.b.clone(),
    c: face.c.clone(),

    area: face.area,
    image: drawings[i % drawings.length],

    scale,
    rotation: (Math.random() - 0.5) * 12,
});
   
}
  
  const stats = {};

placements.forEach((p) => {
  stats[p.zone] = (stats[p.zone] || 0) + 1;
});

console.table(stats);

console.log("🪶 Placements:", placements.length);

return placements;
}