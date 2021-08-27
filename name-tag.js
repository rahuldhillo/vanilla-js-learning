class UserCard extends HTMLElement {
  constructor() {
    super().innerHTML = `<h3>${this.getAttribute("name")}</h3>`;
  }
}

customElements.define("name-tag", UserCard);
