"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllSizes = exports.BothAdornments = exports.EndAdornment = exports.StartAdornment = exports.Basic = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybook = require("../../../../helpers/storybook");

var _ModalHeaderMeta = _interopRequireDefault(require("./ModalHeader.meta.json"));

var _ModalHeader = require("../ModalHeader");

var Icons = _interopRequireWildcard(require("../../../icons/Icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_ModalHeaderMeta.default, {
  title: 'monorail/core/Modal/ModalHeader',
  argTypes: {
    ref: _storybook.DISABLED_ARG_TYPE
  },
  parameters: { ..._storybook.A11Y_ELEMENT__COMPONENT
  }
});

exports.default = _default;
const BASIC_PROPS = {
  title: 'This is a title',
  onClose: (0, _addonActions.action)('onClose')
};
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_ModalHeader.ModalHeader, _extends({
  title: BASIC_PROPS.title
}, args)), {
  args: { ...BASIC_PROPS
  }
}); //#region Hero story in Docs

const Basic = (0, _storybook.story)(Template); //#endregion
//#region Distinct configurations

exports.Basic = Basic;
const StartAdornment = (0, _storybook.story)(Template, {
  args: {
    startAdornment: /*#__PURE__*/_react.default.createElement(Icons.Crown, null)
  }
});
exports.StartAdornment = StartAdornment;
const EndAdornment = (0, _storybook.story)(Template, {
  args: {
    endAdornment: /*#__PURE__*/_react.default.createElement(Icons.Crown, null)
  }
});
exports.EndAdornment = EndAdornment;
const BothAdornments = (0, _storybook.story)(Template, {
  args: {
    startAdornment: /*#__PURE__*/_react.default.createElement(Icons.Crown, null),
    endAdornment: /*#__PURE__*/_react.default.createElement(Icons.Crown, null)
  }
}); //#endregion
//#region Prop showcases

exports.BothAdornments = BothAdornments;

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "ModalHeaderstories___StyledDiv",
  componentId: "o9d5jx-0"
})(["display:flex;flex-direction:column;gap:24px;"]);

const AllSizes = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_StyledDiv, null, /*#__PURE__*/_react.default.createElement(_ModalHeader.ModalHeader, _extends({}, BASIC_PROPS, {
  size: "mini",
  title: "mini"
})), /*#__PURE__*/_react.default.createElement(_ModalHeader.ModalHeader, _extends({}, BASIC_PROPS, {
  size: "small",
  title: "small"
})), /*#__PURE__*/_react.default.createElement(_ModalHeader.ModalHeader, _extends({}, BASIC_PROPS, {
  size: "medium",
  title: "medium"
})), /*#__PURE__*/_react.default.createElement(_ModalHeader.ModalHeader, _extends({}, BASIC_PROPS, {
  size: "large",
  title: "large"
})), /*#__PURE__*/_react.default.createElement(_ModalHeader.ModalHeader, _extends({}, BASIC_PROPS, {
  size: "fullScreen",
  title: "fullScreen"
}))), {
  parameters: { ..._storybook.DISABLED_CONTROLS,
    ..._storybook.A11Y_ELEMENT__ROOT
  }
}); //#endregion

exports.AllSizes = AllSizes;