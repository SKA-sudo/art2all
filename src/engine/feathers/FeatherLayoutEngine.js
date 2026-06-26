import FeatherRow from "./FeatherRow";

export default class FeatherLayoutEngine {

  constructor(region) {
    this.region = region;
  }

  buildRows() {

    const rows = [];

    rows.push(new FeatherRow());

    return rows;

  }

}