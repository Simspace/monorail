"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _primitiveGuards = require("../CoreUtils/primitive-guards");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../icon/Icon");

var _CommonStyles = require("../CommonStyles");

var _PopOver = require("../popOver/PopOver");

var _Menu = require("../menu/Menu");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CCFilter = (0, _styledComponents.default)('div')`
  ${({
  isOpen,
  isActive
}) => isActive || isOpen ? (0, _CommonStyles.basePrimaryStyles)(_CommonStyles.Colors.BrandDarkBlue) : _styledComponents.css`
          ${(0, _CommonStyles.baseSecondaryStyles)(_CommonStyles.Colors.BrandDarkBlue, isOpen)};
          color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black74)};
        `};

  ${(0, _CommonStyles.borderRadius)()};
  ${_CommonStyles.buttonTransition};
  ${(0, _CommonStyles.flexFlow)('row')};

  align-items: center;
  cursor: pointer;
  height: 24px;
  padding: 0 4px 0 8px;
  user-select: none;
  flex-shrink: 0; /* Needs this for IE11 but not Chrome. */

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const FilterText = (0, _styledComponents.default)('span')`
  ${(0, _CommonStyles.flexFlow)('row')};
  ${(0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5)};

  color: currentColor;
  text-transform: uppercase;
  white-space: nowrap;
`;
const FilterIcon = (0, _styledComponents.default)(_Icon.Icon)`
  color: currentColor;
`;

class Filter extends _react.Component {
  render() {
    const {
      css: cssOverrides,
      title,
      content,
      isActive,
      ...otherProps
    } = this.props;
    return _react.default.createElement(_PopOver.PopOver, _extends({}, otherProps, {
      toggle: props => _react.default.createElement(CCFilter, _extends({}, props, {
        css: cssOverrides,
        isActive: isActive
      }), _react.default.createElement(FilterText, null, title), _react.default.createElement(FilterIcon, {
        icon: "arrow_drop_down"
      })),
      popOver: props => !(0, _primitiveGuards.isNil)(content) && _react.default.createElement(_Menu.Menu, props, content)
    }));
  }

}

exports.Filter = Filter;