"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFooterMeta = exports.TableFooterContainer = exports.TableEmptyMessage = exports.TableRowGroupHeader = exports.TableRowData = exports.TableRowContainer = exports.TableBody = exports.TableHeaderData = exports.TableHeaderContainer = exports.TableContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Helper Functions
const rowPadding = ({
  singleCollection,
  collapsible
}) => {
  if (singleCollection) {
    if (collapsible) {
      return (0, _styledComponents.css)(["padding:0 24px 0 8px;"]);
    } else {
      return (0, _styledComponents.css)(["padding:0 24px;"]);
    }
  } else {
    if (collapsible) {
      return (0, _styledComponents.css)(["padding:0 8px;"]);
    } else {
      return (0, _styledComponents.css)(["padding:0 8px;"]);
    }
  }
};

const tableDataStyles = ({
  textAlign,
  flex,
  width
}) => (0, _styledComponents.css)(["", ";", ";", ";"], textAlign && (0, _styledComponents.css)(["text-align:", ";"], textAlign), flex && (0, _styledComponents.css)(["flex:", ";"], flex), width && (0, _styledComponents.css)(["width:", "px;"], width)); // Components
// Main Wrapper


const TableContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableContainer",
  componentId: "sc-16utrcn-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";height:100%;overflow:hidden;", ";"], (0, _exports.flexFlow)(), cssOverrides)); // Header Components


exports.TableContainer = TableContainer;

const TableHeaderContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableHeaderContainer",
  componentId: "sc-16utrcn-1"
})(({
  collapsible = false,
  cssOverrides,
  dense = false,
  singleCollection = false
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;border-bottom:1px solid ", ";box-sizing:border-box;flex-shrink:0;min-height:32px;", ";"], (0, _exports.flexFlow)('row'), rowPadding({
  singleCollection,
  dense,
  collapsible
}), (0, _exports.getColor)(_exports.Colors.Grey94), cssOverrides));

exports.TableHeaderContainer = TableHeaderContainer;

const TableHeaderData =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableHeaderData",
  componentId: "sc-16utrcn-2"
})(({
  cssOverrides,
  flex,
  hasSorter = false,
  textAlign,
  width
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;color:", ";height:100%;padding:8px 8px 7px;", ";", ";", ";"], (0, _exports.flexFlow)('row'), (0, _exports.typography)(500, _exports.FontSizes.Title5), (0, _exports.getColor)(_exports.Colors.Black89), tableDataStyles({
  textAlign,
  width,
  flex
}), hasSorter && (0, _styledComponents.css)(["cursor:pointer;user-select:none;&:hover{background:", ";}"], (0, _exports.getColor)(_exports.Colors.Grey94)), cssOverrides)); // Body Components


exports.TableHeaderData = TableHeaderData;

const TableBody =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableBody",
  componentId: "sc-16utrcn-3"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";flex:1 1 100%;overflow-y:auto;", ";"], (0, _exports.flexFlow)(), cssOverrides));

exports.TableBody = TableBody;

const TableRowContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableRowContainer",
  componentId: "sc-16utrcn-4"
})(({
  collapsible = false,
  cssOverrides,
  dense = false,
  singleCollection = false
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;flex-shrink:0;min-height:", "px;position:relative;&::after{background:", ";bottom:0;content:'';height:1px;left:6px;position:absolute;right:6px;z-index:-5;}", ";"], (0, _exports.flexFlow)('row'), rowPadding({
  singleCollection,
  dense,
  collapsible
}), dense ? 32 : 40, (0, _exports.getColor)(_exports.Colors.Grey96), cssOverrides));

exports.TableRowContainer = TableRowContainer;

const TableRowData =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableRowData",
  componentId: "sc-16utrcn-5"
})(({
  textAlign,
  width,
  flex,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;color:", ";padding:12px 8px;height:100%;", ";", ";"], (0, _exports.flexFlow)('row'), (0, _exports.typography)(400, _exports.FontSizes.Title5), (0, _exports.getColor)(_exports.Colors.Black89), tableDataStyles({
  textAlign,
  width,
  flex
}), cssOverrides));

exports.TableRowData = TableRowData;

const TableRowGroupHeader =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableRowGroupHeader",
  componentId: "sc-16utrcn-6"
})(({
  collapsible = false,
  cssOverrides,
  dense = false,
  singleCollection = false
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;cursor:pointer;height:40px;user-select:none;", ";"], (0, _exports.flexFlow)('row'), rowPadding({
  singleCollection,
  dense,
  collapsible
}), cssOverrides));

exports.TableRowGroupHeader = TableRowGroupHeader;

const TableEmptyMessage =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableEmptyMessage",
  componentId: "sc-16utrcn-7"
})(["padding:16px;", ";"], (0, _exports.typography)(400, _exports.FontSizes.Title5)); // Table Footer


exports.TableEmptyMessage = TableEmptyMessage;

const TableFooterContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableFooterContainer",
  componentId: "sc-16utrcn-8"
})(({
  collapsible = false,
  cssOverrides,
  dense = false,
  singleCollection = false
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;background:", ";flex-shrink:0;height:24px;", ";"], (0, _exports.flexFlow)('row'), rowPadding({
  singleCollection,
  dense,
  collapsible
}), (0, _exports.getColor)(_exports.Colors.Grey99), cssOverrides));

exports.TableFooterContainer = TableFooterContainer;

const TableFooterMeta =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableFooterMeta",
  componentId: "sc-16utrcn-9"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";color:", ";margin-left:auto;", ";"], (0, _exports.typography)(400, _exports.FontSizes.Title5), (0, _exports.getColor)(_exports.Colors.Black74), cssOverrides));

exports.TableFooterMeta = TableFooterMeta;