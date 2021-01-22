"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameSize = exports.Basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../../helpers/storybook");

var _IconFrameMeta = _interopRequireDefault(require("./IconFrame.meta.json"));

var _IconFrame = require("../IconFrame");

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _storybook.meta)(_IconFrameMeta.default, {
  title: 'monorail/component/IconFrame'
});

exports.default = _default;

const IconFrameTestContent = () => /*#__PURE__*/_react.default.createElement(_CheckCircle.default, null);

const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_IconFrame.IconFrame, args, /*#__PURE__*/_react.default.createElement(IconFrameTestContent, null))); //#region Hero story in Docs

const Basic = (0, _storybook.story)(Template); //#endregion

exports.Basic = Basic;
const FrameSize = (0, _storybook.story)(Template, {
  args: {
    frameSize: 140
  }
});
exports.FrameSize = FrameSize;