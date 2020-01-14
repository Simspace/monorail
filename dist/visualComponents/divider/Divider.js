"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Styles
 */
const Divider = _styledComponents.default.div(({
  isVertical = false
}) => (0, _styledComponents.css)`
    ${isVertical ? (0, _styledComponents.css)`
          width: 1px;
          height: 100%;
        ` : (0, _styledComponents.css)`
          width: 100%;
          height: 1px;
        `};

    background: ${(0, _exports.getColor)(_exports.Colors.Grey94)};
  `);

exports.Divider = Divider;