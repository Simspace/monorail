"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItem = void 0;

var _color = require("../../helpers/color");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DropdownItem = _styledComponents.default.div(({
  selected,
  highlighted,
  disabled
}) => (0, _styledComponents.css)`
    position: relative;
    cursor: pointer;
    display: block;
    line-height: 1em;
    font-size: 11px;
    padding: 8px;
    word-break: break-word;

    ${disabled ? (0, _styledComponents.css)`
          cursor: default;
          opacity: 0.24;
        ` : (0, _styledComponents.css)`
          ${highlighted && (0, _styledComponents.css)`
              background: ${(0, _color.getColor)(_color.Colors.Black24, 0.16)};
            `};

          ${selected && (0, _styledComponents.css)`
              background: ${(0, _color.getColor)(_color.Colors.BrandLightBlue, 0.2)};
            `};

          ${highlighted && selected && (0, _styledComponents.css)`
              background: ${(0, _color.getColor)(_color.Colors.BrandLightBlue, 0.24)};
            `};
        `};
  `);

exports.DropdownItem = DropdownItem;