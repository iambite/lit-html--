import { LitElement, html } from '@polymer/lit-element';
class HelloLit extends LitElement {
  static get properties() {
    return {
      author: { type: Object },
      items: { type: Array },
    };
  }

  render() {
    return html`
      <img src="${this.author.logo}" alt="${this.author.name}">   
      <p>${this.author.name}</p>
      <div>${this.items.map(item => html`
        <li>
          <img src="${item.image}" alt="${item.title}">
          <p>${item.description}</p>
        </li>`)}
    `;
  }
}

customElements.define('hello-lit', HelloLit);