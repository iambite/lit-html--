import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './SharedStyles.js';

class HelloLit extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    }
  }

  constructor() {
    super();
    this.name = '';
  }

  render() {
    return html`
      ${SharedStyles}
      <h1>Hello ${this.name}!</h1>
    `;
  }
}

customElements.define('hello-lit', HelloLit);