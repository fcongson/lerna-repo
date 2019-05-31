class Bravo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div>bravo element</div>'
  }
}
customElements.define('bravo-element', Bravo)

declare namespace JSX {
  interface IntrinsicElements {
    'bravo-element': any
  }
}
