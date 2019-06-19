class Bravo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = `
    <style>
    div {
      background-color: #72b3cc;
      padding: 16px;
      margin: 32px;
    }
    </style>
    <div>i'm a web component</div>
    `
  }
}
customElements.define('bravo-element', Bravo)

declare namespace JSX {
  interface IntrinsicElements {
    'bravo-element': any
  }
}
