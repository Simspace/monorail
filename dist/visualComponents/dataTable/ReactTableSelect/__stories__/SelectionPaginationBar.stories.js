"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManyPagesBefore = exports.ManyPagesAfter = exports.OnLastPage = exports.OnFirstPage = exports.NoneSelected = exports.Basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _fpTsImports = require("../../../../sharedHelpers/fp-ts-imports");

var _storybook = require("../../../../helpers/storybook");

var _helpers = require("../helpers");

var _SelectionPaginationBar = require("../SelectionPaginationBar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//#region Metadata for ALL stories
var _default = (0, _storybook.meta)(_storybook.NO_GENERATED_META, {
  title: 'monorail/v1/ReactTableSelect/SelectionPaginationBar'
}); //#endregion
//#region Helpers


exports.default = _default;

const sortedData = _fpTsImports.A.range(1, 200);

const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_SelectionPaginationBar.SelectionPaginationBar, _extends({
  totalItems: 0,
  totalSelectedItems: 0,
  sortedData: sortedData,
  page: 0,
  pages: 0,
  pageSize: 0,
  itemsPerPage: _helpers.ItemsPerPageOption.Twenty,
  onPageChange: (0, _addonActions.action)('onPageChange'),
  onItemsPerPageChange: (0, _addonActions.action)('onItemsPerPageChange')
}, args)), {
  args: {
    totalItems: sortedData.length,
    page: 0,
    pages: 1,
    pageSize: 20
  },
  parameters: { ..._storybook.DISABLED_A11Y // v1 components have Color Contrast issues

  }
}); //#endregion
//#region Hero story in Docs

const Basic = (0, _storybook.story)(Template, {
  args: {
    totalSelectedItems: 1
  }
}); //#endregion
//#region Distinct Configurations

exports.Basic = Basic;
const NoneSelected = (0, _storybook.story)(Template, {
  args: {
    totalSelectedItems: 0
  }
});
exports.NoneSelected = NoneSelected;
const OnFirstPage = (0, _storybook.story)(Template, {
  args: {
    page: 0,
    pages: 2
  }
});
exports.OnFirstPage = OnFirstPage;
const OnLastPage = (0, _storybook.story)(Template, {
  args: {
    page: 1,
    pages: 2
  }
});
exports.OnLastPage = OnLastPage;
const ManyPagesAfter = (0, _storybook.story)(Template, {
  args: {
    page: 0,
    pages: 10
  }
});
exports.ManyPagesAfter = ManyPagesAfter;
const ManyPagesBefore = (0, _storybook.story)(Template, {
  args: {
    page: 9,
    pages: 10
  }
}); //#endregion

exports.ManyPagesBefore = ManyPagesBefore;