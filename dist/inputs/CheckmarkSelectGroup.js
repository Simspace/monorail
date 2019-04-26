"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckmarkSelectGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Select = require("./Select");

var _exports = require("../helpers/exports");

var _Choice = require("./Choice");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CheckmarkSelectGroupWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "CheckmarkSelectGroup__CheckmarkSelectGroupWrapper",
  componentId: "sc-9lupgs-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";"], cssOverrides));

const Label =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "CheckmarkSelectGroup__Label",
  componentId: "sc-9lupgs-1"
})(["", ";margin-bottom:4px;height:16px;"], (0, _exports.typography)(500, _exports.FontSizes.Title5));

const CheckmarkSelectWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "CheckmarkSelectGroup__CheckmarkSelectWrapper",
  componentId: "sc-9lupgs-2"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;", ";"], cssOverrides));

const CheckmarkSelectLabel =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "CheckmarkSelectGroup__CheckmarkSelectLabel",
  componentId: "sc-9lupgs-3"
})(["", ";flex-grow:1;"], (0, _exports.typography)(500, _exports.FontSizes.Title5));

const CheckmarkSelectContent =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "CheckmarkSelectGroup__CheckmarkSelectContent",
  componentId: "sc-9lupgs-4"
})(["display:flex;align-items:center;width:100%;"]);

const CheckmarkSelectGroup = ({
  cssOverrides,
  label,
  items,
  onSelect,
  onCheck
}) => {
  return _react.default.createElement(CheckmarkSelectGroupWrapper, {
    cssOverrides: cssOverrides
  }, label && _react.default.createElement(Label, null, label), items.map((item, k) => {
    const {
      label: itemLabel,
      enabled,
      ...otherProps
    } = item;
    return _react.default.createElement(CheckmarkSelectWrapper, {
      key: k,
      cssOverrides: {
        marginBottom: k !== items.length ? '8px' : 0
      }
    }, _react.default.createElement(_Choice.Choice, {
      type: "checkbox",
      checked: enabled,
      onChange: () => onCheck(otherProps.key, !enabled)
    }, _react.default.createElement(CheckmarkSelectContent, null, _react.default.createElement(CheckmarkSelectLabel, null, itemLabel), _react.default.createElement(_Select.Select, _extends({}, otherProps, {
      onSelect: v => onSelect(otherProps.key, v),
      cssOverrides: {
        flex: '0 0 100px'
      }
    })))));
  }));
};

exports.CheckmarkSelectGroup = CheckmarkSelectGroup;