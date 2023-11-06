export default class View {
  _parentElement = document.getElementById("root");
  target;
  addHandlerClick() {
    this._parentElement.addEventListener();
  }

  init() {
    this._parentElement.innerHTML = this._markup;
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
