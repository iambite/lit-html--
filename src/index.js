import { LitElement, html } from '@polymer/lit-element';
import './hello-lit.js';
import { SharedStyles } from './SharedStyles.js';

class MyApp extends LitElement {

  constructor() {
    super();
    this.author = { name: 'Gooloan', logo: 'https://storage.googleapis.com/gooloan-images/gooloan-1.jpg' };
    this.items = [
      { title: 'loan', image: 'https://storage.googleapis.com/gooloan-images/gooloan-2.jpg', description: '的搜索結果集中找到該頁面，則社交個人資料標記應該創建一個或多個麵包屑路徑，而不會有' },
      { title: 'loan', image: 'https://storage.googleapis.com/gooloan-images/gooloan-4.jpg', description: '的搜索結果集中找到該頁面，則社交個人資料標記應該創建一個或多個麵包屑路徑，而不會有' },
    ];
  }

    render() {
      return html`
      <hello-lit
        .author=${this.author}
        .items=${this.items}>
      </hello-lit>
    `;
    }
}

customElements.define('my-app', MyApp);