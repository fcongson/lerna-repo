import * as React from 'react'
import * as ReactDOM from 'react-dom'

const CharlieReactComponent = () => <span>i'm a react component</span>

class CharlieWebComponent extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<div style={divStyle}><CharlieReactComponent /> wrapped in a web component</div>, this)
  }
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this)
  }
}
customElements.define('charlie-element', CharlieWebComponent)

const divStyle = {
  backgroundColor: '#d0b03c',
  padding: '16px',
  margin: '32px'
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'charlie-element': any
    }
  }
}
