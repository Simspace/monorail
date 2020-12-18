"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _styledComponents = require("styled-components");

var _muiTheme = require("./muiTheme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line no-restricted-imports

/**
 * Composes styled-components and Material UI theme providers together. Allows for override of styled-component theme.
 */
const ThemeProvider = props => {
  // Allow theme modification via callback similar to styled-components' API
  const outerTheme = (0, _react.useContext)(_styledComponents.ThemeContext);
  const modifiedThemeSC = typeof props.theme === 'function' ? props.theme(outerTheme) : props.theme;
  const themeMUI = (0, _react.useMemo)(() => (0, _muiTheme.createMuiThemeFromSc)(modifiedThemeSC), [modifiedThemeSC]);
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: modifiedThemeSC
  }, /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: themeMUI
  }, props.children));
};

exports.ThemeProvider = ThemeProvider;