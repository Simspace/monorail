"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItem = void 0;

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _colors = require("../../v2/core/theme/colors");

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
    border-left: 4px solid transparent;

    ${disabled ? (0, _styledComponents.css)`
          cursor: default;
          opacity: 0.24;
        ` : (0, _styledComponents.css)`
          ${highlighted && (0, _styledComponents.css)`
              background: ${_colors.ColorToken.Blue050};
              border-left: 4px solid ${_colors.ColorToken.Blue300};
            `};

          ${selected && (0, _styledComponents.css)`
              background: ${_colors.ColorToken.Blue050};
              border-left: 4px solid ${_colors.ColorToken.Blue600};
            `};

          ${highlighted && selected && (0, _styledComponents.css)`
              background: ${_colors.ColorToken.Blue100};
              border-left: 4px solid ${_colors.ColorToken.Blue600};
            `};
        `};
  `);

exports.DropdownItem = DropdownItem;