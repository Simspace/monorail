"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonFooter = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = require("../../helpers/color");

var _elevation = require("../../helpers/elevation");

var _flex = require("../../helpers/flex");

var _size = require("../../helpers/size");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ButtonFooterContainer = _styledComponents.default.div`
  ${(0, _flex.flexFlow)('row')};
  ${(0, _elevation.getElevationShadow)(_elevation.ElevationRange.Elevation5)};

  align-items: center;
  background-color: ${(0, _color.getColor)(_color.Colors.White)};
  height: 40px;
  flex-shrink: 0;
  position: relative; /* Needs pos: rel so that the shadow appears above the content. */
  ${props => props.cssOverrides}
`;

const ButtonFooterContent = _styledComponents.default.div(({
  justifyContent
}) => (0, _styledComponents.css)`
    ${(0, _flex.flexFlow)('row')};
    ${(0, _size.pageSizePadding)()};

    align-items: center;
    justify-content: ${justifyContent ? justifyContent : `flex-end`};
    width: 100%;

    & > * {
      margin-left: 4px;
      margin-right: 4px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  `);

const ButtonFooter = ({
  children,
  justifyContent,
  cssOverrides
}) => {
  return _react.default.createElement(ButtonFooterContainer, {
    cssOverrides: cssOverrides
  }, _react.default.createElement(ButtonFooterContent, {
    justifyContent: justifyContent
  }, children));
};

exports.ButtonFooter = ButtonFooter;