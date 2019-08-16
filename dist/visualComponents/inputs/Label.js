"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

var _typography = require("../../helpers/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledLabel =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "Label__StyledLabel",
  componentId: "ma0g1z-0"
})(["", ";"], (0, _typography.typography)(500, _typography.FontSizes.Title5));

const Label = ({
  label,
  required,
  ...domProps
}) => {
  return _react.default.createElement(StyledLabel, domProps, label, required && '*');
};

exports.Label = Label;