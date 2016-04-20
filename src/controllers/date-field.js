export default class SelectDateFieldController {
  setParent(parent) {
    this.parent = parent;

    this.setOptions();
  }

  setModel(model) {
    this.model = model;
  }
}
