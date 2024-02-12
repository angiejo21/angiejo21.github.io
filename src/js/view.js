export default class View {
  _parentElement = document.getElementById("root");
  addHandler() {}

  init() {
    this._parentElement.innerHTML = this._markup;
    this.addHandler();
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
