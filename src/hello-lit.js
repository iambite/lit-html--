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
    this.author = { name: 'Gooloan', logo: 'http://www.myfreephotoshop.com/wp-content/uploads/2013/08/669.jpg' };
    this.items = [
      { title: 'loan', image: 'http://www.myfreephotoshop.com/wp-content/uploads/2013/08/669.jpg', description: '的搜索結果集中找到該頁面，則社交個人資料標記應該創建一個或多個麵包屑路徑，而不會有' },
      { title: 'loan', image: 'http://www.myfreephotoshop.com/wp-content/uploads/2013/08/669.jpg', description: '的搜索結果集中找到該頁面，則社交個人資料標記應該創建一個或多個麵包屑路徑，而不會有'},
    ];
  }

  render() {
    return html`
      <author-profile
        .author=${this.author}
        .items=${this.items}>
      </author-profile>
    `;
  }
}

customElements.define('hello-lit', HelloLit);

class AuthorProfile extends LitElement {
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

customElements.define('author-profile', AuthorProfile);