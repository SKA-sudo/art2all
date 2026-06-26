import Feather from "./Feather";

export default class FeatherRow {

  constructor() {
    this.feathers = [];
  }

  add(feather) {
    this.feathers.push(feather);
  }

  createDemoFeather() {

    this.add(
      new Feather({
        position: null,
        normal: null,
        rotation: 0,
        scale: 1,
        drawing: "/drawings/demo/Herz.png",
      })
    );

  }

}