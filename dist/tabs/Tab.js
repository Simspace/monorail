"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactRouter = require("react-router");

var _CommonStyles = require("../CommonStyles");

var _typeGuards = require("../sharedHelpers/typeGuards");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const CCTab =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Tab__CCTab",
  componentId: "vx48hj-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;color:", ";cursor:pointer;min-height:24px;padding:0 8px;text-transform:uppercase;user-select:none;&:hover,&:focus{text-decoration:none;}&:hover{background:", ";}&:active{background:", ";}", ";", ";"], (0, _CommonStyles.flexFlow)('row'), (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.08), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.16), (0, _CommonStyles.baseFocusStyles)(), cssOverrides));

class Tab extends _react.Component {
  constructor(...args) {
    super(...args);
    this.tabRef = (0, _react.createRef)();

    this.callSetIndicator = () => {
      const {
        isActive,
        setIndicator,
        as
      } = this.props;

      if (isActive && !(0, _typeGuards.isNil)(this.tabRef.current)) {
        if ((0, _typeGuards.isNil)(as)) {
          setIndicator(this.tabRef.current.offsetWidth, this.tabRef.current.offsetLeft);
        } else if (as === _reactRouter.Link) {
          const tabLinkRef = (0, _reactDom.findDOMNode)(this.tabRef.current);
          setIndicator(tabLinkRef.offsetWidth, tabLinkRef.offsetLeft);
        }
      }
    };

    this.onClick = event => {
      const {
        updateIsActive,
        onClick,
        index
      } = this.props;

      if (!(0, _typeGuards.isNil)(updateIsActive) && !(0, _typeGuards.isNil)(index)) {
        updateIsActive(index);
      }

      if (!(0, _typeGuards.isNil)(onClick)) {
        onClick(event);
      }
    };
  }

  componentDidMount() {
    this.callSetIndicator();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive !== this.props.isActive) {
      this.callSetIndicator();
    }
  }

  render() {
    const {
      isActive,
      children,
      cssOverrides,
      as,
      to
    } = this.props;
    return _react.default.createElement(CCTab, {
      onClick: this.onClick,
      ref: this.tabRef,
      isActive: isActive,
      cssOverrides: cssOverrides,
      as: as,
      to: to
    }, children);
  }

}

exports.Tab = Tab;
Tab.defaultProps = {
  isActive: false,
  setIndicator: () => {},
  updateIsActive: () => {}
};