class Bravo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>i'm a web component</div>`
  }
}
customElements.define('bravo-element', Bravo)

declare namespace JSX {
  interface IntrinsicElements {
    'bravo-element': any
  }
}
