"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionSummaryBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../../helpers/exports");

var _styledComponents = _interopRequireDefault(require("../../../helpers/styled-components"));

var _Text = require("../../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TotalRow = _styledComponents.default.div`
  display: flex;
  padding: 4px 22px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(0, _exports.getColor)(_exports.Colors.Grey94)};
  height: 36px;
  position: sticky;
  bottom: 0;
`;

/**
 * Default "Pagination" component for `ReactTableSelect`.
 * Shows selection and items-in-table summaries.
 */
const SelectionSummaryBar = props => {
  return /*#__PURE__*/_react.default.createElement(TotalRow, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Bold
  }, props.totalSelectedItems), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Book
  }, ' ', "selected")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Bold
  }, props.sortedData.length), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Book
  }, ' ', "out of", ' '), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Bold
  }, props.totalItems), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Book
  }, ' ', "Shown")));
};

exports.SelectionSummaryBar = SelectionSummaryBar;