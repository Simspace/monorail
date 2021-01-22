"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLogo = exports.StaticLogo = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _function = require("fp-ts/lib/function");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _color = require("../../helpers/color");

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _FileUpload = require("../inputs/FileUpload");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StaticLogo = props => /*#__PURE__*/_react.default.createElement(LogoContainer, {
  hasLogo: true,
  isEditMode: false
}, (0, _typeGuards.isString)(props.logo) ? /*#__PURE__*/_react.default.createElement(Logo, {
  logo: props.logo
}) : props.logo);

exports.StaticLogo = StaticLogo;

var _StyledIcon = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Logo___StyledIcon",
  componentId: "qov5i2-0"
})(["color:", ";bottom:16px;left:16px;position:absolute;"], p => p._css);

const EditLogo = props => {
  const logoInputRef = (0, _react.useRef)(null);
  const [logoEl, icon, action] = (0, _function.pipe)(O.fromNullable(props.logo), O.fold(() => [/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), 'upload', () => {
    var _logoInputRef$current;

    return (_logoInputRef$current = logoInputRef.current) === null || _logoInputRef$current === void 0 ? void 0 : _logoInputRef$current.click();
  }], logo => [/*#__PURE__*/_react.default.createElement(Logo, {
    key: "logo",
    logo: logo
  }), 'delete', props.onRemove]));
  return /*#__PURE__*/_react.default.createElement(LogoContainer, {
    hasLogo: (0, _typeGuards.isNotNil)(props.logo),
    isEditMode: true,
    onClick: action
  }, logoEl, /*#__PURE__*/_react.default.createElement(LogoIconContainer, null, /*#__PURE__*/_react.default.createElement(_StyledIcon, {
    icon: icon,
    size: 24,
    _css: (0, _color.getColor)(_color.Colors.Gray54)
  })), /*#__PURE__*/_react.default.createElement(_FileUpload.HiddenSingleFileInput, {
    accept: [_FileUpload.FileType.JPG, _FileUpload.FileType.PNG],
    inputRef: logoInputRef,
    onChange: props.onChange
  }));
};

exports.EditLogo = EditLogo;

const LogoIconContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Logo__LogoIconContainer",
  componentId: "qov5i2-1"
})(["width:48px;height:48px;margin:4px;border-radius:50%;"]);

const LogoContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Logo__LogoContainer",
  componentId: "qov5i2-2"
})(({
  hasLogo,
  isEditMode
}) => (0, _styledComponents.css)(["position:absolute;width:56px;height:56px;top:118px;left:12px;border-radius:50%;background-color:", ";pointer-events:auto;", " &:before{content:'';display:block;position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;margin:4px;", "}", ""], (0, _color.getColor)(_color.Colors.White), hasLogo && `${LogoIconContainer} {
        ${(0, _exports.visible)(false)}
      }
      &:hover {
        ${LogoIconContainer} {
          ${(0, _exports.visible)(true)}
      }`, !hasLogo && `border: 2px dashed ${(0, _color.getColor)(_color.Colors.Gray54)};`, isEditMode && `&:hover {
        cursor: pointer;
      }
      &:hover:before {
      background-color: ${(0, _color.getColor)(hasLogo ? _color.Colors.Black : _color.Colors.Grey90, 0.6)};
    }`));

const Logo = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Logo",
  componentId: "qov5i2-3"
})(({
  logo
}) => (0, _styledComponents.css)(["background-image:url(", ");background-position:center;background-size:cover;height:48px;width:48px;margin:4px;border-radius:50%;flex-shrink:0;"], logo));