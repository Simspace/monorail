"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderWithTheme = renderWithTheme;
exports.renderStory = renderStory;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _react2 = require("@testing-library/react");

var _styledComponents = require("styled-components");

var _theme = require("../helpers/theme");

var _ThemeProvider = require("../v2/core/theme/ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-restricted-imports */

/* eslint-enable no-restricted-imports */

/**
 * Temporary fix for https://github.com/dequelabs/axe-core/issues/2587
 *
 * Delete after https://github.com/jsdom/jsdom/issues/3064 is fixed
 */
const TemporaryJSDomFix = /*#__PURE__*/(0, _styledComponents.createGlobalStyle)`
  svg title {
    display: inline;
}
`;
/**
 * Renders content for tests inside theme providers
 */

function renderWithTheme(ui, options) {
  return (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styles.StylesProvider, {
    injectFirst: true
  }, /*#__PURE__*/_react.default.createElement(TemporaryJSDomFix, null), /*#__PURE__*/_react.default.createElement(_ThemeProvider.ThemeProvider, {
    theme: _theme.monorailTheme
  }, ui)), options);
}
/**
 * Renders a Storybook story for testing
 */


function renderStory(Story, options) {
  return renderWithTheme( /*#__PURE__*/_react.default.createElement(Story, Story.args), options);
}