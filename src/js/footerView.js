class FooterView {
  _parentElement = document.querySelector("footer");
  _markup = `
  <div class="text-center">
    <p class="text-muted m-3">
      © Angela Bellò <span>${new Date().getFullYear()}</span
      >
    </p>
  </div>
  
  `;
  init() {
    this._parentElement.innerHTML = this._markup;
  }
}

export default new FooterView();
