"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithHelperText = exports.WithLabel = exports.Empty = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../../helpers/storybook");

var _TextFieldMeta = _interopRequireDefault(require("./TextField.meta.json"));

var _TextField = require("../TextField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_TextFieldMeta.default, {
  title: 'monorail/core/TextField'
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_TextField.TextField, _extends({
  id: "test-id-for-a11y"
}, args))); //#region Hero story in Docs

const Empty = (0, _storybook.story)(Template, {
  args: {
    inputProps: {
      'aria-label': 'Without a label, aria-label must be defined'
    }
  }
}); //#endregion

exports.Empty = Empty;
const WithLabel = (0, _storybook.story)(Template, {
  args: {
    label: 'Hey!'
  }
});
exports.WithLabel = WithLabel;
const WithHelperText = (0, _storybook.story)(Template, {
  args: {
    label: 'Hey!',
    helperText: 'Helper text'
  }
});
exports.WithHelperText = WithHelperText;