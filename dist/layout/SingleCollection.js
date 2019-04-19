"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleCollection = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../helpers/exports");

var _ScrollAnimation = require("./ScrollAnimation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SingleCollectionContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SingleCollection__SingleCollectionContainer",
  componentId: "sc-1n69vuw-0"
})(["", ";overflow-x:auto;height:100%;"], (0, _exports.flexFlow)());

class SingleCollection extends _react.Component {
  constructor(...args) {
    super(...args);
    this.singleCollectionContainer = (0, _react.createRef)();
    this.pageHeaderShadow = (0, _react.createRef)();
  }

  render() {
    const {
      header,
      content
    } = this.props;
    return _react.default.createElement(_ScrollAnimation.ScrollAnimation, {
      animationFunction: calculateOpacity,
      animatingElement: this.pageHeaderShadow,
      scrollContainer: this.singleCollectionContainer,
      animationTermination: 64
    }, header({
      shadowRef: this.pageHeaderShadow,
      willAnimateShadow: true
    }), _react.default.createElement(SingleCollectionContainer, {
      ref: this.singleCollectionContainer
    }, content));
  }

}

exports.SingleCollection = SingleCollection;

const calculateOpacity = ({
  scrollAmount,
  animationTermination
}) => {
  if (scrollAmount === 0) {
    return 'opacity: 0;';
  }

  if (scrollAmount > animationTermination) {
    return 'opacity: 0.9999;';
  }

  return `opacity: ${Math.min(0.9999 / animationTermination * scrollAmount, 0.9999)};`;
};