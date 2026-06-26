export default class Feather {
  constructor({
    position,
    normal,
    rotation = 0,
    scale = 1,
    drawing = null,
  }) {
    this.position = position;
    this.normal = normal;
    this.rotation = rotation;
    this.scale = scale;
    this.drawing = drawing;
  }
}