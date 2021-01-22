"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithPagination = exports.Radio = exports.Checkbox = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _fpTsImports = require("../../../../sharedHelpers/fp-ts-imports");

var _storybook = require("../../../../helpers/storybook");

var _styledComponents2 = require("../../../../helpers/styled-components");

var _ReactTableSelectMeta = _interopRequireDefault(require("./ReactTableSelect.meta.json"));

var _ReactTableSelect = require("../ReactTableSelect");

var _SelectionPaginationBar = require("../SelectionPaginationBar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//#region Metadata for ALL stories
var _default = (0, _storybook.meta)(_ReactTableSelectMeta.default, {
  title: 'monorail/v1/ReactTableSelect',
  parameters: { ..._storybook.PADDING_REMOVED
  }
}); //#endregion


exports.default = _default;

const data = _fpTsImports.A.range(1, 200).map(val => ({
  id: `${val}`,
  name: `Thing ${val}`,
  description: 'Info about the thing'
}));

const columns = [{
  accessor: 'name',
  Header: 'Name',
  width: 240
}, {
  accessor: 'description',
  Header: 'Description',
  width: 240
}];
const reactTableProps = {
  data,
  columns,
  showPagination: true
}; // neither flex: 1 nor height: 100% work in storybook for some reason

const styleOverrides = (0, _styledComponents2.css)`
  height: 400px;
`; //#region Helpers

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "ReactTableSelectstories___StyledDiv",
  componentId: "sc-115yk6s-0"
})(["", ""], styleOverrides);

const Template = (0, _storybook.story)(args => {
  const [items, setItems] = _react.default.useState(_fpTsImports.R.empty);

  return /*#__PURE__*/_react.default.createElement(_StyledDiv, null, /*#__PURE__*/_react.default.createElement(_ReactTableSelect.ReactTableSelect, _extends({
    reactTableProps: reactTableProps,
    selectProps: {
      getId: item => item.id,
      isDisabled: () => false,
      totalItems: data.length,
      rowHeight: 40,
      selected: items,
      onSelectionChange: setItems
    }
  }, args)));
}, {
  parameters: { ..._storybook.DISABLED_A11Y
  }
});

var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "ReactTableSelectstories___StyledDiv2",
  componentId: "sc-115yk6s-1"
})(["", ""], styleOverrides);

const RadioTemplate = (0, _storybook.story)(args => {
  const [items, setItems] = _react.default.useState(_fpTsImports.R.empty);

  return /*#__PURE__*/_react.default.createElement(_StyledDiv2, null, /*#__PURE__*/_react.default.createElement(_ReactTableSelect.ReactTableSelect, _extends({
    reactTableProps: reactTableProps,
    selectProps: {
      type: _ReactTableSelect.CheckboxType.Radio,
      getId: item => item.id,
      isDisabled: () => false,
      totalItems: data.length,
      rowHeight: 40,
      selected: items,
      onSelectionChange: setItems
    }
  }, args)));
}, {
  parameters: { ..._storybook.DISABLED_A11Y
  }
}); //#endregion
//#region Stories
// Hero Story in Docs

const Checkbox = (0, _storybook.story)(Template); //#endregion
//#region Distinct Configurations

exports.Checkbox = Checkbox;
const Radio = (0, _storybook.story)(RadioTemplate);
exports.Radio = Radio;
const WithPagination = (0, _storybook.story)(Template, {
  args: {
    reactTableProps: { ...reactTableProps,
      PaginationComponent: _SelectionPaginationBar.SelectionPaginationBar
    }
  }
}); //#endregion

exports.WithPagination = WithPagination;