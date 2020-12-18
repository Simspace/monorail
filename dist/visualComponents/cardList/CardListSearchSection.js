"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardListSearchSection = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _hooks = require("../../helpers/hooks");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _Search = require("../inputs/Search");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StyledSearch = /*#__PURE__*/(0, _styledComponents.default)(_Search.Search).withConfig({
  displayName: "CardListSearchSection___StyledSearch",
  componentId: "sc-1wutxvy-0"
})(["width:auto;"]);

const CardListSearchSection = props => {
  const {
    onSearchValueChange,
    placeholder,
    searchValue
  } = props;
  const searchRef = (0, _hooks.useRefFocusOnRender)();
  return /*#__PURE__*/_react.default.createElement(RowSection, null, /*#__PURE__*/_react.default.createElement(_StyledSearch, {
    placeholder: placeholder,
    value: searchValue,
    onChange: onSearchValueChange,
    searchRef: searchRef
  }));
};

exports.CardListSearchSection = CardListSearchSection;
const RowSection = _styledComponents2.default.section`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;

  position: relative; /* So the ::after content is positioned properly */
  padding: 8px 16px;
  background: ${(0, _exports.getColor)(_exports.Colors.Gray04)};

  /* This matches the border on the Header component 
     packages/monorail/src/visualComponents/header/Header.tsx */
  &::after {
    content: '';
    background: ${(0, _exports.getColor)(_exports.Colors.Gray08)};
    bottom: 0;
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
  }
`;