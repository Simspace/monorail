"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoData = exports.Basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fpTsImports = require("../../../../sharedHelpers/fp-ts-imports");

var _storybook = require("../../../../helpers/storybook");

var _TreeGridMeta = _interopRequireDefault(require("./TreeGrid.meta.json"));

var _TreeGrid = require("../TreeGrid");

var _TreeGridProps = require("../__mocks__/TreeGridProps.mock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_TreeGridMeta.default, {
  title: 'monorail/component/TreeGrid'
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement("div", {
  style: {
    height: 500
  }
}, /*#__PURE__*/_react.default.createElement(_TreeGrid.TreeGrid, _extends({}, _TreeGridProps.mockTreeGridProps, args))), {
  args: { ..._TreeGridProps.mockTreeGridProps
  }
});
const Basic = (0, _storybook.story)(Template);
exports.Basic = Basic;
const NoData = (0, _storybook.story)(Template, {
  args: {
    content: _fpTsImports.E.left( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _TreeGridProps.EMPTY_VIEW_TEXT_CONTENT))
  }
});
exports.NoData = NoData;