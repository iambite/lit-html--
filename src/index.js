import { LitElement, html } from '@polymer/lit-element';
import './hello-lit.js';
import { SharedStyles } from './SharedStyles.js';

class MyApp extends LitElement {
  static get properties() {
    return {
      author: { type: Object },
      items: { type: Array },
    };
  }  
  render(){
    const name = 'LitElement';
    
    return html`
      ${SharedStyles}
      <hello-lit .name=${name}></hello-lit>
      <p>
        Start editing to see some magic happen :)
      </p>
    `;
  }
}

customElements.define('my-app', MyApp);