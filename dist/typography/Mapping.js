"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mapping = exports.MappingID = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Styles
 */
const MappingContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Mapping__MappingContainer",
  componentId: "sc-1x0g1sf-0"
})(({
  margin
}) => (0, _styledComponents.css)(["", ";font-family:'Gotham SSm',sans-serif;"], (0, _exports.typography)(400, _exports.FontSizes.Title5, margin)));

const MappingID =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "Mapping__MappingID",
  componentId: "sc-1x0g1sf-1"
})(["", ";background:", ";color:", ";font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-weight:", ";margin-right:5px;padding:1px 2px 0 2px;"], (0, _exports.borderRadius)(_exports.BorderRadius.Small), (0, _exports.getColor)(_exports.Colors.Grey94), (0, _exports.getColor)(_exports.Colors.Black74), _exports.FontWeights.Book);
/*
 * Types
 */


exports.MappingID = MappingID;

/*
 * Component
 */
const Mapping = ({
  mapping,
  ...domProps
}) => _react.default.createElement(MappingContainer, domProps, _react.default.createElement(MappingID, null, mapping.key), !(0, _typeGuards.isEmptyString)(mapping.name.trim()) ? mapping.name.trim() : mapping.description.trim());

exports.Mapping = Mapping;
Mapping.defaultProps = {
  margin: ''
};