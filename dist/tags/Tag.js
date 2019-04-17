"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = exports.CCTag = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../icon/Icon");

var _exports = require("../helpers/exports");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const tagHeight = 24;
const circleWidth = tagHeight - 4;
const circleRadius = circleWidth / 2;
const iconSize = tagHeight / 2;

const CCTag =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Tag__CCTag",
  componentId: "rxfsom-0"
})(({
  label,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";display:inline-flex;align-items:center;background:", ";border-radius:", "px;height:", "px;position:relative;text-transform:uppercase;user-select:none;&::before{background:", ";border-radius:", "px;bottom:2px;content:'';left:2px;position:absolute;top:2px;width:", "px;}", ";"], (0, _typeGuards.isNil)(label) && (0, _styledComponents.css)(["width:", "px;"], tagHeight), (0, _exports.flexFlow)('row'), (0, _exports.getColor)(_exports.Colors.Black, 0.07), tagHeight / 2, tagHeight, (0, _exports.getColor)(_exports.Colors.White), circleRadius, circleWidth, cssOverrides));

exports.CCTag = CCTag;
const StyledIconLeft =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Tag__StyledIconLeft",
  componentId: "rxfsom-1"
})(["color:", ";margin:0 ", "px;position:relative;"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), iconSize / 2);

const Title =
/*#__PURE__*/
_styledComponents.default.h1.withConfig({
  displayName: "Tag__Title",
  componentId: "rxfsom-2"
})(["", ";color:", ";margin:0 10px 0 2px;"], (0, _exports.typography)(700, _exports.FontSizes.Content), (0, _exports.getColor)(_exports.Colors.Black89));

class Tag extends _react.Component {
  render() {
    const {
      icon,
      label,
      cssOverrides
    } = this.props;
    return _react.default.createElement(CCTag, {
      label: label,
      cssOverrides: cssOverrides
    }, _react.default.createElement(StyledIconLeft, {
      icon: icon,
      size: iconSize
    }), label && _react.default.createElement(Title, null, label));
  }

}

exports.Tag = Tag;