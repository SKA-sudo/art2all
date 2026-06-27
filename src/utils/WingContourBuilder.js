export function buildLeftWingContour(faces, bounds) {
  const { min, max } = bounds;

  const height = max.y - min.y;

  const sorted = [...faces].sort((a, b) => a.center.x - b.center.x);

  const top = [];
  const bottom = [];

  sorted.forEach((face) => {
    const ny = (face.center.y - min.y) / height;

    if (ny > 0.55) {
      top.push({
        face,
        contourType: "top",
      });
    } else {
      bottom.push({
        face,
        contourType: "bottom",
      });
    }
  });

  return {
    top,
    bottom,
    all: [...top, ...bottom],
  };
}