import * as THREE from "three";

export function createRoundedPlane(width = 1, height = 1, radius = 0.06, segments = 8) {
  const shape = new THREE.Shape();

  const w = width / 2;
  const h = height / 2;
  const r = Math.min(radius, w, h);

  shape.moveTo(-w + r, -h);

  shape.lineTo(w - r, -h);
  shape.absarc(w - r, -h + r, r, -Math.PI / 2, 0);

  shape.lineTo(w, h - r);
  shape.absarc(w - r, h - r, r, 0, Math.PI / 2);

  shape.lineTo(-w + r, h);
  shape.absarc(-w + r, h - r, r, Math.PI / 2, Math.PI);

  shape.lineTo(-w, -h + r);
  shape.absarc(-w + r, -h + r, r, Math.PI, Math.PI * 1.5);

  const geometry = new THREE.ShapeGeometry(shape, segments);

  geometry.computeBoundingBox();

  const { min, max } = geometry.boundingBox;
  const size = new THREE.Vector2(max.x - min.x, max.y - min.y);

  const uv = [];

  for (let i = 0; i < geometry.attributes.position.count; i++) {
    const x = geometry.attributes.position.getX(i);
    const y = geometry.attributes.position.getY(i);

    uv.push(
      (x - min.x) / size.x,
      (y - min.y) / size.y
    );
  }

  geometry.setAttribute(
    "uv",
    new THREE.Float32BufferAttribute(uv, 2)
  );
const pos = geometry.attributes.position;

for (let i = 0; i < pos.count; i++) {

  const y = pos.getY(i);

  const bend =
    Math.cos((y / (height / 2)) * Math.PI * 0.5) * 0.015;

  pos.setZ(i, bend);
}

pos.needsUpdate = true;
geometry.computeVertexNormals();
  return geometry;
}