"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithAdornments = exports.LotsOfText = exports.Basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../../helpers/storybook");

var Icons = _interopRequireWildcard(require("../../../icons/Icons"));

var _Pill = require("../Pill");

var _PillMeta = _interopRequireDefault(require("./Pill.meta.json"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const LOREM = "Once // When I was little someone pointed out to me // Some constellations but the big dippers all I could see // That brontosaurus must have stood a thousand miles high // That brontosaurus laying on its side up in the sky // Bottoms up and this time // Won't you let me be? // Bottled up but this time // Won't you rescue me? // You should have been here last night and heard what the big dipper said to me // Jack thought it twice and thought that that that made it true // Some brains just work that way // that's what chemicals can do // He thought he'd have a beer // he thought he was alone // He thought an Albertson's stir fry dinner would make his apartment a home // Bottoms up and this time // Won't you let me be? // Bottled up but this time // Won't you rescue me? // You should have been here last night and heard what the big dipper said to me // I thought I bored me but I learned to think like you // Now nothing bores me that's that nothing is thought through // Bottoms up and this time // Won't you let me be? // Bottled up but this time // Won't you rescue me? // Thought it out and this time // It's all I can see // You should have been here last night and heard what the big dipper said"; //#region Metadata for ALL stories

var _default = (0, _storybook.meta)(_PillMeta.default, {
  title: 'Monorail/component/Pill'
}); //#endregion
//#region Helpers


exports.default = _default;
const Template = (0, _storybook.story)(args => {
  var _args$label;

  return /*#__PURE__*/_react.default.createElement(_Pill.Pill, _extends({}, args, {
    label: (_args$label = args.label) !== null && _args$label !== void 0 ? _args$label : 'Hello!'
  }));
}); //#endregion
//#region Stories

const Basic = (0, _storybook.story)(Template);
exports.Basic = Basic;
const LotsOfText = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(Template, args), {
  args: {
    label: LOREM
  }
});
exports.LotsOfText = LotsOfText;
const WithAdornments = (0, _storybook.story)(Template, {
  args: {
    label: LOREM,
    startAdornment: /*#__PURE__*/_react.default.createElement(_Pill.PillAdornment, {
      position: "start"
    }, /*#__PURE__*/_react.default.createElement(Icons.CheckCircle, null)),
    endAdornment: /*#__PURE__*/_react.default.createElement(_Pill.PillAdornment, {
      position: "end"
    }, /*#__PURE__*/_react.default.createElement(Icons.CheckCircle, null))
  }
}); //#endregion Stories

exports.WithAdornments = WithAdornments;