"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mapping = exports.MappingID = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MappingContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Mapping__MappingContainer",
  componentId: "yqfr95-0"
})(({
  margin
}) => (0, _styledComponents.css)(["", ";font-family:'Gotham SSm',sans-serif;"], (0, _exports.typography)(400, _exports.FontSizes.Title5, margin)));

const MappingID =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "Mapping__MappingID",
  componentId: "yqfr95-1"
})(["", ";background:", ";color:", ";font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-weight:600;margin-right:5px;padding:1px 2px 0 2px;"], (0, _exports.borderRadius)(_exports.BorderRadius.Small), (0, _exports.getColor)(_exports.Colors.Grey94), (0, _exports.getColor)(_exports.Colors.Black74));
/*
 * Types
 */


exports.MappingID = MappingID;

/*
 * Component
 */
const Mapping = props => {
  const {
    mapping,
    ...domProps
  } = props;
  return _react.default.createElement(MappingContainer, domProps, _react.default.createElement(MappingID, null, mapping.key), !(0, _typeGuards.isEmptyString)(mapping.name.trim()) ? mapping.name.trim() : mapping.description.trim());
};

exports.Mapping = Mapping;