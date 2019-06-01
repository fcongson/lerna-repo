import * as React from 'react'
import * as ReactDOM from 'react-dom'

const CharlieReactComponent = () => <span>i'm a react component</span>

class CharlieWebComponent extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<div><CharlieReactComponent /> wrapped in a web component</div>, this)
  }
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this)
  }
}
customElements.define('charlie-element', CharlieWebComponent)

declare namespace JSX {
  interface IntrinsicElements {
    'charlie-element': any
  }
}
