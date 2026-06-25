/*nur die Interessanten Flächen behalten, die größer als ein bestimmter Schwellenwert sind (z.B. 0.00012)*/

export function filterFaces(faces, minArea = 0.00012) {
  const filtered = faces.filter(face => face.area >= minArea);

  console.log("Faces nach Filter:", filtered.length);

  return filtered;
}