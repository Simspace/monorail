"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portal = void 0;

var _react = require("react");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _primitiveGuards = require("../CoreUtils/primitive-guards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!(0, _primitiveGuards.isNil)(document.getElementById('modal-root'))) {
  const newModalRoot = document.createElement('div');
  newModalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(newModalRoot);
}

class Portal extends _react.Component {
  constructor(...args) {
    super(...args);
    this.modalRoot = !(0, _primitiveGuards.isNil)(this.props.document) ? this.props.document.getElementById('modal-root') : document.getElementById('modal-root');
    this.portalElement = !(0, _primitiveGuards.isNil)(this.props.document) ? this.props.document.createElement('span') : document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    if (!(0, _primitiveGuards.isNil)(this.modalRoot)) {
      this.modalRoot.appendChild(this.portalElement);
    }
  }

  componentWillUnmount() {
    if (!(0, _primitiveGuards.isNil)(this.modalRoot)) {
      this.modalRoot.removeChild(this.portalElement);
    }
  }

  render() {
    return _reactDom.default.createPortal(this.props.children, this.portalElement);
  }

}

exports.Portal = Portal;