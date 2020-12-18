"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDifficultyColor = exports.getDifficultyColorByLevel = exports.ContentDifficulty = void 0;

var _color = require("../../helpers/color");

let ContentDifficulty;
exports.ContentDifficulty = ContentDifficulty;

(function (ContentDifficulty) {
  ContentDifficulty[ContentDifficulty["Foundational"] = 0] = "Foundational";
  ContentDifficulty[ContentDifficulty["Intermediate"] = 1] = "Intermediate";
  ContentDifficulty[ContentDifficulty["Advanced"] = 2] = "Advanced";
  ContentDifficulty[ContentDifficulty["Expert"] = 3] = "Expert";
})(ContentDifficulty || (exports.ContentDifficulty = ContentDifficulty = {}));

const FALLBACK_DIFFICULTY_COLOR = _color.Colors.Gray12;
/**
 * Get the color associated
 */

const getDifficultyColorByLevel = (difficulty, level) => difficulty > level ? getDifficultyColor(difficulty) : FALLBACK_DIFFICULTY_COLOR;

exports.getDifficultyColorByLevel = getDifficultyColorByLevel;

const getDifficultyColor = difficulty => difficultyColor[difficulty];

exports.getDifficultyColor = getDifficultyColor;
const difficultyColor = {
  [ContentDifficulty.Foundational]: _color.Colors.Tier4,
  [ContentDifficulty.Intermediate]: _color.Colors.Tier3,
  [ContentDifficulty.Advanced]: _color.Colors.Tier2,
  [ContentDifficulty.Expert]: _color.Colors.Tier1
};