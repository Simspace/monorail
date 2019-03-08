import { Component } from 'react'
import ReactDOM from 'react-dom'
import { isNil } from '@monorail/CoreUtils/primitive-guards'

/**
 * Creates a modal-root at body level if it doesn't exist already
 */
if (isNil(document.getElementById('modal-root'))) {
  const newModalRoot = document.createElement('div')
  newModalRoot.setAttribute('id', 'modal-root')

  document.body.appendChild(newModalRoot)
}

export class Portal extends Component<{ document?: Document }> {
  modalRoot = !isNil(this.props.document)
    ? this.props.document.getElementById('modal-root')
    : document.getElementById('modal-root')

  portalElement = !isNil(this.props.document)
    ? this.props.document.createElement('span')
    : document.createElement('div')

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.

    if (!isNil(this.modalRoot)) {
      this.modalRoot.appendChild(this.portalElement)
    }
  }

  componentWillUnmount() {
    if (!isNil(this.modalRoot)) {
      this.modalRoot.removeChild(this.portalElement)
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.portalElement)
  }
}
