"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFooterMeta = exports.TableFooterContainer = exports.TableRowGroupHeader = exports.TableRowData = exports.TableRowContainer = exports.TableBody = exports.TableHeaderData = exports.TableHeaderContainer = exports.TableContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Helper Functions
const rowPadding = ({
  singleCollection,
  collapsible
}) => {
  if (singleCollection) {
    if (collapsible) {
      return _styledComponents.css`
        padding: 0 24px 0 8px;
      `;
    } else {
      return _styledComponents.css`
        padding: 0 24px;
      `;
    }
  } else {
    if (collapsible) {
      return _styledComponents.css`
        padding: 0 8px;
      `;
    } else {
      return _styledComponents.css`
        padding: 0 8px;
      `;
    }
  }
};

const tableDataStyles = ({
  textAlign,
  flex,
  width
}) => _styledComponents.css`
  ${textAlign && _styledComponents.css`
      text-align: ${textAlign};
    `};
  ${flex && _styledComponents.css`
      flex: ${flex};
    `};
  ${width && _styledComponents.css`
      width: ${width}px;
    `};
`; // Components
// Main Wrapper


const TableContainer = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)()};

  height: 100%;
  overflow: hidden;

  ${({
  css: cssOverrides
}) => cssOverrides};
`; // Header Components

exports.TableContainer = TableContainer;
const TableHeaderContainer = (0, _styledComponents.default)('div')`
  ${({
  collapsible = false,
  css: cssOverrides,
  dense = false,
  singleCollection = false
}) => _styledComponents.css`
    ${(0, _CommonStyles.flexFlow)('row')};
    ${rowPadding({
  singleCollection,
  dense,
  collapsible
})};

    align-items: center;
    border-bottom: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Grey94)};
    box-sizing: border-box;
    flex-shrink: 0;
    min-height: 32px;

    ${cssOverrides};
  `};
`;
exports.TableHeaderContainer = TableHeaderContainer;
const TableHeaderData = (0, _styledComponents.default)('div')`
  ${({
  css: cssOverrides,
  flex,
  hasSorter = false,
  textAlign,
  width
}) => _styledComponents.css`
    ${(0, _CommonStyles.flexFlow)('row')};
    ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};

    align-items: center;
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
    height: 100%;
    padding: 8px 8px 7px; /* 7px bottom because of the bottomBorder on the row. */

    ${tableDataStyles({
  textAlign,
  width,
  flex
})};

    ${hasSorter && _styledComponents.css`
        cursor: pointer;
        user-select: none;

        &:hover {
          background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Grey94)};
        }
      `};

    ${cssOverrides};
  `};
`; // Body Components

exports.TableHeaderData = TableHeaderData;
const TableBody = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)()};

  flex: 1 1 100%;
  overflow-y: auto;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.TableBody = TableBody;
const TableRowContainer = (0, _styledComponents.default)('div')`
  ${({
  collapsible = false,
  css: cssOverrides,
  dense = false,
  singleCollection = false
}) => _styledComponents.css`
    ${(0, _CommonStyles.flexFlow)('row')};
    ${rowPadding({
  singleCollection,
  dense,
  collapsible
})};

    align-items: center;
    flex-shrink: 0;
    min-height: ${dense ? 32 : 40}px;
    position: relative; /* Need pos:rel so that the pseudo element for the indented border works. */

    &::after {
      background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Grey96)};
      bottom: 0;
      content: '';
      height: 1px;
      left: 6px;
      position: absolute;
      right: 6px;
      z-index: -5; /* Needs negative z-index so that it appears below the scroll bar. */
    }

    ${cssOverrides};
  `};
`;
exports.TableRowContainer = TableRowContainer;
const TableRowData = (0, _styledComponents.default)('div')`
  ${({
  textAlign,
  width,
  flex,
  css: cssOverrides
}) => _styledComponents.css`
    ${(0, _CommonStyles.flexFlow)('row')};
    ${(0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title5)};

    align-items: center;
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
    padding: 12px 8px;
    height: 100%;

    ${tableDataStyles({
  textAlign,
  width,
  flex
})};

    ${cssOverrides};
  `};
`;
exports.TableRowData = TableRowData;
const TableRowGroupHeader = (0, _styledComponents.default)('div')`
  ${({
  collapsible = false,
  css: cssOverrides,
  dense = false,
  singleCollection = false
}) => _styledComponents.css`
    ${(0, _CommonStyles.flexFlow)('row')};
    ${rowPadding({
  singleCollection,
  dense,
  collapsible
})};

    align-items: center;
    cursor: pointer;
    height: 40px;
    user-select: none;

    ${cssOverrides};
  `};
`; // Table Footer

exports.TableRowGroupHeader = TableRowGroupHeader;
const TableFooterContainer = (0, _styledComponents.default)('div')`
  ${({
  collapsible = false,
  css: cssOverrides,
  dense = false,
  singleCollection = false
}) => _styledComponents.css`
    ${(0, _CommonStyles.flexFlow)('row')};
    ${rowPadding({
  singleCollection,
  dense,
  collapsible
})};

    align-items: center;
    background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Grey99)};
    flex-shrink: 0;
    height: 24px;

    ${cssOverrides};
  `};
`;
exports.TableFooterContainer = TableFooterContainer;
const TableFooterMeta = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title5)};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black74)};
  margin-left: auto;
`;
exports.TableFooterMeta = TableFooterMeta;