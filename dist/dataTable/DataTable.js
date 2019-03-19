"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFooterMeta = exports.TableFooterContainer = exports.TableEmptyMessage = exports.TableRowGroupHeader = exports.TableRowData = exports.TableRowContainer = exports.TableBody = exports.TableHeaderData = exports.TableHeaderContainer = exports.TableContainer = void 0;

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
(0, _styledComponents.default)('div').withConfig({
  displayName: "DataTable__TableContainer",
  componentId: "sc-18e9kui-0"
})(["", ";height:100%;overflow:hidden;", ";"], (0, _CommonStyles.flexFlow)(), ({
  cssOverrides
}) => cssOverrides); // Header Components

exports.TableContainer = TableContainer;
const TableHeaderContainer =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "DataTable__TableHeaderContainer",
  componentId: "sc-18e9kui-1"
})(["", ";"], ({
  collapsible = false,
  cssOverrides,
  dense = false,
  singleCollection = false
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;border-bottom:1px solid ", ";box-sizing:border-box;flex-shrink:0;min-height:32px;", ";"], (0, _CommonStyles.flexFlow)('row'), rowPadding({
  singleCollection,
  dense,
  collapsible
}), (0, _CommonStyles.colors)(_CommonStyles.Colors.Grey94), cssOverrides));
exports.TableHeaderContainer = TableHeaderContainer;
const TableHeaderData =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "DataTable__TableHeaderData",
  componentId: "sc-18e9kui-2"
})(["", ";"], ({
  cssOverrides,
  flex,
  hasSorter = false,
  textAlign,
  width
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;color:", ";height:100%;padding:8px 8px 7px;", ";", ";", ";"], (0, _CommonStyles.flexFlow)('row'), (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black89), tableDataStyles({
  textAlign,
  width,
  flex
}), hasSorter && (0, _styledComponents.css)(["cursor:pointer;user-select:none;&:hover{background:", ";}"], (0, _CommonStyles.colors)(_CommonStyles.Colors.Grey94)), cssOverrides)); // Body Components

exports.TableHeaderData = TableHeaderData;
const TableBody =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "DataTable__TableBody",
  componentId: "sc-18e9kui-3"
})(["", ";flex:1 1 100%;overflow-y:auto;", ";"], (0, _CommonStyles.flexFlow)(), ({
  cssOverrides
}) => cssOverrides);
exports.TableBody = TableBody;
const TableRowContainer =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "DataTable__TableRowContainer",
  componentId: "sc-18e9kui-4"
})(["", ";"], ({
  collapsible = false,
  cssOverrides,
  dense = false,
  singleCollection = false
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;flex-shrink:0;min-height:", "px;position:relative;&::after{background:", ";bottom:0;content:'';height:1px;left:6px;position:absolute;right:6px;z-index:-5;}", ";"], (0, _CommonStyles.flexFlow)('row'), rowPadding({
  singleCollection,
  dense,
  collapsible
}), dense ? 32 : 40, (0, _CommonStyles.colors)(_CommonStyles.Colors.Grey96), cssOverrides));
exports.TableRowContainer = TableRowContainer;
const TableRowData =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "DataTable__TableRowData",
  componentId: "sc-18e9kui-5"
})(["", ";"], ({
  textAlign,
  width,
  flex,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;color:", ";padding:12px 8px;height:100%;", ";", ";"], (0, _CommonStyles.flexFlow)('row'), (0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title5), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black89), tableDataStyles({
  textAlign,
  width,
  flex
}), cssOverrides));
exports.TableRowData = TableRowData;
const TableRowGroupHeader =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "DataTable__TableRowGroupHeader",
  componentId: "sc-18e9kui-6"
})(["", ";"], ({
  collapsible = false,
  cssOverrides,
  dense = false,
  singleCollection = false
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;cursor:pointer;height:40px;user-select:none;", ";"], (0, _CommonStyles.flexFlow)('row'), rowPadding({
  singleCollection,
  dense,
  collapsible
}), cssOverrides));
exports.TableRowGroupHeader = TableRowGroupHeader;

const TableEmptyMessage =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataTable__TableEmptyMessage",
  componentId: "sc-18e9kui-7"
})(["padding:16px;", ";"], (0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title5)); // Table Footer


exports.TableEmptyMessage = TableEmptyMessage;
const TableFooterContainer =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "DataTable__TableFooterContainer",
  componentId: "sc-18e9kui-8"
})(["", ";"], ({
  collapsible = false,
  cssOverrides,
  dense = false,
  singleCollection = false
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;background:", ";flex-shrink:0;height:24px;", ";"], (0, _CommonStyles.flexFlow)('row'), rowPadding({
  singleCollection,
  dense,
  collapsible
}), (0, _CommonStyles.colors)(_CommonStyles.Colors.Grey99), cssOverrides));
exports.TableFooterContainer = TableFooterContainer;
const TableFooterMeta =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "DataTable__TableFooterMeta",
  componentId: "sc-18e9kui-9"
})(["", ";color:", ";margin-left:auto;"], (0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title5), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black74));
exports.TableFooterMeta = TableFooterMeta;