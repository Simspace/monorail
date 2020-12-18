"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Difficulty = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _ReadonlyArray = require("fp-ts/lib/ReadonlyArray");

var _exports = require("../../helpers/exports");

var _Text = require("../typography/Text");

var _ContentDifficulty = require("./ContentDifficulty");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "Difficulty___StyledText",
  componentId: "wimcny-0"
})(["color:", ";text-transform:uppercase;"], p => p._css);

const Difficulty = props => {
  const {
    difficulty
  } = props;
  return /*#__PURE__*/_react.default.createElement(DifficultyContainer, null, /*#__PURE__*/_react.default.createElement(DifficultyBars, null, (0, _ReadonlyArray.range)(-1, 2).map(level => /*#__PURE__*/_react.default.createElement(DifficultyBar, {
    key: level,
    color: (0, _ContentDifficulty.getDifficultyColorByLevel)(difficulty, level)
  }))), /*#__PURE__*/_react.default.createElement(_StyledText, {
    fontSize: _exports.FontSizes.Micro,
    fontWeight: 700,
    margin: '6px 0 0 0',
    _css: (0, _exports.getColor)((0, _ContentDifficulty.getDifficultyColor)(difficulty))
  }, difficultyToText(difficulty)));
};

exports.Difficulty = Difficulty;

const difficultyToText = difficulty => {
  switch (difficulty) {
    case _ContentDifficulty.ContentDifficulty.Foundational:
      return 'Foundational';

    case _ContentDifficulty.ContentDifficulty.Intermediate:
      return 'Intermediate';

    case _ContentDifficulty.ContentDifficulty.Advanced:
      return 'Advanced';

    case _ContentDifficulty.ContentDifficulty.Expert:
      return 'Expert';
  }
};

const DifficultyContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Difficulty__DifficultyContainer",
  componentId: "wimcny-1"
})(["", " width:108px;margin:8px 16px 0 auto;"], (0, _exports.flexFlow)('column'));

const DifficultyBars = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Difficulty__DifficultyBars",
  componentId: "wimcny-2"
})(["", ""], (0, _exports.flexFlow)('row'));

const DifficultyBar = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Difficulty__DifficultyBar",
  componentId: "wimcny-3"
})(({
  color
}) => (0, _styledComponents.css)(["background-color:", ";margin:0 4px 0 0;width:24px;height:8px;"], (0, _exports.getColor)(color)));